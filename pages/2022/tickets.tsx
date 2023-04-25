import React from "react";

import { Seo } from "../../components";
import { Header, Footer } from "../../components/2022";
import { HACKATHON_REGISTRATION_URL, CONFERENCE_REGISTRATION_URL } from "../../data/2022";

export default function Tickets() {
    return (
        <>
            <Seo
                // breaker
                title="Gen Z Hackfest 2022"
                image="/assets/2022/site-metaimage.png"
                description="Gen Z Hackfest 2022 is a 3-days hackathon and 1-day conference aimed at connecting Gen Z’s in tech on a large scale."
            />

            <Header />

            <div className="h-screen w-full bg-primary-purple bg-[url('/assets/2022/images/site-bg.svg')] bg-no-repeat bg-cover top-0 fixed -z-50" />

            <main>
                <section>
                    <div className="fixed -z-10 opacity-30 hidden lg:block right-10 top-36 animate-pulse">
                        <img src="/assets/2022/images/bg-icon-1.svg" alt="hackathon" />
                    </div>
                    <div className="fixed -z-10 opacity-30 hidden lg:block left-10 top-36 animate-bounce">
                        <img src="/assets/2022/images/bg-icon-4.svg" alt="hackathon" />
                    </div>

                    <div className="fixed -z-10 opacity-30 hidden lg:block left-10 bottom-20 animate-pulse">
                        <img src="/assets/2022/images/bg-icon-2.svg" alt="hackathon" />
                    </div>
                    <div className="fixed -z-10 opacity-30 hidden lg:block right-10 bottom-20 animate-spin">
                        <img src="/assets/2022/images/bg-icon-3.svg" alt="hackathon" />
                    </div>
                </section>

                <section id="get-tickets" className="flex flex-col items-center min-h-screen p-10 py-0">
                    <div className="m-auto">
                        <div className="flex flex-col gap-5 justify-center my-10">
                            <a href={HACKATHON_REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="text-2xl md:text-4xl text-center rounded text-white font-black p-10 border-4 border-primary-yellow tracking-wide">
                                Register for Hackathon →
                            </a>
                            <a href={CONFERENCE_REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="text-2xl md:text-4xl text-center rounded text-white font-black p-10 border-4 border-primary-green tracking-wide">
                                Get Tickets for Conference →
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
