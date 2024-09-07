import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, SetIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    SetIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_small.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute my-28 mx-auto right-0 left-0 p-12 bg-black text-white bg-opacity-80 rounded-sm">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-sm bg-gray-700 border border-gray-500"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-sm bg-gray-700 border border-gray-500"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4  w-full rounded-sm bg-gray-700 border border-gray-500"
        ></input>
        <button className="p-4 my-6 rounded-sm w-full bg-red-700">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {isSignInForm ? (
          <p className="cursor-pointer" onClick={toggleSignInForm}>
            New to Netflix? <b>Sign up now.</b>
          </p>
        ) : (
          <p className="cursor-pointer" onClick={toggleSignInForm}>
            Already Registered! <b>Sign In now.</b>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
