import React from "react";
import Image from "next/image";

import { HiArrowRight } from "react-icons/hi";

type Props = {};

const PrepareToHack = (props: Props) => {
    return (
        <div className="px-6 py-20 md:px-20 md:py-[90px] bg-[#FBFBFF] flex flex-col lg:flex-row justify-center items-center lg:space-x-20">
            <div className="relative w-full lg:basis-1/2 aspect-square">
                <Image src="/assets/2023/images/prepare-to-hack.png" className="object-contain" fill alt="paystack tour" />
            </div>
            <div className="w-full lg:basis-1/2">
                <p className="text-[#0D0C24] text-5xl md:text-7xl font-extrabold uppercase lg:leading-[100px]">
                    prepare to hack<span className="text-indigo-500 inline-block">.</span>
                </p>
                <p className="mt-4 text-lg text-[#2F2D2D] uppercase leading-[200.5%]">
                    The hackathon aims to address a specific problem in Africa that is often neglected. It brings together individuals from various fields to collaborate and find innovative solutions. By leveraging their diverse skills and expertise, participants work towards creating tangible and impactful outcomes.
                </p>

                <button className="bg-[#5D5CD6] text-white font-medium uppercase inline-flex items-center py-[22px] px-[36.5px] rounded-full border-[#2F2D2D] border border-b-4 mt-[64px]">
                    Join the hackathon <HiArrowRight className="-rotate-45 ml-4 text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default PrepareToHack;
