import React from "react";

const Header = () => {
    return (
        <nav className="flex items-center md:justify-around justify-between md:py-3 mx-auto p-3  bg-transparent z-50">
            <img src="/assets/images/logo.svg" alt="hackathon" className="bg-[#5D5CD6] md:p-3 p-2"/>
                <ul className="hidden md:inline-flex gap-10">
                    <li className="mx-4 hover:text-green-500 active:text-green-500 transition-all text-white font-bold text-2xl">
                        <a href="#home">Home</a>
                    </li>
                    <li className="mx-4 hover:text-green-500  transition-all text-white font-bold text-2xl">
                        <a href="#sponsors">Sponsors</a>
                    </li>
                    <li className="mx-4 hover:text-green-500  transition-all text-white font-bold text-2xl">
                        <a href="#faq">FAQ</a>
                    </li>
                    
                </ul>

                <p className="hover:text-green-500  transition-all text-white font-bold text-2xl underline">Get Tickets</p>
            
        </nav>
    );
};

export default Header;
