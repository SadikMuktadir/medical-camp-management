import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const axiosPublic = useAxiosPublic();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password can not be smaller than six characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password must have a capital letter");
      return;
    } else if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
      setRegisterError("Password must have a special character");
      return;
    } else if (!/\d/.test(password)) {
      setRegisterError("Password must have at least one numeric character");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const userInfo = {
          name: name,
          email: email,
          image: image,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
        });
        const user = userCredential.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Register Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/");
        console.log(user);
        updateProfile(user, {
          displayName: name,
          photoURL: image,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-[250px] lg:w-[500px] mr-0 lg:mr-[100px]">
            <img
              src="https://i.ibb.co/Jc36wVL/christiann-koepke-Wi-E01m-C9-At-Y-unsplash.jpg"
              alt=""
            />
          </div>
          <div className="card shrink-0 max-w-sm shadow-2xl w-[250px] lg:w-[500px]">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  name="image"
                  type="text"
                  placeholder="image"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <input type="button" value="Register" />
                </button>
              </div>
              {registerError && (
                <p className="font-bold text-red-500 text-[20px]">
                  {registerError}
                </p>
              )}
              <div>
                <p>
                  Already register!!!
                  <Link to="/login">
                    <span className="text-blue-700">Login</span>
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

export default Register;
