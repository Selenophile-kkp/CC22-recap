import axios from "axios";
import React, { useState } from "react";
import useUserStore from "../stores/userStore";
import { useNavigate } from "react-router";

function Login() {
  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });

  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state) => state.setToken);
  const navigate = useNavigate();

  const inputStyle = "border p-0.5 px-2 border-gray-500 rounded-md";

  const hdlChange = (e) => {
    const { name, value } = e.target;
    setFormLogin((prv) => ({ ...prv, [name]: value }));
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("https://dummyjson.com/auth/login", formLogin);
    console.log(res.data);
    const { image, firstName, lastName, username, email, accessToken } =
      res.data;
    setUser({ image, firstName, lastName, username, email });
    setToken(accessToken);
    navigate("/profile");
  };

  //   console.log(formLogin);

  return (
    <div className="min-h-screen bg-amber-50 flex justify-center items-center p-4">
      <form
        onSubmit={hdlSubmit}
        className="bg-white p-7 w-full max-w-md flex flex-col rounded-2xl gap-1 "
      >
        <h2 className="text-center font-semibold ">Login</h2>
        <label htmlFor="">Username : </label>
        <input
          type="text"
          className={inputStyle}
          name="username"
          placeholder="username"
          onChange={hdlChange}
          value={formLogin.username}
        />

        <label htmlFor="">Password : </label>
        <input
          type="password"
          className={inputStyle}
          name="password"
          placeholder="password"
          onChange={hdlChange}
          value={formLogin.password}
        />

        <button className="bg-amber-200 py-1 mt-3 rounded-2xl cursor-pointer hover:bg-amber-400">
          Register
        </button>
      </form>
    </div>
  );
}

export default Login;
