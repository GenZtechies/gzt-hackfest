import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center min-h-screen p-10">
            <div className="my-auto w-full max-w-6xl">
                <h3 className="text-4xl md:text-6xl text-white font-bold">
                    Stay <span className="text-primary-green">In</span> <span className="text-primary-yellow">Touch.</span>
                </h3>

                <ul className="text-lg md:text-3xl text-white font-bold leading-loose md:leading-loose my-5 text-justify list-disc list-inside">
                    <li>
                        <Link href="/tickets">
                            <a className="underline">Register for HackFest2022</a>
                        </Link>
                    </li>
                    <li>
                        <a href="https://bit.ly/join-gzt" target="_blank" rel="noopener noreferrer" className="underline">
                            Join the community
                        </a>
                    </li>
                    <li>
                        <a href="mailto:hello@genztechies.com">hello@genztechies.com</a>
                    </li>

                    <li className="mt-5">
                        Socials:
                        <ul className="list-disc list-inside indent-8">
                            <li>
                                <a href="http://twitter.com/genztechies" target="_blank" rel="noopener noreferrer" className="underline">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="http://linkedin.com/company/genztechies" target="_blank" rel="noopener noreferrer" className="underline">
                                    Linkedin
                                </a>
                            </li>
                            <li>
                                <a href="http://instagram.com/genztechies" target="_blank" rel="noopener noreferrer" className="underline">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <p className="text-lg md:text-2xl text-white font-bold leading-loose md:leading-loose my-5">
                    &copy; Event Hosted by&nbsp;
                    <a href="https://genztechies.com" target="_blank" rel="noopener noreferrer" className="underline">
                        GenZTechies
                    </a>
                    . 501(c)(3) nonprofit.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
