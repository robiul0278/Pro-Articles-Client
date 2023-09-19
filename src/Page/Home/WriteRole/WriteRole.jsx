import Lottie from 'react-lottie';
import keyboard from '../../../assets/keyboard2.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ThemContext } from '../../../Routes/ThemProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
const WriteRole = () => {
    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [{ theme }] = useContext(ThemContext)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: keyboard,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };


    const handleLogin = () => {
        if(user){
            navigate('/dashboard/write')
        }
        else{
            Swal.fire({
                title: 'Please Login?',
                text: "You need to Login for write article!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Subscribe!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location }, replace: true })
                }
            })
        }
    }


    return (
        <section style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-white justify-center items-center">
            <div className='pl-16'>
                <h1 className='text-3xl font-semibold'>You can also write in ProWriter</h1>
                <h4 className='text-xl my-4'>Write quality content and earn from ProWriter! </h4>
                <div className='flex space-x-4'>
                    <p ><FontAwesomeIcon className='mr-1' icon={faCircleCheck} style={{ color: "#1968f0", }} />Compatible content</p>
                    <p><FontAwesomeIcon className='mr-1' icon={faCircleCheck} style={{ color: "#1968f0", }} />1200+ words</p>
                </div>
                <div className='flex space-x-4 mt-3'>
                    <p><FontAwesomeIcon className='mr-1' icon={faCircleXmark} style={{ color: "#ef3f3f", }} />Copy posts are not acceptable</p>
                    <p><FontAwesomeIcon className='mr-1' icon={faCircleXmark} style={{ color: "#ef3f3f", }} />Spelling mistakes are not acceptable</p>
                </div>
                <Link onClick={handleLogin} className="btn-sm btn btn-error mt-5 text-white font-semibold rounded">Write Article</Link>
            </div>
            <div>
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
            </div>
        </section>
    );
};

export default WriteRole;