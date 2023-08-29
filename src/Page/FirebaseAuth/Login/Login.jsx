import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";


const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError,] = useState('')
  const { Login, googleSignIn, gitHubSignIn, profileUpdate } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";



  // Google Login ==========================

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const saveUser = { name: user.displayName, email: user.email, image: user.photoURL }
        fetch("https://premium-articles-platform-sever.vercel.app/users", {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
          .then((response) => response.json())
          .then(() => {
            reset();
            profileUpdate()
            .then(() => {
              Swal.fire({
                title: 'Login Successfully !.',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
            })
            navigate(from, { replace: true });
          })
      }).catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }


  // GitHub Login ===========================

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

  // email password login ====================

  const onSubmit = (data) => {
    Login(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        const saveUser = { name: user.displayName, email: user.email, image: user.photoURL }
        fetch("https://premium-articles-platform-sever.vercel.app/users", {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
          .then((response) => response.json())
          .then(() => {
            reset();
            navigate(from, { replace: true });
          })
        profileUpdate()
          .then(() => {
            Swal.fire({
              title: 'Login Successfully !.',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            });
          })
          .catch(error => {
            setError(error.message);
          })
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorMessage);
      });
  };
  return (
    <section className="bg-gradient-to-r from-[#EFF6FF] via-[#fffaff] to-[#FFFFFF]">
      <div className="px-4 lg:px-0 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
          <div className='hidden lg:flex'>
            <img className='w-[100%] h-auto' src="login.svg" alt="" data-aos="zoom-in" />
          </div>
          {/* From  */}
          <div className="py-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card bg-white flex-shrink-0 w-full max-w-md border-b-8 border-b-error border"
            >
              <div className="card-body font-bold">
                <div className="text-center">
                  <h1 className="text-error font-bold text-3xl">Login ProWriter</h1>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    name="email"
                    type="email"
                    placeholder="Your email"
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
                    placeholder="Your password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className=" text-orange-500">
                      {error}
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <button className="btn btn-error text-white font-semibold">Login</button>
                </div>
                <div>
                  <h2 className="text-center font-bold">OR</h2>
                  <h2 className="font-semibold text-center">
                    to continue to ProWriter
                  </h2>
                  <div className="grid grid-cols-2 gap-5 pt-2">
                    <button
                      onClick={handleGoogle}
                      className="btn  bg-blue-500 hover:bg-blue-600 text-white md:w-44"
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
                <div className="text-center pt-3">
                  <div>
                    New member ?&ensp;
                    <Link to="/register" className=" text-blue-600">
                      Create an account.
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;