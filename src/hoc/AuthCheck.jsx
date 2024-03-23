import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AuthCheck = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

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
