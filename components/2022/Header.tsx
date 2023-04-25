import React from "react";
import Link from "next/link";

import { SCHEDULE_URL } from "../../data/2022";

const Header = () => {
    const [isMobileNavExpanded, setIsMobileNavExpanded] = React.useState(false);

    return (
        <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center bg-transparent">
            <div className="flex items-center justify-between">
                <div>
                    <img src="https://assets.genztechies.com/icon-coloured.svg" className="h-12 aspect-square" alt="GenZtechies" />
                </div>

                <div className="flex lg:hidden">
                    <button type="button" className="text-white focus:outline-none" onClick={() => setIsMobileNavExpanded(!isMobileNavExpanded)}>
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <ul className={["flex flex-col mt-4 space-y-2 lg:mt-0 lg:flex-row lg:-mx-6 lg:space-y-0 lg:flex lg:space-x-14", isMobileNavExpanded ? "block" : "hidden"].join(" ")}>
                <li className="text-2xl text-white font-bold hover:text-primary-green transition-all mx-4">
                    <Link href="/2022/#home" scroll={false}>
                        Home
                    </Link>
                </li>
                <li className="text-2xl text-white font-bold hover:text-primary-green transition-all mx-4">
                    <Link href={SCHEDULE_URL}>Schedule</Link>
                </li>
                <li className="text-2xl text-white font-bold hover:text-primary-green transition-all mx-4">
                    <Link href="/2022/#sponsors" scroll={false}>
                        Sponsors
                    </Link>
                </li>
                <li className="text-2xl text-white font-bold hover:text-primary-green transition-all mx-4">
                    <Link href="/2022/#faq" scroll={false}>
                        FAQ
                    </Link>
                </li>
            </ul>

            <ul className={["flex flex-col lg:flex-row lg:space-x-5 lg:flex", isMobileNavExpanded ? "block" : "hidden"].join(" ")}>
                <li className="text-2xl text-white font-bold hover:text-primary-green transition-all mx-4">
                    <Link href="/2022/tickets">Get Tickets</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
