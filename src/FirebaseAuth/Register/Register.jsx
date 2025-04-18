import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const [error, setError] = useState('');
  const { Register, profileUpdate, googleSignIn, gitHubSignIn } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    googleSignIn()
      .then(() => navigate(from, { replace: true }))
      .catch((error) => setError(error.message));
  };

  const handleGit = () => {
    gitHubSignIn()
      .then(() => navigate(from, { replace: true }))
      .catch((error) => setError(error.message));
  };

    // email password register ===============
    const onSubmit = (data) => {
        Register(data.email, data.password, data.name)
          .then(({ user }) => {
            console.log(user);
            setError('');
            return profileUpdate();
          })
          .then(() => {
            console.log("Profile updated");
            reset();
            Swal.fire({
              title: 'Registration Successfully!',
              showClass: { popup: 'animate__animated animate__fadeInDown' },
              hideClass: { popup: 'animate__animated animate__fadeOutUp' },
            });
          })
          .catch((err) => setError(err.message));
      };
      

  return (
    <section className="pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="hidden lg:flex">
            <img
              className="w-full h-auto"
              src="register.svg"
              alt="Register Illustration"
              data-aos="zoom-in"
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border-t-4 border-blue-500">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-blue-500">Register ProWriter</h1>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Name</label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Password</label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              {error && <p className="text-sm text-red-600 font-medium">{error}</p>}

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition duration-200"
              >
                Register
              </button>

              <div className="text-center">
                <p className="font-medium text-gray-700">OR</p>
                <p className="text-sm text-gray-600 mb-3">to continue to ProWriter</p>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={handleGoogle}
                    className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    <FcGoogle size={20} /> Google
                  </button>
                  <button
                    type="button"
                    onClick={handleGit}
                    className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    <FaGithub size={20} /> GitHub
                  </button>
                </div>
              </div>

              <div className="text-center pt-4 text-sm">
                Already have an account?&ensp;
                <Link to="/login" className="text-blue-600 hover:underline font-semibold">
                  Login here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
