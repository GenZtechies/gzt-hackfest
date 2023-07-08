import { Button, FAQCard, PastEventsCard, SectionHeader, SpeakerCard } from "@/components/2023";
import { clsx } from "class-flex";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Balancer } from "react-wrap-balancer";

import { BUY_CONFERENCE_TICKET_URL, FAQS_DATA, FOOTER_LINKS, HACKATHON_REGISTRATION_URL, PAST_EVENTS, SPEAKERS } from "@/data/2023";
import arrayFns from "@/utils/array-fns";

const links = [
    {
        name: "About",
        href: "#about"
    },
    {
        name: "Speakers",
        href: "#speakers"
    },
    {
        name: "Community",
        href: "#community"
    },
    {
        name: "hackathon",
        href: "#hackathon"
    },
    {
        name: "events",
        href: "#events"
    },
    {
        name: "Get Tickets",
        href: BUY_CONFERENCE_TICKET_URL,
        target: "_blank"
    }
];

const Main = () => {
    const [active, setActive] = React.useState(1);
    const router = useRouter();

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActive(active >= 6 ? 1 : active + 1);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [active]);

    return (
        <>
            <main className="flex flex-col justify-between w-screen h-screen border-b-4 bg-primary-light-bg border-primary-blue-dark">
                <Navigation />
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
                            <Button withArrow className="">
                                <Link target={"_blank"} href={"https://docsend.com/view/x3t5y66xybdyyxwq"}>
                                    Become a sponsor
                                </Link>
                            </Button>
                            <Button withArrow className="" variant="outlined">
                                <Link target={"_blank"} href="https://sessionize.com/genzhackfest-2023">
                                    speak at hackfest
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative hidden w-full h-full col-span-2 lg:block">
                        <Images active={active} />
                    </div>
                </div>
            </main>
            <section className="py-10 border-b-4 bg-primary-light-bg border-primary-blue-dark">
                <div className="container grid items-center justify-center grid-cols-1 gap-5 min-h-fit lg:grid-cols-2">
                    <h1 className="md:text-[112px] text-6xl text-primary-blue-dark leading-none font-bold font-sora ">
                        <Balancer>
                            ABOUT <br />
                            US<span className="text-primary-purple">.</span>
                        </Balancer>
                    </h1>

                    <div className="row-span-2 pt-2 pb-4 pl-2 pr-4 rounded-lg bg-primary-blue-dark">
                        <div className="relative w-full h-72 lg:h-[500px]">
                            <Image src={"/assets/2023/images/site-bg.png"} alt="About us" fill className="object-cover object-left-top rounded-md" />
                        </div>
                    </div>
                    <div className="space-y-5">
                        <p className="text-lg font-normal tracking-wider uppercase text-primary-blue-dark">we are a community of Gen Z developers, founders, designers, and techies across Africa where we connect, learn, and discover life-changing opportunities.</p>

                        <Button withArrow className="w-full lg:w-fit">
                            <Link target={"_blank"} href={HACKATHON_REGISTRATION_URL}>
                                Join the community
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
            <section className="py-10 border-b-4 bg-primary-purple border-primary-blue-dark">
                <div className="container min-h-screen space-y-5">
                    <h1 className="md:text-[112px] text-6xl text-white leading-none font-bold font-sora text-center">
                        <Balancer>
                            SPONSORS<span className="text-primary-yellow">.</span>
                        </Balancer>
                    </h1>
                    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                        {supporters.map((supporter) => (
                            <div key={supporter.title} className="relative w-full px-8 border border-b-4 rounded-md h-52 bg-primary-light-bg border-primary-blue-dark " data-aos="fade-up">
                                <Link href={supporter.link} target={"_blank"} className="relative w-full h-full">
                                    <div className="relative w-full h-full">
                                        <Image src={`/assets/2023/images/supporters/${supporter.title}.svg`} fill alt="company-logo" />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-10 border-b-4 bg-primary-light-bg border-primary-blue-dark">
                <div className="container grid flex-col-reverse items-center justify-center grid-cols-1 gap-5 min-h-fit lg:grid-cols-2 ">
                    <h1 className="md:text-[100px] text-6xl text-primary-blue-dark leading-none font-bold font-sora lg:hidden">
                        <Balancer>
                            PREPARE TO HACK<span className="text-primary-purple">.</span>
                        </Balancer>
                    </h1>

                    <div className="row-span-3 pt-2 pb-4 pl-2 pr-4 rounded-lg bg-primary-blue-dark">
                        <div className="relative w-full h-72 md:h-[500px]">
                            <Image src={"/assets/2023/images/genzhackfest-74.jpg"} alt="About us" fill className="object-cover rounded-md" />
                        </div>
                    </div>
                    <h1 className="md:text-[100px] text-6xl text-primary-blue-dark leading-none font-bold font-sora hidden lg:block">
                        <Balancer>
                            PREPARE TO HACK<span className="text-primary-purple">.</span>
                        </Balancer>
                    </h1>
                    <div className="row-span-2 space-y-5">
                        <p className="text-lg font-normal tracking-wider uppercase text-primary-blue-dark">
                            The hackathon aims to address a specific problem in Africa that is often neglected. It brings together individuals from various fields to collaborate and find innovative solutions. By leveraging their diverse skills and expertise, participants work towards creating tangible and impactful outcomes.
                        </p>
                        <Button withArrow className="w-full lg:w-fit">
                            Join the hackathon
                        </Button>
                    </div>
                </div>
            </section>
            <section id="speakers" className="px-6 py-20 md:px-20 md:py-[90px] bg-[#EAEAEE] border-b-4 border-b-[#0D0C24]">
                <SectionHeader text="speakers" />

                {/* Speakers */}
                <div className="mt-[100px] flex space-x-4 overflow-x-auto scrollbar-none">
                    {SPEAKERS.map((speaker, i) => (
                        <SpeakerCard key={i} {...speaker} />
                    ))}
                </div>
            </section>
            <section className="py-10 bg-primary-light-bg border-b-4 border-b-primary-blue-dark marquee">
                <span className="text-6xl md:text-[100px] text-primary-blue-dark leading-none font-bold font-sora uppercase">See you at the hackathon &bull; See you at the hackathon</span>
                <span className="text-6xl md:text-[100px] text-primary-blue-dark leading-none font-bold font-sora uppercase">See you at the hackathon &bull; See you at the hackathon</span>
            </section>
            <section id="events" className="px-6 py-20 md:px-20 md:py-[90px] bg-[#EAEAEE]">
                <SectionHeader text="Past Events" />

                <div className="mt-[56px] flex flex-col md:flex-row basis-1/2 gap-6">
                    {PAST_EVENTS.map((event, i) => (
                        <PastEventsCard key={i} {...event} />
                    ))}
                </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="px-6 py-20 md:px-20 md:py-[90px] bg-[#EAEAEE]">
                <h1 className="text-center text-[48px] md:text-[64px] text-primary-blue-dark leading-none font-bold font-sora">FAQs</h1>

                <div className="mt-[90px] grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {arrayFns.divideArrayIntoTwo(FAQS_DATA).map((data, i) => (
                        <div key={i} className="join join-vertical w-full rounded-none">
                            {data.map((faq, i) => (
                                <FAQCard key={i} {...faq} />
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            <footer id="footer" className="px-6 py-20 md:px-20 md:py-[90px] bg-primary-purple space-y-[100px] text-white">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="space-y-6">
                        <Image className="-ml-6" src={"/assets/2023/images/footer-logo.svg"} alt="Logo" width={150} height={150} />
                        <p className="w-[250px] sm:w-[300px] uppercase tracking-wider">GenZtechies is a nonprofit community fiscally sponsored by The Hack Foundation Nonprofit EIN: 81-2908499.</p>
                    </div>

                    <div className="space-x-[32px] md:space-x-[64px] lg:space-x-[110px] flex mt-[40px] md:mt-0">
                        {FOOTER_LINKS.map((link, i) => (
                            <div key={i}>
                                <h3 className="text-white font-2xl font-sora font-bold uppercase">{link.category}</h3>
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
                    {/* <div>
                            <h3 className="text-white font-2xl font-sora font-bold uppercase">GET ALL LATEST UPDATES</h3>
                        <form className="">
                        </form>
                    </div> */}
                    <SectionHeader text="thank you" textClassName="text-white" dotClassName="text-primary-green" />
                </div>
            </footer>
        </>
    );
};

export default Main;

const Navigation = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <nav className="relative w-full">
            <ul className="container flex items-center justify-between py-2">
                <li>
                    <Image src={"https://assets.genztechies.com/logo-coloured.svg"} alt="Logo" width={84} height={40} />
                </li>
                <li>
                    <ul className="items-center hidden space-x-1 lg:flex">
                        {links.map((link, index) => (
                            <li key={index} className="p-4 font-semibold uppercase text-primary-dark font-rubik">
                                <Link target={link.target || "_self"} href={link.href}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <button className="rounded-full lg:hidden text-primary-purple" onClick={() => setOpen(!open)}>
                        <MenuIcon />
                    </button>

                    <Link target={"_blank"} href={HACKATHON_REGISTRATION_URL}>
                        <Button withArrow className="hidden lg:flex" size="sm">
                            Register
                        </Button>
                    </Link>
                </li>
            </ul>

            <ul
                className={clsx("container z-50 absolute flex flex-col w-full lg:hidden top-full shadow-md bg-primary-light-bg max-h-0 transition-all duration-300 ease-in-out overflow-hidden", {
                    "max-h-screen pb-10": open
                })}
            >
                {links.map((link, index) => (
                    <li key={index} className="p-4 font-semibold uppercase text-primary-dark font-rubik">
                        <Link target={link.target || "_self"} href={link.href}>
                            {link.name}
                        </Link>
                    </li>
                ))}
                <li>
                    <Link href={HACKATHON_REGISTRATION_URL}>
                        <Button withArrow className="w-full" size="sm">
                            Register
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

const Images = ({ active }: { active: number }) => {
    return (
        <>
            {Array.from({ length: 6 }).map((_, index) => (
                <Image
                    className={clsx("object-contain transition-all duration-1000 ease-in-out", {
                        "opacity-0": active !== index + 1,
                        "opacity-100": active === index + 1
                    })}
                    key={index}
                    fill
                    src={require(`../../public/assets/2023/images/emoji-${index + 1}.png`)}
                    alt="Emoji"
                />
            ))}
        </>
    );
};

const MenuIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 25 19" className={clsx("w-6 h-6", className)} stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.285645" y1="1.89285" x2="24.2856" y2="1.89285" stroke="currentColor" strokeWidth="2.5"></line>
        <line x1="6.28564" y1="9.60715" x2="24.2856" y2="9.60715" stroke="currentColor" strokeWidth="2.5"></line>
        <line x1="12.2949" y1="17.3214" x2="24.2949" y2="17.3214" stroke="currentColor" strokeWidth="2.5"></line>
    </svg>
);

const supporters: { title: string; link: string }[] = [
    {
        title: "vercel",
        link: "https://vercel.com/?utm_source=genztechies&utm_campaign=oss"
    },
    {
        title: "paystack",
        link: "https://paystack.com/"
    },
    {
        title: "lazerpay",
        link: "https://lazerpay.finance/"
    },
    {
        title: "filecoin",
        link: "https://filecoin.io/"
    },
    {
        title: "sail",
        link: "https://www.tokunboabiru.org/sail"
    },
    {
        title: "spheron",
        link: "https://spheron.network/"
    },
    {
        title: "technext",
        link: "https://technext.ng/"
    },
    {
        title: "i4g",
        link: "https://ingressive.org/"
    },
    {
        title: "klas",
        link: "https://www.tryklas.com/"
    },
    {
        title: "zeddpay",
        link: "https://www.zeddpay.com/"
    },
    {
        title: "techsteroid",
        link: "https://techsteroid.africa/"
    },
    {
        title: "gameverse",
        link: "#"
    },
    {
        title: "zuri",
        link: "#"
    },
    {
        title: "abcd-community",
        link: "#"
    }
];
