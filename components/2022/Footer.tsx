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
                        <Link href="/2022/tickets" className="underline">
                            Register for HackFest2022
                        </Link>
                    </li>
                    <li>
                        <Link href="https://bit.ly/join-gzt" target="_blank" rel="noopener noreferrer" className="underline">
                            Join the community
                        </Link>
                    </li>
                    <li>
                        <Link href="mailto:hello@genztechies.com">hello@genztechies.com</Link>
                    </li>

                    <li className="mt-5">
                        Socials:
                        <ul className="list-disc list-inside indent-8">
                            <li>
                                <Link href="http://twitter.com/genztechies" target="_blank" rel="noopener noreferrer" className="underline">
                                    Twitter
                                </Link>
                            </li>
                            <li>
                                <Link href="http://linkedin.com/company/genztechies" target="_blank" rel="noopener noreferrer" className="underline">
                                    Linkedin
                                </Link>
                            </li>
                            <li>
                                <Link href="http://instagram.com/genztechies" target="_blank" rel="noopener noreferrer" className="underline">
                                    Instagram
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>

                <p className="text-lg md:text-2xl text-white font-bold leading-loose md:leading-loose my-5">
                    &copy; Event Hosted by&nbsp;
                    <Link href="https://genztechies.com" target="_blank" rel="noopener noreferrer" className="underline">
                        GenZTechies
                    </Link>
                    . <br /> <span className="text-sm">Fiscally sponsored by The Hack Foundation Nonprofit EIN: 81-2908499.</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
