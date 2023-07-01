import { PastEventsCardProps } from "@/components/2023/PastEventsCard";
import { SpeakerCardProps } from "@/components/2023/SpeakerCard";

export const BUY_CONFERENCE_TICKET_URL = "https://eventprime.co/e/gen-z-hackfest-2023";
export const HACKATHON_REGISTRATION_URL = "https://forms.gle/y5wRgVRFh1HabQrj7";
export const HACKFEST_2022_PICTURES_URL = "https://photos.app.goo.gl/MnLqmyVyAn8ivCc19";

export const SPEAKERS: SpeakerCardProps[] = [
    {
        name: "davio white",
        imgSrc: "/assets/2023/images/davio-white.png",
        role: "product designer"
    },
    {
        name: "edidiong asikpo",
        imgSrc: "/assets/2023/images/edidiong-asikpo.png",
        role: "senior developer advocate"
    },
    {
        name: "Rukayat yaro",
        imgSrc: "/assets/2023/images/Rukayat-yaro.png",
        role: "product designer"
    }
];

export const PAST_EVENTS: PastEventsCardProps[] = [
    {
        eventTitle: "hackfest 2022",
        imgSrc: "/assets/2023/images/event-1.png",
        link: "https://google.com"
    },
    {
        eventTitle: "hackfest 2022",
        imgSrc: "/assets/2023/images/event-2.png",
        link: "https://google.com"
    }
];
