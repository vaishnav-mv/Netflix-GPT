import { useRef, useState } from "react"
import Header from "./Header"
import { isValidData } from "../utils/validate"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../utils/firebase"

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const email = useRef(null)
  const password = useRef(null)
  const fullName = useRef(null)

  const handleButtonClick = () => {
    const message = isValidData(
      email.current.value,
      password.current.value,
      isSignIn ? null : fullName.current.value
    )
    setErrorMessage(message)

    if (message) return

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
          // ..
        });

    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          
          
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        });

    }
  }

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <div className="relative h-screen">
      <Header></Header>
      <div className="absolute inset-0 ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_large.jpg"
          className="w-full h-full object-cover"
        ></img>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <form onSubmit={(e) => e.preventDefault()} className="bg-black/80 px-16 py-5 rounded-md w-[450px] h-auto mt-20">
          <h1 className="text-white text-3xl font-medium mb-8">{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {!isSignIn &&
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              className="w-full bg-[#333] text-white rounded px-5 py-4 mb-2 text-sm"
            />
          }
          <input
            ref={email}
            type="text"
            placeholder="Email or mobile number"
            className="w-full bg-[#333] text-white rounded px-5 py-4 mb-2 text-sm"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full bg-[#333] text-white rounded px-5 py-4 mb-3 text-sm"
          />
          <p className="text-red-500 p-2 text-lg">{errorMessage}</p>
          <button className="w-full bg-[#E50914] text-white rounded py-3 font-medium text-base" onClick={handleButtonClick}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <div className="flex items-center mt-4">
            <label className="flex items-center text-[#b3b3b3] text-sm">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
          </div>

          <div className="mt-7 text-[#b3b3b3] text-base">
            <p className="flex items-center gap-1">
              {isSignIn ? "New to Netflix?" : "Do you have an account?"}

              <a href="#" className="text-white hover:underline" onClick={toggleSignIn}>{isSignIn ? "Sign Up" : "Sign In"}</a>
            </p>
            <p className="mt-4 text-sm">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
              <a className="text-[#0071eb] hover:underline ml-1">Learn more.</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login