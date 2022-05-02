import React from "react";
import { NextPage } from "next";
import { Header, Footer } from "../components";

const Tickets: NextPage = () => {
    return (
        <>
            <div className="h-screen w-full bg-no-repeat bg-cover bg-[url('/assets/images/site-bg.jpeg')] fixed -z-50" />

            <Header />

            <main>
                <section>
                    <div className="fixed -z-10 opacity-30 hidden lg:block right-10 top-36 animate-pulse">
                        <img src="/assets/images/bg-icon-1.svg" alt="hackathon" />
                    </div>
                    <div className="fixed -z-10 opacity-30 hidden lg:block left-10 top-36 animate-bounce">
                        <img src="/assets/images/bg-icon-4.svg" alt="hackathon" />
                    </div>

                    <div className="fixed -z-10 opacity-30 hidden lg:block left-10 bottom-20 animate-pulse">
                        <img src="/assets/images/bg-icon-2.svg" alt="hackathon" />
                    </div>
                    <div className="fixed -z-10 opacity-30 hidden lg:block right-10 bottom-20 animate-spin">
                        <img src="/assets/images/bg-icon-3.svg" alt="hackathon" />
                    </div>
                </section>

                <section id="get-tickets" className="flex flex-col items-center min-h-screen p-10">
                    <div className="m-auto">
                        <div className="flex flex-col gap-5 justify-center my-10">
                            <a href="" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-4xl text-center rounded text-black font-black p-10 bg-primary-yellow tracking-wide">
                                Register for Hackathon →
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-4xl text-center rounded text-white font-black p-10 bg-primary-green tracking-wide">
                                Get Tickets for Conference →
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Tickets;
