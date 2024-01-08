import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    


    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-[500px] mr-[100px]">
            <img
              src="https://i.ibb.co/Jc36wVL/christiann-koepke-Wi-E01m-C9-At-Y-unsplash.jpg"
              alt=""
            />
          </div>
          <div className="card shrink-0 max-w-sm shadow-2xl w-[500px]">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
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
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#8D5CF6] p-3 rounded-[10px]">
                  <input type="button" value="Login" />
                </button>
              </div>
              <div>
              <p>
                Already registered?{" "}
                <Link to="/register" className="text-blue-700">
                  Register
                </Link>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
