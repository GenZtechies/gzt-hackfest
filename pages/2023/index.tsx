import Link from "next/link";

import { Seo } from "../../components";
import { BUY_CONFERENCE_TICKET_URL, HACKATHON_REGISTRATION_URL, HACKFEST_2022_PICTURES_URL } from "../../data/2023";

const ArrowSvg = () => (
    <svg className="w-3 aspect-square animate-bounce" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M24.7132 1.99999C24.7132 1.17157 24.0416 0.499992 23.2132 0.499992H9.7132C8.88478 0.499992 8.2132 1.17157 8.2132 1.99999C8.2132 2.82842 8.88478 3.49999 9.7132 3.49999L21.7132 3.49999L21.7132 15.5C21.7132 16.3284 22.3848 17 23.2132 17C24.0416 17 24.7132 16.3284 24.7132 15.5V1.99999ZM3.06066 24.2739L24.2739 3.06065L22.1525 0.939332L0.93934 22.1525L3.06066 24.2739Z"
            fill="white"
        />
    </svg>
);

export default function Home() {
    return (
        <>
            <Seo
                // breaker
                title="Gen Z Hackfest 2023"
                description="Gen Z Hackfest 2023 is an annual hybrid event organised by the GenZtechies Community 🚀"
            />

            <div className="h-screen w-full bg-black/70 bg-blend-overlay bg-[url('/assets/2023/images/site-bg.png')] bg-no-repeat bg-cover bg-center top-0 fixed -z-50" />
            {/* <div className="h-screen w-full bg-black/20 bg-blend-overlay bg-[url('/assets/2023/images/site-bg-2.png')] bg-no-repeat bg-cover bg-center top-0 fixed -z-50" /> */}

            <div className="flex flex-col items-center min-h-screen p-5">
                <div className="m-auto w-full space-y-10">
                    <h2 className="text-center text-5xl md:text-8xl font-rubik font-extrabold text-white leading-tight">
                        <span className="block">Gen Z </span>
                        <span>HackFest &nbsp; </span>
                        <span className="block lg:inline">
                            2<b className="text-5xl md:text-8xl">🚀</b>23
                        </span>
                    </h2>

                    <div className="flex flex-col justify-center space-y-2">
                        <h3 className="text-center text-xl md:text-2xl font-sora font-light text-white">August 21st &mdash; 26th</h3>
                        <h3 className="text-center text-3xl md:text-4xl font-sora font-medium text-white">Lagos, Nigeria</h3>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:pt-10">
                        <Link href="https://docsend.com/view/x3t5y66xybdyyxwq" className="btn btn-lg btn-wide bg-white hover:bg-white border-none normal-case text-primary-purple font-sora gap-4">
                            Become a Sponsor
                        </Link>
                        <Link href="https://sessionize.com/genzhackfest-2023" className="btn btn-lg btn-wide bg-transparent hover:bg-transparent border-white hover:border-white normal-case text-white font-sora gap-4">
                            Speak at HackFest
                        </Link>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:pt-10">
                        <Link href={BUY_CONFERENCE_TICKET_URL} className="btn btn-md md:btn-lg btn-ghost hover:bg-transparent normal-case text-white no-animation font-sora gap-4">
                            Get conference Tickets
                            <ArrowSvg />
                        </Link>
                        <Link href={HACKATHON_REGISTRATION_URL} className="btn btn-md md:btn-lg btn-ghost hover:bg-transparent normal-case text-white no-animation font-sora gap-4">
                            Register for Hackathon
                            <ArrowSvg />
                        </Link>
                        <Link href={HACKFEST_2022_PICTURES_URL} className="btn btn-md md:btn-lg btn-ghost hover:bg-transparent normal-case text-white no-animation font-sora gap-4">
                            View past Pictures
                            <ArrowSvg />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
