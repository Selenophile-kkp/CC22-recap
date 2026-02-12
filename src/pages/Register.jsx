import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Register() {
  const [fromData, setFormdata] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
  });
  const inputStyle = "border p-0.5 px-2 border-gray-500 rounded-md";

  const navigate = useNavigate();

  const hdlChange = (evt) => {
    const { name, value } = evt.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
    console.log(name, value);
  };

  const hdlSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        fromData
      );
      console.log("Register successfully", res.data);
      toast.success("ลงทะเบียนสำเร็จ!!");
      navigate("/post");
    } catch (error) {
      console.log("เกิดข้อผิดพลาด");
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 flex justify-center items-center p-4">
      <form
        onSubmit={hdlSubmit}
        className="bg-white p-7 w-full max-w-md flex flex-col rounded-2xl gap-1 "
      >
        <h2 className="text-center font-semibold">Create Account</h2>
        <label htmlFor="">Username : </label>
        <input
          type="text"
          className={inputStyle}
          name="username"
          placeholder="username"
          onChange={hdlChange}
          value={fromData.username}
        />

        <label htmlFor="">Password : </label>
        <input
          type="password"
          className={inputStyle}
          name="password"
          placeholder="password"
          onChange={hdlChange}
          value={fromData.password}
        />

        <label htmlFor="">Emaill : </label>
        <input
          type="text"
          className={inputStyle}
          name="email"
          placeholder="email"
          onChange={hdlChange}
          value={fromData.email}
        />

        <label htmlFor="">Phone : </label>
        <input
          type="number"
          className={inputStyle}
          name="phone"
          placeholder="081-XXX-XXXX"
          onChange={hdlChange}
          value={fromData.phone}
        />

        <button className="bg-amber-200 py-1 mt-3 rounded-2xl cursor-pointer hover:bg-amber-400">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
