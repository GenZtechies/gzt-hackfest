import Link from "next/link";
import { Seo } from "../components";

export default function Home() {
    return (
        <>
            <Seo
                // breaker
                title="Gen Z Hackfest 2023"
                description="Gen Z Hackfest 2023 is an annual hybrid event organised by the GenZtechies Community 🚀"
                image="/assets/"
            />

            <div className="flex flex-col items-center min-h-screen p-5 bg-primary-purple">
                <div className="m-auto w-full">
                    <h3 className="text-4xl text-white text-center font-semibold my-5">
                        GenZ <b className="text-primary-green font-semibold">Hackfest </b>
                        <b className=" text-primary-yellow font-semibold">2023 </b>
                    </h3>

                    <h3 className="text-lg md:text-2xl text-white text-center font-medium my-5">
                        While you're here, you should checkout the &nbsp;
                        <Link className="underline" href="http://genztechies.com/gallery" target="_blank">
                            pictures
                        </Link>
                        &nbsp; from &nbsp;
                        <Link className="underline" href="/2022">
                            Hackfest 2022
                        </Link>
                        &nbsp; 🫣
                    </h3>
                </div>
            </div>
        </>
    );
}
