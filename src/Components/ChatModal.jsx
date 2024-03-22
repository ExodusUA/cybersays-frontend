import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import close from "../images/CyberSaysPage/closeMenu.png";
import send from "../images/CyberSaysPage/send.png";
import GifModal from "./GifModal";
import UserMessage from "./Messages/UserMessage";
import BotMessage from "./Messages/BotMessage";
import { useDesign } from "../Helpers/Design/DesignContext";
import int from "../images/NewDesign/chatFlag/flag_int.png";
import ModerMessage from "./Messages/ModerMessage";
import { useLanguage } from "../Helpers/Languages/LanguageContext";
import mixpanel from "mixpanel-browser";
import moengage from "@moengage/web-sdk";

function ChatModal({ user, setOpen, languageData, userCountry }) {
  const countries = [
    {
      name: "International",
      code: "int",
      icon: int,
    },
    {
      name: "USA",
      code: "usa",
      icon: require("../images/flags/flag_us.jpg"),
    },
    {
      name: "UK",
      code: "uk",
      icon: require("../images/flags/flag-en.png"),
    },
    {
      name: "Canada",
      code: "can",
      icon: require("../images/flags/flag_can.jpg"),
    },
    {
      name: "India",
      code: "in",
      icon: require("../images/flags/flag-in.jpg"),
    },
    {
      name: "Australia",
      code: "au",
      icon: require("../images/flags/flag-au.jpg"),
    },
    {
      name: "New Zealand",
      code: "nz",
      icon: require("../images/flags/flag-nz.jpg"),
    },
    {
      name: "France",
      code: "fr",
      icon: require("../images/flags/flag-fr.jpg"),
    },
    {
      name: "Germany",
      code: "de",
      icon: require("../images/flags/flag-de.jpg"),
    },
    {
      name: "Brazil",
      code: "br",
      icon: require("../images/flags/flag-pt.png"),
    },
    {
      name: "Ukraine",
      code: "ua",
      icon: require("../images/flags/flag-ua.jpg"),
    },
  ];

  const { design } = useDesign();
  const { language } = useLanguage();

  const socket = io(process.env.REACT_APP_CHAT_URL, {
    path: "/chat/socket",
    transports: ["websocket"],
    secure: true,
    body: {
      userId: user?.id,
    },
  });

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [online, setOnline] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState("int");
  const [userCountryCode, setUserCountry] = useState(null);
  const [countryOpen, setCountryOpen] = useState(false);

  useEffect(() => {
    if (userCountry === null) return;
    let country;

    switch (userCountry) {
      case "US":
        country = "usa";
        break;
      case "UK":
        country = "uk";
        break;
      case "CA":
        country = "can";
        break;
      case "IN":
        country = "in";
        break;
      case "AU":
        country = "au";
        break;
      case "NZ":
        country = "nz";
        break;
      case "FR":
        country = "fr";
        break;
      case "DE":
        country = "de";
        break;
      case "BR":
        country = "br";
        break;
      case "UA":
        country = "ua";
        break;
      default:
        country = "int";
    }
    setUserCountry(country);
    setSelectedCountry(country);

    mixpanel.track("chat_click", {
      distinct_id: user?.id,
      language: language,
      is_referred: user?.referral_id ? "Yes" : "No",
      vegas_tickets: user?.raffle_tickets,
      points: user?.points,
      user_id: user?.id,
      USD_earned: user?.allTimeEarned,
      chat_region: country,
      user_email: user?.email,
    });

    moengage.track_event("chat_click", {
      distinct_id: user?.id,
      language: language,
      is_referred: user?.referral_id ? "Yes" : "No",
      vegas_tickets: user?.raffle_tickets,
      points: user?.points,
      user_id: user?.id,
      USD_earned: user?.allTimeEarned,
      chat_region: country,
      user_email: user?.email,
    });
  }, [userCountry]);

  useEffect(() => {
    console.log("selectedCountry", selectedCountry.toUpperCase());
    updateMessages();
  }, [selectedCountry]);

  const updateMessages = async () => {
    console.log("GET " + selectedCountry.toUpperCase() + " messages");
    socket.emit("getMessages", selectedCountry.toUpperCase());

    socket.on("messages", (history) => {
      if (history.length === undefined) return;
      setMessages(history);
    });
  };

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("setUserOnline", { userId: user.id, socketId: socket.id });
    });

    if (selectedCountry === undefined) return;

    /* GET MESSAGES */

    socket.emit("getMessages", selectedCountry.toUpperCase());

    socket.on("messages", (history) => {
      if (history.length === undefined) return;
      setMessages(history);
    });

    /* ONLINE */

    socket.on("onlineCount", (count) => {
      console.log("onlineCount", count);
      setOnline(count);
    });

    socket.on("newMessage", (msg) => {
      console.log("newMessage", msg);
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  let username = user?.email;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("userCountry", userCountry);

    if (message.length === 0) return alert("Please enter a message");
    socket.emit("addMessage", {
      message: message,
      name: username,
      userid: user.id,
      country: selectedCountry.toUpperCase(),
      token: "",
      avatar: "",
    });

    mixpanel.track("message_sent", {
      distinct_id: user?.id,
      is_referred: user?.referral_id ? "Yes" : "No",
      vegas_tickets: user?.raffle_tickets,
      points: user?.points,
      user_id: user?.id,
      USD_earned: user?.allTimeEarned,
      page_name: "Refferals",
      region: selectedCountry.toUpperCase(),
      language: language,
    });

    moengage.track_event("message_sent", {
      distinct_id: user?.id,
      is_referred: user?.referral_id ? "Yes" : "No",
      vegas_tickets: user?.raffle_tickets,
      points: user?.points,
      user_id: user?.id,
      USD_earned: user?.allTimeEarned,
      page_name: "Refferals",
      region: selectedCountry.toUpperCase(),
      language: language,
    });

    setMessage("");
  };

  const filterMessages = (messages) => {
    messages.sort((a, b) => a.datetime - b.datetime);
    return messages;
  };

  const chatContainer = useRef(null);

  const scrollToBottom = () => {
    if (chatContainer.current) {
      chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmitGif = (gif) => {
    socket.emit("addMessage", {
      // message: `<img class="w-full rounded-[20px] mt-2" src="${gif}" alt="gif" />`,
      message: `[GIF]${gif}[GIF]`,
      name: username,
      userid: user.id,
      country: selectedCountry.toUpperCase(),
      token: "",
      avatar: "",
    });

    mixpanel.track("gif_select", {
      distinct_id: user?.id,
      is_referred: user?.referral_id ? "Yes" : "No",
      vegas_tickets: user?.raffle_tickets,
      points: user?.points,
      user_id: user?.id,
      USD_earned: user?.allTimeEarned,
      page_name: "Refferals",
      region: selectedCountry.toUpperCase(),
      language: language,
      gif_selected: gif,
    });
    moengage.track_event("gif_select", {
      distinct_id: user?.id,
      is_referred: user?.referral_id ? "Yes" : "No",
      vegas_tickets: user?.raffle_tickets,
      points: user?.points,
      user_id: user?.id,
      USD_earned: user?.allTimeEarned,
      page_name: "Refferals",
      region: selectedCountry.toUpperCase(),
      language: language,
      gif_selected: gif,
    });
    setGifModal(false);
  };

  const [gifModal, setGifModal] = useState(false);

  const getMessageComponent = (message, index) => {
    switch (message.type) {
      case "user":
        return <UserMessage message={message} owner={message.name === user?.email} index={index} />;
      case "bot":
        return <BotMessage message={message} index={index} />;
      case "moderator":
        return <ModerMessage message={message} index={index} />;
      default:
        return <UserMessage message={message} owner={message.name === user.email} index={index} />;
    }
  };
  const getCountryName = () => {
    let countryPhoto = countries.find((item) => item.code === selectedCountry)?.icon;
    let countryName = countries.find((item) => item.code === selectedCountry)?.name;

    return (
      <p className=" flex items-center justify-between ">
        <img className="h-[16px] w-[17px] lg:mr-2" src={countryPhoto} alt={selectedCountry} /> <span className="saira hidden text-[12px] font-bold text-white lg:block">{countryName}</span>
      </p>
    );
  };

  const sanitizeInput = (input) => {
    return input;
    //  return input.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <div className="fixed top-0 z-[99999] h-screen w-screen bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md ">
      <div className="m-auto max-w-[600px] p-4 ">
        <div className="flex items-center justify-between md:my-4">
          <div className="flex w-[130px] items-center">
            {design === "0" ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8" fill="#FFED63" fill-opacity="0.2" />
                <circle cx="7.99922" cy="7.99971" r="4.8" fill="#FFED63" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8" fill="#FFED63" fill-opacity="0.2" />
                <circle cx="7.99922" cy="7.99971" r="4.8" fill="url(#paint0_linear_1464_400936)" />
                <defs>
                  <linearGradient id="paint0_linear_1464_400936" x1="3.19922" y1="8.09383" x2="12.7992" y2="8.09383" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8FE5EC" />
                    <stop offset="1" stop-color="#DDBAFC" />
                  </linearGradient>
                </defs>
              </svg>
            )}
            <p className="saira ml-2 text-[16px] font-medium">
              {online} {languageData?.chatOnline}
            </p>
          </div>
          <div className=" relative mr-2  flex w-full justify-end">
            <div>
              <button
                onClick={(e) => {
                  setCountryOpen(!countryOpen);
                  e.stopPropagation();
                }}
                className={`${design === "0" ? " border-[#FFED63]" : "border-[#A2DBF0]"} font-Inter  flex  w-full max-w-[170px] items-center gap-2 rounded-[50px] border-[2px] bg-[#474747] px-[10px] py-[5px]`}
              >
                <p className="flex items-center justify-between text-[12px] font-bold text-white">
                  {getCountryName()} <p className="ml-1 "></p>
                  <svg className={`${countryOpen ? "" : "rotate-180"} ml-2`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.00401 5.19696L2.18601 10.8583C2.13912 10.9049 2.08346 10.9418 2.02224 10.9667C1.96101 10.9917 1.89545 11.0042 1.82934 11.0037C1.76323 11.0031 1.69789 10.9895 1.63709 10.9635C1.57629 10.9375 1.52125 10.8998 1.47514 10.8524C1.42904 10.805 1.39279 10.7489 1.36849 10.6875C1.34419 10.626 1.33233 10.5603 1.33359 10.4942C1.33484 10.4281 1.3492 10.3629 1.37582 10.3024C1.40244 10.2419 1.4408 10.1872 1.48867 10.1416L7.65534 4.14163C7.74868 4.05081 7.87378 4 8.00401 4C8.13424 4 8.25933 4.05081 8.35267 4.14163L14.5193 10.1416C14.5672 10.1872 14.6056 10.2419 14.6322 10.3024C14.6588 10.3629 14.6732 10.4281 14.6744 10.4942C14.6757 10.5603 14.6638 10.626 14.6395 10.6875C14.6152 10.7489 14.579 10.805 14.5329 10.8524C14.4868 10.8998 14.4317 10.9375 14.3709 10.9635C14.3101 10.9895 14.2448 11.0031 14.1787 11.0037C14.1126 11.0042 14.047 10.9917 13.9858 10.9667C13.9246 10.9418 13.8689 10.9049 13.822 10.8583L8.00401 5.19696Z"
                      fill="white"
                    />
                  </svg>
                </p>
              </button>
            </div>

            {countryOpen && (
              <div
                onClick={(e) => e.stopPropagation()}
                className={`absolute top-[40px] mt-0 border-[2px] p-4 ${design === "0" ? " border-[#FFED63]" : "border-[#A2DBF0]"} right-0  inline-block w-[150px] rounded-[8px]  bg-[#474747] py-2`}
              >
                <p
                  className="saira my-2 flex cursor-pointer items-center text-[12px] font-medium text-white"
                  onClick={() => {
                    setSelectedCountry("int");
                    setCountryOpen(false);
                  }}
                >
                  <img className="mr-1 h-[16px] w-[16px]" src={int} alt="int" />
                  International
                </p>

                {countries
                  .filter((e) => e.code === userCountryCode)
                  .map((item, index) => (
                    <p
                      key={index}
                      className="saira my-2 flex cursor-pointer items-center text-[12px] font-medium text-white"
                      onClick={() => {
                        setSelectedCountry(item.code);
                        setCountryOpen(false);
                        setMessages([]);
                      }}
                    >
                      <img className="mr-1 h-[12px] w-[16px]" src={item.icon} alt="int" /> {item.name}
                    </p>
                  ))}
              </div>
            )}
          </div>
          <img onClick={(e) => setOpen(false)} className="h-[24px] w-[24px] cursor-pointer" src={design === "0" ? close : require("../images/NewDesign/closeBtn.png")} alt="close" />
        </div>
        <p className=" mt-3 text-center text-[18px] font-semibold md:text-[32px]">{languageData?.chatTitle}</p>
        <div
          className="h-[66vh] overflow-y-scroll  pb-4 duration-300  mac2:!h-[70vh] md:h-[77vh]"
          ref={chatContainer}
          style={{
            overflowY: "auto",
          }}
        >
          {messages.length > 0 ? filterMessages(messages).map((item, index) => getMessageComponent(item, index)) : <div className="saira mt-20 text-center">{languageData?.chatNotMessages}</div>}
        </div>
        <div className={`border-b-[2px]  ${design === "0" ? "border-[#FFED63]" : "border-[#A2DBF0]"}`}></div>
        <div className="mt-2 flex items-center justify-between md:mt-5">
          <div className=" relative  w-full">
            <input
              type="text"
              placeholder="Your message"
              className={`border-[2px] ${design === "0" ? "rounded-[50px] border-[#FFED63]" : "rounded-[14px] border-[#A2DBF0]"} saira w-[98%] px-5  py-[10px] pr-12 text-[14px] text-black outline-none`}
              value={message}
              onChange={(e) => setMessage(sanitizeInput(e.target.value))}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  handleSubmit(e);
                }
              }}
            />
            <svg onClick={(e) => setGifModal(true)} className="absolute right-4 top-[10px] cursor-pointer md:right-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V13H15C14.4696 13 13.9609 13.2107 13.5858 13.5858C13.2107 13.9609 13 14.4696 13 15V20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z"
                stroke="#1E1E1E"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 13V13.172C19.9999 13.7024 19.7891 14.211 19.414 14.586L14.586 19.414C14.211 19.7891 13.7024 19.9999 13.172 20H13"
                stroke="#1E1E1E"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div
            onClick={(e) => handleSubmit(e)}
            className={`h-[44px] min-w-[44px] border-[2px] ${design === "0" ? "border-[#FFED63]" : "border-[#A2DBF0]"} flex cursor-pointer items-center justify-center rounded-full  bg-white`}
          >
            <img className="h-[24px] w-[24px]  cursor-pointer  " src={send} alt="send" />
          </div>
        </div>
      </div>
      {gifModal && <GifModal languageData={languageData} setGifModal={setGifModal} handleSubmitGif={handleSubmitGif} />}
    </div>
  );
}

export default ChatModal;
