import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import links from '../../utils/links';
import ConnectWalletButton from '../connectWalletButton/ConnectWalletButton';


export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    return (
        <div className="left-0 top-0 pl-2 max-w-screen ease-in duration-400 bg-primaryBackground text-white">
            <div className="flex justify-between items-center p-5">
                {/* logo */}
                <div className="z-10" onClick={() => setMobileMenu(false)}>
                    <a href="/">
                        <img src="logo.png" alt="ethchi logo" width={80} height={100}/>
                    </a>
                </div>

                {/* desktop links */}
                <div className="hidden md:block">
                    <ul className="flex justify-center items-center text-md text-primaryType font-mono font-bold">
                        <li className="hover:underline mx-4 ease-in duration-100">
                            <Link to={links.sitePaths.about}>ABOUT</Link>
                        </li>
                        <li className="hover:underline mx-4 ease-in duration-100">
                            <Link to={links.forum} target="_blank" rel="noreferrer" >FORUM</Link>
                        </li>
                        <li className="hover:underline mx-4 ease-in duration-100">
                            <Link to="" target="_blank" rel="noreferrer" >SCHEDULE</Link>
                        </li>
                        <li className="hover:underline mx-4 ease-in duration-100">
                            <Link to={links.eventMap} target="_blank" rel="noreferrer" >EVENT MAP</Link>
                        </li>
                        <li className="hover:underline mx-4 ease-in duration-100">
                            <Link to={links.docs.intro} target="_blank" rel="noreferrer" >DOCS</Link>
                        </li>
                    </ul>
                </div>
                {/* connect wallet button 
                    TODO: update to be an actuall wallet connect component
                */}
                <div>
                    <ConnectWalletButton />
                </div>
                {/* mobile button */}
                <div onClick={toggleMobileMenu} className="block z-10 md:hidden text-primaryType">
                    {mobileMenu ? <AiOutlineClose size={40} /> : <CiMenuBurger size={40} />}
                </div>
                {/* mobile menu */}
                <div className={
                    mobileMenu
                        ? "md:hidden bg-primaryBackground absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300"
                        : "hidden"
                    }
                    onClick={() => setMobileMenu(false)}
                >
                    <ul className="flex flex-col justify-end text-xl text-primaryType">
                        <li className="hover:underline p-4 ease-in duration-100">
                            <Link to={links.sitePaths.home}>HOME</Link>
                        </li>
                        <li className="hover:underline p-4 ease-in duration-100">
                            <Link to={links.sitePaths.about}>ABOUT</Link>
                        </li>
                        <li className="hover:underline p-4 ease-in duration-100">
                            <Link to={links.forum} target="_blank" rel="noreferrer" >FORUM</Link>
                        </li>
                        <li className="hover:underline p-4 ease-in duration-100">
                            <Link to='' target="_blank" rel="noreferrer" >SCHEDULE</Link>
                        </li>
                        <li className="hover:underline p-4 ease-in duration-100">
                            <Link to={links.eventMap} target="_blank" rel="noreferrer" >EVENT MAP</Link>
                        </li>
                        <li className="hover:underline p-4 ease-in duration-100">
                            <Link to={links.docs.intro} target="_blank" rel="noreferrer" >DOCS</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

