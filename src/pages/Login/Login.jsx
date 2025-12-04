import React, { useState } from "react";
import { signup, login } from '../../firebase'; 
const loading1 = '/images/misc/loading.gif'

function Login() {
  const [signState, setSignState] = useState("Sign In");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Loading
  const [loading,setLoading]= useState(false)

  //  user authentication (SignUp or SignIn)
  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true)
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
      
    }
    setLoading(false)
  };

  return (
    loading? <div className="w-[100%] h-screen flex items-center justify-center">
      <img src={loading1} alt="" className="w-[60px]" />
    </div>:
    <div className="h-screen w-screen object-cover p-[20px] overlay-bg">
      <div>
        <img src="/navLogo.png" alt="" className="w-[150px]" />
      </div>
      <div>
        <form className="w-screen max-w-[450px] bg-[rgba(0,0,0,0.75)] rounded-[4px] p-[50px] m-auto">
          <h1 className="text-[32px] font-medium ml-[14px] mb-[25px]">
            {signState}
          </h1>
          {signState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Your Name"
              className="w-[100%] h-[50px] bg-[#333] text-white mx-[12px] border-0 outline-0 rounded-[4px] px-[16px] py-[20px] text-[16px] font-[500] mb-[20px] placeholder:text-[16px]"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : (
            <></>
          )}

          <input
            type="email"
            placeholder="Email "
            className="w-[100%] h-[50px] bg-[#333] text-white mx-[12px] border-0 outline-0 rounded-[4px] px-[16px] py-[20px] text-[16px] font-[500] mb-[20px] placeholder:text-[16px]"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[100%] h-[50px] bg-[#333] text-white mx-[12px] border-0 outline-0 rounded-[4px] px-[16px] py-[20px] text-[16px] font-[500] mb-[20px] placeholder:text-[16px]"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="w-[100%] border-0 outline-0 p-[16px] bg-[#e50914] text-[white] rounded-[4px] text-[16px] font-[500] mt-[20px] cursor-pointer hover:bg-[#e50934] ml-[14px]"
            onClick={user_auth}
            type="submit"
          >
            {signState}
          </button>
          <div className="flex items-center ml-[15px] justify-between text-[#b3b3b3] font-[13px] mt-[10px] ">
            <div className="flex gap-[5px]">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
          {/* Form Switch */}
          <div className="mt-[20px] text-[#737373] ml-[16px]">
            {signState === "Sign In" ? (
              <p>
                New to Netflix?{" "}
                <span
                  className="ml-[6px] text-[#fff] font-[500] cursor-pointer"
                  onClick={() => {
                    setSignState("Sign Up");
                  }}
                >
                  Sign Up Now
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span
                  className="ml-[6px] text-[#fff] font-[500] cursor-pointer"
                  onClick={() => {
                    setSignState("Sign In");
                  }}
                >
                  Sign In Now
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
