import { Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const AuthCheck = ({ children }) => {

    const token = localStorage.getItem('token')

    let params = new URLSearchParams(window.location.search);
    let email = params.get('email');

    if (!token) {
        return <Navigate to={`${email === null ? '/login' : '/login?email=' + email}`} />
    } else {

        //const decoded = jwtDecode(token)
    }

    return <>{children}</>

}
export default AuthCheck