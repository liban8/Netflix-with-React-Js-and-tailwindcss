import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/Firebase";
function SingUp() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data)=>{
      try{
        const  {email, password} = data
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        alert("Successfully Registered")
        console.log(userCredentials);
      }
      catch(err){
        console.log(err)
      }
    }

  return (
    <div className="relative flex h-screen w-screen flex-col justify-center">
      <img
        src="./images/misc/home.jpeg"
        alt=""
        className="absolute -z-10 h-screen w-full object-cover opacity-60"
      />
      <Link to="/">
        <img
          src="./images/Netflix_2015_logo.svg.png"
          className=" absolute top-5 left-2 w-[150px] object-cover"
          alt=""
        />
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}
        className="relative  mx-80 flex flex-col justify-center  bg-black/70 
        px-10 py-5 space-y-8"
      >
        <h2 className="text-3xl font-bold">Sing Up </h2>
        <div>
        <input {...register("email", {required: true})} type="email" placeholder="Email" className="formcontrol" />
       {errors.email && <p className="text-red-700">!this field is reques</p>}
            
        </div>
        <div>
        <input {...register("password", {required: true})} type="password" placeholder="Password" className="formcontrol" />
        {errors.password && <p className="text-red-700">!this field is reques</p>}
        </div>
        <button className="btn"> Login</button>

        <div className="flex mx-2 justify-center space-x-3">
            <p className="text-[#8d8d8d]">Already have a account </p>
            <Link to="/login" className="hover:underline"> LogIn</Link>
        </div>
      </form>
    </div>
  );
}

export default SingUp;
