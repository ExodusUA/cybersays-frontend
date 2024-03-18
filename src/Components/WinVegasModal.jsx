import React, { useState } from "react";
import close from "../images/CyberSaysPage/closeMenu.png";
import { useDesign } from "../Helpers/Design/DesignContext";
import point1 from "../images/NewDesign/newPoint1.png";
import point2 from "../images/NewDesign/newPoint2.png";
import point3 from "../images/NewDesign/newPoint3.png";
import { PDFDownloadLink, Document, Page, View, Text } from "@react-pdf/renderer";
import { Link } from "react-router-dom";

function WinVegasModal({ setOpen, languageData, user }) {
  const [pdfLoading, setPdfLoading] = useState(false);

  const { design } = useDesign();

  return (
    <div className="fixed top-0 z-[99999] h-screen w-screen bg-[#1E1E1E] bg-opacity-60 p-4 backdrop-blur-md lg:flex">
      <div className="relative m-auto max-w-[600px]">
        <div className="right-0 top-[-70px] flex justify-end md:my-4 lg:absolute lg:mb-10">
          <img onClick={(e) => setOpen(false)} className="h-[24px] w-[24px] cursor-pointer" src={design === "0" ? close : require("../images/NewDesign/closeBtn.png")} alt="close" />
        </div>
        <div>
          <p className=" m-auto text-center text-[18px] font-semibold lg:text-[24px]">{languageData?.winTitle}</p>

          <div className="mt-4">
            <div className="flex items-center">
              <img className="mr-2 h-[32px] w-[32px]" src={point1} alt="point1" />
              <p className="saira text-left text-[16px] font-semibold lg:text-[20px]">{languageData?.winPoint1Title}</p>
            </div>
            <ul className="ml-[60px] mt-1 list-disc">
              <li className="saira text-[12px] font-medium lg:text-[14px]">{languageData?.winPoint1li1}</li>
            </ul>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <img className="mr-2 h-[32px] w-[32px]" src={point2} alt="point2" />
              <p className="saira text-left text-[16px] font-semibold lg:text-[20px]">{languageData?.winPoint2Title}</p>
            </div>
            <ul className="ml-[60px] mt-1 list-disc">
              <li className="saira text-[12px] font-medium lg:text-[14px]">{languageData?.winPoint2li1}</li>
            </ul>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <img className="mr-2 h-[32px] w-[32px]" src={point3} alt="point2" />

              <p className="saira text-left text-[16px] font-semibold lg:text-[20px]">{languageData?.winPoint3Title}</p>
            </div>
            <ul className="ml-[60px] mt-1 list-disc">
              <li className="saira text-[14px] font-medium">
                <PDFDownloadLink className="cursor-pointer" document={<MyDocument {...user} />} fileName="cybersays.pdf">
                  {({ blob, url, loading, error }) => <span className="saira cursor-pointer text-[14px] font-bold underline ">{languageData?.winPoint3li1}</span>}
                </PDFDownloadLink>
              </li>
              <li className="saira text-[14px] font-medium">{languageData?.winPoint3li2}</li>
              <li className="saira text-[14px] font-medium">{languageData?.winPoint3li3}</li>
            </ul>
          </div>
          <p className="gradient-goodluck mt-2 text-center text-[18px] font-semibold lg:text-[24px]">{languageData?.winPointEnd}</p>
          <Link onClick={(e) => setOpen(false)} to="/promotion-terms" target="_blank">
            <p className="mt-2 text-center text-[8px] font-semibold text-[#D9D9D9] underline lg:text-[10px]">{languageData?.winPointEndLink}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WinVegasModal;

const MyDocument = (userData) => (
  <Document>
    <Page size="A4" style={{ padding: "40px" }}>
      <View style={{ marginTop: "20px" }}>
        <Text style={{ fontSize: "12px", marginBottom: "10px" }}>Dear CyberSays Team,</Text>
        <Text style={{ fontSize: "12px", marginBottom: "20px" }}>
          I am writing to participate in the Vegas Weekend as outlined in the CyberSays Promotion Terms. I am excited about the opportunity to win a trip to Las Vegas and experience the thrill of Sin City. I kindly
          request a ticket for the competition. Please find my details below:
        </Text>
        <Text style={{ fontSize: "12px", marginBottom: "5px" }}>
          <Text style={{ fontWeight: 700 }}>Name:</Text> ____________________________
        </Text>
        <Text style={{ fontSize: "12px", marginBottom: "5px" }}>
          <Text style={{ fontWeight: 700 }}>CyberSays User ID:</Text> {userData?.id}
        </Text>
        <Text style={{ fontSize: "12px", marginBottom: "5px" }}>Company's Address: Agias Zonis & Thessalonikis, Nicolaou Pentadromos Centre, Office 903A, Limassol, Cyprus, 3025</Text>
        <Text style={{ fontSize: "12px", marginBottom: "20px" }}>Thank you for providing this chance, and I look forward to hearing from you soon.</Text>
        <Text style={{ fontSize: "12px", marginBottom: "20px" }}>Best regards,</Text>
        <Text style={{ fontSize: "12px", marginBottom: "10px" }}>Signature: ____________________________</Text>
      </View>
    </Page>
  </Document>
);
