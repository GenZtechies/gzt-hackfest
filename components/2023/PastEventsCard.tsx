import React from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";

export type PastEventsCardProps = {
    imgSrc: string;
    eventTitle: string;
    link: string;
};

const PastEventsCard = ({ imgSrc, eventTitle, link }: PastEventsCardProps) => {
    return (
        <div className="basis-1/2 flex flex-col items-center space-y-12">
            <div className="relative w-full h-full flex justify-center">
                <Image src={imgSrc} width={632} height={545} alt={eventTitle} />

                <p className="bg-white text-primary-dark font-bold text-sm px-7 py-4 rounded-full uppercase absolute top-7 right-7 xl:right-[calc((100%-632px+28px)/2)]">{eventTitle}</p>
            </div>
            <a href={link} target="_blank">
                <button className="bg-white text-primary-purple font-medium uppercase px-16 py-4 rounded-full shadow-sm flex items-center">
                    View Album <HiArrowRight className="-rotate-45 text-2xl ml-4" />
                </button>
            </a>
        </div>
    );
};

export default PastEventsCard;
