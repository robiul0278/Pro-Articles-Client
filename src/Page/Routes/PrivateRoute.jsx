import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Bars } from "react-loader-spinner";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    if (loading) {
        return (
            <>
                <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </>
        );
    }


    if (user?.email) {
        return children;
    }
    const handleNavigate = () => {
        Swal.fire({
            title: 'Please Login',
            text: "Login first then access this route!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Login!'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/login', { state: { from: location }, replace: true })
            }
            else {
                navigate('/');
            }
        })
    };

    return handleNavigate();
};

export default PrivateRoute;