import { signOut,onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { useEffect } from 'react'
import {addUser,removeUser} from '../utils/userSlice'
import { LOGO } from "../utils/constants"

const Header = () => {
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const user = useSelector((store) => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful
            navigate("/")
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName,photoURL} = user
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
              navigate("/browse")
              
            } else {
              // User is signed out
              dispatch(removeUser())
              navigate("/")

            }
          });

          return ()=> unsubscribe()  //unsubscribe when component unmounts

    },[])
    return (
        <div className="absolute px-12 py-2 bg-gradient-to-b from-black z-3 w-screen flex justify-between">
            <div className="w-2/12">
                <img src={LOGO}></img>
            </div>
            {
                user &&
                <div className="flex p-2">
                    <img className="w-20 h-20" src={user.photoURL} ></img>
                    <button onClick={handleSignOut} className="text-white font-bold cursor-pointer" >Sign Out</button>
                </div>
            }

        </div>
    )
}

export default Header