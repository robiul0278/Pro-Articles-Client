import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState('');
  const { Login, googleSignIn, gitHubSignIn, profileUpdate } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        const saveUser = { name: user.displayName, email: user.email, image: user.photoURL };
        fetch("https://premium-articles-platform-sever.vercel.app/users", {
          method: "POST",
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(() => {
            reset();
            profileUpdate().then(() => {
              toast.success("Login successful!", {
                position: "top-center",
                theme: "light",
                autoClose: 3000,
              });
              navigate(from, { replace: true });
            });
          });
      })
      .catch(err => setError(err.message));
  };

  const handleGit = () => {
    gitHubSignIn()
      .then(() => {
        toast.success("Login successful!", {
          position: "top-center",
          theme: "light",
          autoClose: 3000,
        });
        navigate(from, { replace: true });
      })
      .catch(err => setError(err.message));
  };
  

  const onSubmit = (data) => {
    Login(data.email, data.password)
      .then(result => {
        const user = result.user;
        const saveUser = { name: user.displayName, email: user.email, image: user.photoURL };
        fetch("https://premium-articles-platform-sever.vercel.app/users", {
          method: "POST",
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(() => {
            reset();
            toast.success("Login successful!", {
              position: "top-center",
              theme: "light",
              autoClose: 3000,
            });
            navigate(from, { replace: true });
          });
        profileUpdate().catch(err => setError(err.message));
      })
      .catch(err => setError(err.message));
  };

  return (
    <section className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Image */}
          <div className="hidden md:flex">
            <img src="login.svg" alt="Login illustration" className="w-full h-auto" />
          </div>

          {/* Login Form */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8 w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">Login ProWriter</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  required
                />
                {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="my-4 text-center font-semibold">OR</div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleGoogle}
                className="flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100 transition"
              >
                <FcGoogle size={20} /> Google
              </button>
              <button
                onClick={handleGit}
                className="flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100 transition"
              >
                <FaGithub size={20} /> GitHub
              </button>
            </div>

            {/* Register Link */}
            <div className="text-center mt-6 text-sm">
              New member?{" "}
              <Link to="/register" className="text-blue-600 font-medium hover:underline">
                Create an account.
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Login;
