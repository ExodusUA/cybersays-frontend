import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthCheck = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const uid = window.location.pathname.split("/")[1];

  useEffect(() => {
    if (uid !== null && uid !== undefined && uid !== "" && uid !== "login") {
      window.localStorage.setItem("ref", uid);
    }
  }, [uid]);

  let params = new URLSearchParams(window.location.search);
  let email = params.get("email");

  let queryParams = "";

  let fbc = document.cookie.match(/_fbc=([^;]+)/);
  let fbp = document.cookie.match(/_fbp=([^;]+)/);

  let fbclid = params.get("fbclid");

  if (fbclid !== null && !queryParams.includes("fbclid")) {
    queryParams = `?fbclid=${fbclid}`;

    if (fbc) {
      queryParams += `&fbclid=${fbc[1].split(".")[0]}`;
    }
  }

  if (!token) {
    return <Navigate to={`${email === null ? `/login?${queryParams}` : "/login?email=" + email}${queryParams}`} />;
  } else {
    //const decoded = jwtDecode(token)
  }

  return <>{children}</>;
};
export default AuthCheck;
