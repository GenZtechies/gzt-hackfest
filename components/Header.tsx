import React from "react";

const Header = () => {
    return (
        <nav className="flex items-center justify-between px-5 md:px-10 py-3 mx-auto sticky top-0 bg-white z-50">
            <svg width={59} height={62} viewBox="0 0 59 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.9391 55.2171H55.8515C57.381 55.2171 58.6203 56.7354 58.6203 58.6089C58.6203 60.4817 57.381 62 55.8515 62H3.32528C0.452532 62 -1.0635 57.8333 0.857904 55.2171L32.7925 11.7152C33.7334 10.434 35.3085 10.2201 36.455 11.2186C37.8043 12.3928 38.0167 14.7443 36.9105 16.2513L10.0663 52.8186C9.38716 53.7437 9.92341 55.2171 10.9391 55.2171Z"
                    fill="#0DBA67"
                />
                <path
                    d="M47.6427 6.78362H4.83032C3.30157 6.78362 2.06152 5.26535 2.06152 3.39182C2.06152 1.51828 3.30157 3.8147e-06 4.83032 3.8147e-06H55.2572C58.1292 3.8147e-06 59.6453 4.1674 57.7239 6.78362L25.7892 50.2848C24.8484 51.5667 23.2732 51.7799 22.1267 50.7814C20.7774 49.6079 20.565 47.2557 21.6712 45.7494L48.5155 9.18219C49.1946 8.25702 48.6583 6.78362 47.6427 6.78362Z"
                    fill="#FFB800"
                />
            </svg>

            <div className="hidden md:inline-flex">
                <ul className="flex">
                    <li className="mx-4 hover:text-green-500 active:text-green-500 transition-all">
                        <a href="#home">Home</a>
                    </li>
                    <li className="mx-4 hover:text-green-500  transition-all">
                        <a href="#about">About</a>
                    </li>
                    <li className="mx-4 hover:text-green-500  transition-all">
                        <a href="#schedule">Schedule</a>
                    </li>
                    <li className="mx-4 hover:text-green-500  transition-all">
                        <a href="#sponsors">Sponsors</a>
                    </li>
                    <li className="mx-4 hover:text-green-500  transition-all">
                        <a href="#judges">Judges</a>
                    </li>
                </ul>
            </div>

            <a href="#" className="bg-primary-green text-gray-200 font-bold p-4 rounded-lg">
                Register
            </a>
        </nav>
    );
};

export default Header;
