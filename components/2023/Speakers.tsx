import React from "react";
import SectionHeader from "./SectionHeader";
import SpeakerCard from "./SpeakerCard";
import { SPEAKERS } from "@/data/2023";

type Props = {};

const Speakers = (_props: Props) => {
    return (
        <div className="px-6 py-20 md:px-20 md:py-[90px] bg-[#EAEAEE] border-b-4 border-b-[#0D0C24]">
            <SectionHeader text="speakers" />

            {/* Speakers */}
            <div className="mt-[100px] flex space-x-4 overflow-x-auto scrollbar-none">
                {SPEAKERS.map((speaker, i) => (
                    <SpeakerCard key={i} {...speaker} />
                ))}
            </div>
        </div>
    );
};

export default Speakers;
