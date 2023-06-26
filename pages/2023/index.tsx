import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";
import { Button } from "../../components/2023";
import { clsx } from "class-flex";

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
    }
];

const Main = () => {
    const [active, setActive] = React.useState(1);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActive(active >= 6 ? 1 : active + 1);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [active]);

    return (
        <main className="flex flex-col justify-between w-screen h-screen bg-primary-light-bg">
            <nav className="w-full">
                <ul className="container flex items-center justify-between py-2">
                    <li>
                        <Image src={"https://assets.genztechies.com/logo-coloured.svg"} alt="Logo" width={84} height={40} />
                    </li>
                    <li>
                        <ul className="flex items-center space-x-1">
                            {links.map((link, index) => (
                                <li key={index} className="p-4 font-semibold uppercase text-primary-dark font-rubik">
                                    <Link href={link.href}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <Button withArrow className="w-full md:flex-grow" size="sm">
                            Register
                        </Button>
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
                        <Button withArrow className="w-full md:flex-grow">
                            Become a sponsor
                        </Button>
                        <Button withArrow className="w-full md:flex-grow" variant="outlined">
                            speak at hackfest
                        </Button>
                    </div>
                </div>
                <div className="relative w-full h-full col-span-2">
                    <Images active={active} />
                </div>
            </div>
        </main>
    );
};

export default Main;

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
