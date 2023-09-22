/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom";
import { Dna } from "react-loader-spinner";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
    const { loading } = useAuth();
    const {user} = useSelector(state=> state.auth)
    const location = useLocation();
    const navigate = useNavigate();

    if (loading) {
        return (
            <div className="flex items-center bg-white justify-center py-32">
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
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