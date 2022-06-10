import React from "react";
import Link from "next/link";
import { NextPage } from "next";
import { Header, Footer, FaqAccordion } from "../components";

import faqs from "../data/faqs";
import speakers from "../data/speakers";
import sponsors from "../data/sponsors";

const Home: NextPage = () => {
    return (
        <>
            <Header />

            <div className="h-screen w-full bg-primary-purple bg-no-repeat bg-cover bg-[url('/assets/images/site-bg.jpeg')] top-0 fixed -z-50" />

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

                <section id="home" className="flex flex-col items-center lg:min-h-screen p-10">
                    <div className="m-auto">
                        <h1 className="text-6xl md:text-9xl text-white font-black text-center max-w-5xl tracking-wide">
                            Gen Z <br />{" "}
                            <span className="text-primary-green" data-aos="fade-up">
                                HackFest
                            </span>{" "}
                            <span className="text-primary-yellow" data-aos="fade-up">
                                2022
                            </span>
                        </h1>

                        <div className="flex flex-col md:flex-row gap-5 justify-center my-10">
                            <Link href="/tickets">
                                <a className="text-center text-white font-black px-6 py-3 bg-primary-purple tracking-wide" data-aos="fade-right">
                                    Register for HackFest2022 →
                                </a>
                            </Link>
                            <a
                                href="https://bit.ly/join-gzt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-center text-white font-black px-6 py-3 bg-primary-purple tracking-wide"
                                data-aos="fade-left"
                            >
                                Join the Community →
                            </a>
                        </div>
                    </div>
                </section>

                <section id="video_intro" className="flex flex-col lg:min-h-screen items-center p-10">
                    <div className="my-auto w-full max-w-6xl">
                        <iframe
                            src="https://www.youtube.com/embed/YQwja2nCLnY?playlist=YQwja2nCLnY&loop=0&rel=0"
                            title="Gen Z HacKFest 2022"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            className="w-full aspect-video"
                            allowFullScreen
                            data-aos="zoom-in-up"
                        ></iframe>
                    </div>
                </section>

                <section id="about" className="flex flex-col items-center min-h-screen p-10">
                    <div className="my-auto w-full max-w-6xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 m-auto gap-5">
                            <div className="my-auto max-w-2xl">
                                <h3 className="text-4xl md:text-6xl text-white font-bold" data-aos="zoom-in-right">
                                    Come <span className="text-primary-yellow italic">Showcase</span> and <span className="text-primary-green italic">Connect</span> with other Gen-Z&apos;s
                                </h3>

                                <p className="text-lg md:text-2xl text-white font-bold leading-loose md:leading-loose my-5 text-justify" data-aos="fade-right">
                                    Gen Z HackFest is an annual three-day virtual hackathon and a one-day in-person conference aimed to connect Gen Z&apos;s in tech on a large scale. It&apos;s an
                                    event where ambitious Gen Z&apos;s come together to put their creative and coding skills to test, build solutions to problems in Africa and showcase what they can
                                    do!
                                </p>
                            </div>

                            <div className="my-auto -order-1 md:order-1">
                                <img src="/assets/images/icon-5.svg" alt="hackathon" className="aspect-square" data-aos="zoom-in" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 m-auto gap-5">
                            <div className="my-auto">
                                <img src="/assets/images/icon-6.svg" alt="hackathon" className="aspect-square" data-aos="zoom-in" />
                            </div>
                            <div className="my-auto max-w-2xl">
                                <h3 className="text-4xl md:text-6xl text-white font-bold max-w-lg" data-aos="zoom-in-left">
                                    Why Gen Z <span className="text-primary-yellow italic">HackFest</span> <span className="text-primary-green italic">2022</span> ?
                                </h3>

                                <p className="text-lg md:text-2xl text-white font-bold leading-loose md:leading-loose my-5 text-justify" data-aos="zoom-in-left">
                                    Our mission is to connect thousands of GenZ Techies in Africa to share ideas and collaborate and also connect GenZ Techies to opportunities and expose them to
                                    latest development in the technology ecosystem. We are set to achieve this through events that features workshops, talks, seminars, awareness, thus giving
                                    opportunities and empowerments to GenZ Techies.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="judges" className="flex flex-col items-center min-h-screen p-10">
                    <div className="my-auto w-full max-w-6xl">
                        <h3 className="text-4xl md:text-6xl text-white font-bold" data-aos="fade-right">
                            <span className="text-primary-green">Judges</span> and <span className="text-primary-yellow">Speakers</span>
                        </h3>

                        {speakers.length === 0 && <p className="text-lg md:text-2xl text-white font-bold leading-loose md:leading-loose my-5 text-justify">Yet to be announced...</p>}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                            {speakers.map((speaker: any, index: number) => (
                                <div key={index} className="bg-primary-green p-2 rounded-lg shadow-lg hover:scale-105 transition duration-300" data-aos="fade-up">
                                    <img src={speaker.image} alt={speaker.fullname} className="w-full aspect-square object-contain object-center rounded-lg pb-2" />

                                    <h4 className="text-xl text-white font-bold px-1">{speaker.fullname}</h4>
                                    <p className="text-md text-white font-light px-1 italic">{speaker.role_title}</p>
                                    <p className="text-md text-white font-medium px-1">{speaker.company}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {sponsors.length > 0 && (
                    <section id="sponsors" className="flex flex-col items-center min-h-screen p-10">
                        <div className="my-auto w-full max-w-6xl">
                            <h3 className="text-4xl md:text-6xl text-white font-bold" data-aos="fade-right">
                                <span className="text-primary-yellow">Our </span>
                                <span className="text-primary-green">Sponsors</span>
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
                                {sponsors.map((sponsor: any, index: number) => (
                                    <div key={index} className="bg-white bg-opacity-30 p-10 rounded-lg shadow-lg hover:scale-105 transition duration-300">
                                        <a href={sponsor.reference_link} target="_blank" rel="noopener noreferrer" title={sponsor.name}>
                                            <img src={sponsor.logo_image} alt={sponsor.name} className="w-full aspect-video object-contain object-center rounded-lg pb-2" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                <section id="why_sponsors" className="flex flex-col items-center min-h-screen p-10">
                    <div className="my-auto w-full max-w-6xl">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            <h3 className="lg:col-span-2 text-4xl md:text-6xl text-white font-bold" data-aos="fade-right">
                                Why Sponsor <span className="text-primary-green">Gen Z </span> <span className="text-primary-yellow">HackFest 2022?</span>
                            </h3>
                            <div className="lg:col-span-1 my-auto lg:ml-auto">
                                <a
                                    href={process.env.BECOME_A_SPONSOR_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-center text-white font-black px-6 py-3 bg-primary-green tracking-wide"
                                >
                                    Become a Sponsor →
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
                            <div className="p-10 bg-white rounded-lg shadow-lg hover:scale-105 transition duration-300" data-aos="zoom-in-up">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 bg-green-100 text-primary-green rounded-full mb-4 p-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                                    />
                                </svg>

                                <h2 className="text-2xl font-bold my-2">Brand Marketing</h2>

                                <p className="text-base my-2">
                                    The attendees of GenZ HackFest 2022 including the speakers have a significant impact on the tech community and they make use of cutting-edge technologies. They also
                                    spread the word about the products and services they value most in their network.
                                </p>
                            </div>

                            <div className="p-10 bg-white rounded-lg shadow-lg hover:scale-105 transition duration-300" data-aos="zoom-in-up">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 bg-green-100 text-primary-green rounded-full mb-4 p-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>

                                <h2 className="text-2xl font-bold my-2">Developer Relations</h2>

                                <p className="text-base my-2">
                                    The attendees of GenZ HackFest 2022 are creators and innovators that make use of technology and they attend conferences like this to sharpen their abilities and get
                                    knowledge about new technologies and products that they will make use of for years to come in their careers.
                                </p>
                            </div>

                            <div className="p-10 bg-white rounded-lg shadow-lg hover:scale-105 transition duration-300" data-aos="zoom-in-up">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 bg-green-100 text-primary-green rounded-full mb-4 p-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>

                                <h2 className="text-2xl font-bold my-2">Talent Acquisition</h2>

                                <p className="text-base my-2">
                                    The attendees of GenZ HackFest 2022 are diverse top and rising tech talents, they attend events like GenZ Hack Fest not employment or career fairs. They come to
                                    learn about new technologies, network with like-minded individuals, and develop, improve, and demonstrate their abilities through competitions to create scaled
                                    prototypes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="faq" className="flex flex-col items-center min-h-screen p-10">
                    <div className="my-auto w-full max-w-6xl">
                        <h3 className="text-4xl md:text-6xl text-white font-bold" data-aos="fade-right">
                            <span className="text-primary-yellow">Frequently</span> Asked <span className="text-primary-green">Questions</span>
                        </h3>

                        <div className="w-full flex flex-col my-5">
                            {faqs.map((faq: any, index: number) => {
                                let question = faq.question;
                                if (faq.type) question = `(${faq.type.toUpperCase()}) — ${question}`;

                                return <FaqAccordion key={index} question={question} answer={faq.answer} />;
                            })}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;
