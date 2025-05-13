import { signOut, onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants"
import { toggleGptSearchView } from "../utils/gptSlice"
import { changeLanguage } from "../utils/configSlice"

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((store) => store.user)
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful
            navigate("/")
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                navigate("/browse")

            } else {
                // User is signed out
                dispatch(removeUser())
                navigate("/")

            }
        });

        return () => unsubscribe()  //unsubscribe when component unmounts

    }, [])

    const handleGptSearchClick = () => {
        //Toggle GPT Search
        dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }


    return (
        <div className="absolute px-12 py-2 bg-gradient-to-b from-black z-3 w-screen flex justify-between">
            <div className="w-2/12">
                <img src={LOGO}></img>
            </div>
            {
                user &&
                <div className="flex p-2">
                    {
                        showGptSearch && (
                            <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange} >
                                {SUPPORTED_LANGUAGES.map((lang) => (
                                    <option key={lang.identifier} value={lang.identifier}>
                                        {lang.name}
                                    </option>
                                ))}
                            </select>
                        )
                    }
                    <button onClick={handleGptSearchClick} className="py-2 px-4 m-2 text-white font-bold cursor-pointer ">{showGptSearch ? "Homepage" : "GPT Search"}</button>
                    <img className="w-20 h-20" src={user.photoURL} ></img>
                    <button onClick={handleSignOut} className="text-white font-bold cursor-pointer" >Sign Out</button>
                </div>
            }

        </div>
    )
}

export default Header