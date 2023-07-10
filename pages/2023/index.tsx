import React from "react";
import Link from "next/link";
import Image from "next/image";
import { clsx } from "class-flex";
import { Balancer } from "react-wrap-balancer";

import { Seo } from "@/components";
import arrayFns from "@/utils/array-fns";
import { Button, FAQCard, PastEventsCard, SectionHeader, SpeakerCard } from "@/components/2023";
import { JOIN_THE_COMMUNITY_URL, BUY_CONFERENCE_TICKET_URL, FAQS_DATA, TOP_NAV_LINKS, FOOTER_LINKS, HACKATHON_REGISTRATION_URL, PAST_EVENTS, SPEAKERS, PREVIOUS_PARTNERS, SPONSORSHIP_DECK_URL, SESSIONIZE_URL } from "@/data/2023";

const Main = () => {
    const [open, setOpen] = React.useState(false);
    const [active, setActive] = React.useState(1);

    React.useEffect(() => {
        const interval = setInterval(() => setActive(active >= 6 ? 1 : active + 1), 2000);

        return () => {
            clearInterval(interval);
        };
    }, [active]);

    return (
        <>
            <Seo
                // breaker
                title="Gen Z Hackfest 2023"
                image="/assets/2023/site-metaimage.png"
                description="Gen Z Hackfest 2023 is a week-long hackathon and one-day conference aimed at connecting Gen-Zs in tech on a large scale."
            />

            <main id="home" className="flex flex-col justify-between w-screen h-screen border-b-4 bg-primary-light-bg border-primary-blue-dark">
                <nav className="relative w-full">
                    <ul className="container flex items-center justify-between py-2">
                        <li>
                            <Image src={"https://assets.genztechies.com/logo-coloured.svg"} alt="Logo" width={84} height={40} />
                        </li>

                        <li>
                            <ul className="items-center hidden space-x-1 lg:flex">
                                {TOP_NAV_LINKS.map((link, index) => (
                                    <li key={index} className="p-4 font-semibold uppercase text-primary-dark font-rubik">
                                        <Link href={link.href}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li>
                            <button className="rounded-full lg:hidden text-primary-purple" onClick={() => setOpen(!open)}>
                                <svg viewBox="0 0 25 19" className={clsx("w-6 h-6")} stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.285645" y1="1.89285" x2="24.2856" y2="1.89285" stroke="currentColor" strokeWidth="2.5"></line>
                                    <line x1="6.28564" y1="9.60715" x2="24.2856" y2="9.60715" stroke="currentColor" strokeWidth="2.5"></line>
                                    <line x1="12.2949" y1="17.3214" x2="24.2949" y2="17.3214" stroke="currentColor" strokeWidth="2.5"></line>
                                </svg>
                            </button>

                            <Link target="_blank" passHref href={BUY_CONFERENCE_TICKET_URL}>
                                <Button withArrow className="hidden lg:flex" size="sm">
                                    Get Tickets
                                </Button>
                            </Link>
                        </li>
                    </ul>

                    <ul className={clsx("container z-50 absolute flex flex-col w-full lg:hidden top-full shadow-md bg-primary-light-bg max-h-0 transition-all duration-300 ease-in-out overflow-hidden", { "max-h-screen pb-10": open })}>
                        {TOP_NAV_LINKS.map((link, index) => (
                            <li key={index} className="p-4 font-semibold uppercase text-primary-dark font-rubik">
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))}

                        <li>
                            <Link href={BUY_CONFERENCE_TICKET_URL} passHref>
                                <Button withArrow className="w-full" size="sm">
                                    Get Tickets
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="container grid items-center justify-center flex-grow w-full grid-cols-1 gap-10 md:grid-cols-5">
                    <div className="flex flex-col justify-around w-full col-span-3 space-y-5 h-4/5">
                        <h1>
                            <Balancer>
                                <span className="font-extrabold font-sora leading-none text-stroke-sm md:text-stroke text-6xl md:text-[112px]">GEN Z HACKFEST 2023</span>

                                <span className="inline-block ml-5">
                                    <span className="text-sm font-medium tracking-wider md:text-xl text-primary-dark font-rubik">August 21st - 26th.</span> <br />
                                    <span className="text-lg font-semibold tracking-widest capitalize md:text-4xl text-primary-dark font-rubik">lagos, Nigeria</span>
                                </span>
                            </Balancer>
                        </h1>

                        <div className="flex flex-col items-center w-full space-y-5 md:space-y-0 md:space-x-5 md:flex-row">
                            <Link target="_blank" passHref href={HACKATHON_REGISTRATION_URL}>
                                <Button withArrow>Register For Hackathon</Button>
                            </Link>

                            {/* <Link target="_blank" passHref href={SESSIONIZE_URL}>
                                <Button withArrow variant="outlined">
                                    speak at hackfest
                                </Button>
                            </Link> */}

                            <Link target="_blank" passHref href={BUY_CONFERENCE_TICKET_URL}>
                                <Button withArrow variant="outlined">
                                    Get Conference Tickets
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative hidden w-full h-full col-span-2 lg:block">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <Image
                                fill
                                key={index}
                                alt={`Emoji-${index + 1}`}
                                src={require(`../../public/assets/2023/images/emoji-${index + 1}.png`)}
                                className={clsx("object-contain transition-all duration-1000 ease-in-out", {
                                    "opacity-0": active !== index + 1,
                                    "opacity-100": active === index + 1
                                })}
                            />
                        ))}
                    </div>
                </div>
            </main>

            <section id="about-us" className="px-6 py-24 md:px-20 bg-[#FBFBFF] flex flex-col-reverse lg:flex-row justify-center items-center lg:space-x-20">
                <div className="w-full lg:basis-1/2">
                    <SectionHeader text="about us" textClassName="md:text-[112px] text-6xl" dotClassName="text-primary-purple" />

                    <p className="text-lg text-[#2F2D2D] uppercase leading-[200.5%] py-10">GenZtechies is a community for Gen Z developers, founders, designers, and techies across Africa to connect, learn, and discover life-changing opportunities.

                            <br></br>Africa has the largest population of unemployed youths, talent is equally distributed but opportunity is not. Beginning in 2022, we organize Gen Z HackFest as a unique 2-in-1 conference and hackathon to bridge this gap in our own little way.</p>

                    <Link target="_blank" passHref href={JOIN_THE_COMMUNITY_URL} className="inline-block py-4">
                        <Button withArrow className="w-full lg:w-fit">
                            Join the community
                        </Button>
                    </Link>
                </div>

                <div className="relative w-full lg:basis-1/2 aspect-square">
                    <Image fill alt="About us" className="object-contain rounded-md" src={require(`../../public/assets/2023/images/about-us.png`)} />
                </div>
            </section>

            <section id="previous-partners" className="py-20 border-b-4 bg-primary-purple border-primary-blue-dark">
                <div className="container space-y-10">
                    <h1 className="md:text-[80px] text-4xl text-white leading-none font-bold font-sora text-center">
                        <SectionHeader text="previous partners" textClassName="text-white" dotClassName="text-primary-yellow" />
                    </h1>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {PREVIOUS_PARTNERS.map((partner) => (
                            <div key={partner.title} className="relative md:w-full px-8 border border-b-4 rounded-md aspect-square md:h-52 bg-primary-light-bg border-primary-blue-dark" data-aos="fade-up">
                                <Link href={partner.link} target="_blank">
                                    <div className="relative w-full h-full">
                                        <Image src={`/assets/2023/images/previous_partners/${partner.title}.svg`} fill alt="company-logo" />
                                    </div>
                                </Link>
                            </div>
                        ))}

                        <div className="col-span-2 md:col-span-3 lg:col-span-4 pt-10">
                            <div className="py-5 mx-auto space-y-3 md:w-4/5">
                                <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white uppercase font-sora">Sponsor Gen Z Hackfest 2023</h1>
                                <p className="mx-auto text-lg text-center text-white">Sponsor the largest gathering of Gen-Zs in tech across Africa.</p>
                            </div>

                            <Link target="_blank" href={SPONSORSHIP_DECK_URL} passHref>
                                <Button className="mx-auto bg-primary-green hover:bg-primary-green/80 ">Become a sponsor</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="hackathon" className="px-6 py-24 md:px-20 bg-[#FBFBFF] flex flex-col lg:flex-row justify-center items-center lg:space-x-20">
                <div className="relative w-full lg:basis-1/2 aspect-square">
                    <Image src="/assets/2023/images/prepare-to-hack.png" className="object-contain" fill alt="paystack tour" />
                </div>

                <div className="w-full lg:basis-1/2">
                    <SectionHeader text="prepare to hack" dotClassName="text-primary-purple" />

                    <p className="text-lg text-[#2F2D2D] uppercase leading-[200.5%] py-5">
                        The open-ended hackathon aims to solve problems in Africa that are often overlooked. We're bringing thousands of people from different diversities together to collaborate and build innovative solutions. By leveraging their diverse skills and expertise, participants work towards creating meaningful and impactful solutions.
                    </p>

                    <Link target="_blank" passHref href={HACKATHON_REGISTRATION_URL} className="inline-block py-4">
                        <Button withArrow className="w-full lg:w-fit">
                            Join the hackathon
                        </Button>
                    </Link>
                </div>
            </section>

            {SPEAKERS.length > 0 && (
                <section id="speakers" className="px-6 py-24 md:px-20 bg-[#EAEAEE]">
                    <SectionHeader text="speakers" />

                    <div className="mt-[56px] flex flex-col md:flex-row gap-4 md:overflow-x-auto md:scrollbar-none">
                        {SPEAKERS.map((speaker, i) => (
                            <SpeakerCard key={i} {...speaker} />
                        ))}
                    </div>
                </section>
            )}

            <section id="see-you-soon-marquee" className="py-10 bg-primary-light-bg marquee border-y-4 border-y-primary-blue-dark">
                <span className="text-6xl md:text-[100px] text-primary-blue-dark leading-none font-bold font-sora uppercase">&bull; See you at Gen Z Hackfest &bull; See you at Gen Z Hackfest &bull;</span>
                <span className="text-6xl md:text-[100px] text-primary-blue-dark leading-none font-bold font-sora uppercase">&bull; See you at Gen Z Hackfest &bull; See you at Gen Z Hackfest &bull;</span>
            </section>

            <section id="past-events" className="px-6 py-24 md:px-20 bg-[#EAEAEE]">
                <SectionHeader text="Past Events" />

                <div className="mt-[56px] flex flex-col md:flex-row basis-1/2 gap-6">
                    {PAST_EVENTS.map((event, i) => (
                        <PastEventsCard key={i} {...event} />
                    ))}
                </div>
            </section>

            <section id="faqs" className="px-6 py-24 md:px-20 bg-[#EAEAEE] border-t-4">
                <SectionHeader text="FAQs" textClassName="text-center" />

                <div className="mt-[56px] grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {arrayFns.divideArrayIntoTwo(FAQS_DATA).map((data, i) => (
                        <div key={i} className="w-full rounded-none join join-vertical">
                            {data.map((faq, i) => (
                                <FAQCard key={i} {...faq} />
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            <footer id="footer" className="px-6 py-24 md:px-20 bg-primary-purple space-y-[100px] text-white">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="space-y-6">
                        <Image className="-ml-6" src={"https://assets.genztechies.com/icon-coloured.svg"} alt="Logo" width={150} height={150} />

                        <p className="w-[250px] sm:w-[300px] uppercase tracking-wider">GenZtechies is a nonprofit community fiscally sponsored by The Hack Foundation Nonprofit with EIN: 81-2908499.</p>
                    </div>

                    <div className="space-x-[32px] md:space-x-[64px] lg:space-x-[110px] flex mt-[40px] md:mt-0">
                        {FOOTER_LINKS.map((link, i) => (
                            <div key={i}>
                                <h3 className="font-bold text-white uppercase font-2xl font-sora">{link.category}</h3>

                                <ul className="mt-12 space-y-6">
                                    {link.links.map((link, i) => (
                                        <li key={i}>
                                            <Link className="text-white uppercase" href={link.href}>
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center">
                    <SectionHeader text="See You at Gen Z HackFest" textClassName="text-white" dotClassName="text-primary-green" />
                </div>
            </footer>
        </>
    );
};

export default Main;
