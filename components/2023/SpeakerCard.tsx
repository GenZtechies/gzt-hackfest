import React from "react";
import Image from "next/image";

export type SpeakerCardProps = {
    imgSrc: string;
    name: string;
    role: string;
};

const SpeakerCard = ({ name, imgSrc, role }: SpeakerCardProps) => {
    return (
        <div className="space-y-6 flex-shrink-0">
            <div className="relative w-[285px] sm:w-[350px] md:w-[400px] aspect-square">
                <Image src={imgSrc} fill alt={name} />
            </div>

            <div className="space-y-1">
                <p className="uppercase text-[#0D0C24] font-extrabold text-2xl font-sora">{name}</p>
                <p className="uppercase text-[#2F2D2D]">{role}</p>
            </div>
        </div>
    );
};

export default SpeakerCard;
