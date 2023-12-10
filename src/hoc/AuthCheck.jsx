import { Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const AuthCheck = ({ children }) => {

    const token = localStorage.getItem('token')

    if (!token) {
        return <Navigate to="/login" />
    } else {

        //const decoded = jwtDecode(token)
    }

    return <>{children}</>

}


export default AuthCheck