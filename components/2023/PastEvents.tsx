import React from "react";
import SectionHeader from "./SectionHeader";
import { PAST_EVENTS } from "@/data/2023";
import PastEventsCard from "./PastEventsCard";

type Props = {};

const PastEvents = (props: Props) => {
    return (
        <div className="px-6 py-20 md:px-20 md:py-[90px] bg-[#EAEAEE]">
            <SectionHeader text="Past Events" />

            <div className="mt-[56px] flex flex-col md:flex-row basis-1/2 gap-6">
                {PAST_EVENTS.map((event, i) => (
                    <PastEventsCard key={i} {...event} />
                ))}
            </div>
        </div>
    );
};

export default PastEvents;
