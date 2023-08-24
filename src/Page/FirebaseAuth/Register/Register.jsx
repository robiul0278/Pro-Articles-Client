import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";


const Register = () => {
    const [error, setError] = useState('')
    const { Register, profileUpdate, googleSignIn, gitHubSignIn } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    // Google Login ===
    const handleGoogle = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true })
                console.log(user)
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }


    // GitHub Login ===
    const handleGit = () => {
        gitHubSignIn()
            .then((result) => {
                navigate(from, { replace: true })
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    // email password register ===============

    const onSubmit = (data) => {
        Register(data.email, data.password, data.name)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user)
                setError('')
                Swal.fire({
                    title: 'Registration Successfully !',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                profileUpdate()
                    .then(() => {
                        console.log("profile updated");
                        reset();
                    })
                    .catch(error => {
                        setError(error.message);
                    })

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });


    }

    return (
        <section className="bg-gradient-to-r from-[#EFF6FF] via-[#fffaff] to-[#FFFFFF]">
            <div className="px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 justify-center items-center">
                    <div className="hidden lg:flex">
                        <img
                            className="w-[100%] h-auto"
                            src="register.svg"
                            alt=""
                            data-aos="zoom-in"
                        />
                    </div>
                    {/* From  */}
                    <div>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="card flex-shrink-0 w-full bg-white max-w-md border-b-8 border-b-error border"
                        >

                            <div className="card-body font-bold">
                                <div className="text-center">
                                    <h1 className="text-error font-bold text-3xl">Register ProWriter</h1>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        {...register("name", { required: true })}
                                        name="name"
                                        type="text"
                                        placeholder="name"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        {...register("email", { required: true })}
                                        name="email"
                                        type="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        {...register("password", { required: true })}
                                        name="password"
                                        type="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <p className=" text-orange-800">{error}</p>
                                <div className="form-control">
                                    <button className="btn btn-error text-white font-semibold">Register</button>
                                </div>
                                <div>
                                    <h2 className="text-center font-bold">OR</h2>
                                    <h2 className="font-semibold text-center">
                                        to continue to ProWriter
                                    </h2>
                                    <div className="gap-5 grid grid-cols-2 pt-2">
                                        <button
                                            onClick={handleGoogle}
                                            className="btn md:w-44 bg-blue-500 hover:bg-blue-600  text-white"
                                        >
                                            <FcGoogle className=""></FcGoogle> Google
                                        </button>
                                        <button
                                            onClick={handleGit}
                                            className="btn md:w-44 bg-blue-500 hover:bg-blue-600  text-white"
                                        >
                                            <FaGithub className=""></FaGithub> GitHub
                                        </button>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <span>
                                        You have already account?&ensp;
                                        <Link to="/login" className=" text-blue-600">
                                            Login here
                                        </Link>{" "}
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;