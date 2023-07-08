import { FAQCardProps } from "@/components/2023/FAQCard";
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
        imgSrc: "/assets/2023/images/rukayat-yaro.png",
        role: "product designer"
    }
];

export const PAST_EVENTS: PastEventsCardProps[] = [
    {
        eventTitle: "hackfest 2022",
        imgSrc: "/assets/2023/images/event-1.png",
        link: "https://photos.app.goo.gl/MnLqmyVyAn8ivCc19"
    },
    {
        eventTitle: "hackfest 2022",
        imgSrc: "/assets/2023/images/event-2.png",
        link: "https://photos.app.goo.gl/MnLqmyVyAn8ivCc19"
    }
];

export const FAQS_DATA: FAQCardProps[] = [
    {
        question: "What is Gen Z HackFest?",
        answer: "Gen Z HackFest is an annual three-day virtual hackathon and a one-day in-person conference aimed to connect Gen Z's in tech on a large scale. It's an event where ambitious Gen Z's come together to put their creative and coding skills to test, build solutions to problems in Africa and showcase what they can do!"
    },
    {
        type: "hackathon",
        question: "Do I need coding experience?",
        answer: "No! But you can find a team of developers to join. First time coders are encouraged to attend as well. We hope to help each of the participants dicover passion for something new."
    },
    {
        type: "conference",
        question: "Who can attend?",
        answer: "Any Gen Z is welcome! No prior experience in tech is required. Students, developers, designers, founders and any other interested individuals are welcome to attend the conference."
    },
    {
        type: "general",
        question: "How much does it cost?",
        answer: "The three days virtual hackathon is free. However, tickets for the one day in-person conference cost N2,000 / $4 only."
    },
    {
        type: "conference",
        question: "Where will the event take place?",
        answer: "The in-person conference will be taking place at Zone Tech Park, Lagos, Nigeria."
    },
    {
        type: "conference",
        question: "Will there be swag?",
        answer: "Yes! Every attendee will receive a swag. They'll also be a lot of giveaways and prizes to be won throughout the event."
    },
    {
        type: "hackathon",
        question: "How will teams work?",
        answer: "Participants for the hackathon can work solo or form teams of 2-4 people. Need a team? Find one through our team formation channel on Slack! If you have friends or classmates that are interested, feel free to invite them as well!"
    },
    {
        type: "hackathon",
        question: "How will projects be judged?",
        answer: "Each project will be scored based on their functionality, design, impact, and originality. The scoring rubric will be shared at the beginning of the hackathon!"
    },
    {
        type: "hackathon",
        question: "How will I submit my project?",
        answer: "Projects will be submitted digitally. A video demo and basic description of the project is required, and all code written must also be accessible (whether through Github or some other means)."
    },
    {
        type: "hackathon",
        question: "How will prizes be awarded?",
        answer: "All projects must be completed within the timeframe of the hackathon and be submitted before the deadline. If you are a beginner or have less experience in programming that will be taken into account while judging your project, so everyone has a fair chance regardless of their knowledge before that hackathon."
    },
    {
        type: "hackathon",
        question: "What are the prizes?",
        answer: "The prizes in total worth over N600,000 / $1,000 in monetary prizes. Prizes will be awarded to the top 5 projects/teams."
    },
    {
        type: "general",
        question: "When is the event?",
        answer: "The three days virtual hackathon is from 1st — 3rd of July, 2022. The one day in-person conference is on the 11th of July, 2022."
    },
    {
        question: "I still have a question 🥲",
        answer: "Email us at hello@genztechies.com with any questions you may have and we'll get back to you ASAP."
    }
];
export const FOOTER_LINKS = [
    {
        category: "Quick Links",
        links: [
            {
                title: "Initiate",
                href: "https://www.genztechies.com/initiatives"
            },
            {
                title: "Donate",
                href: "https://www.genztechies.com/donate"
            },
            {
                title: "Store",
                href: "https://www.genztechies.com/store"
            },
            {
                title: "Gallery",
                href: "#events"
            },
            {
                title: "Press",
                href: "https://www.genztechies.com/press"
            }
        ]
    },
    {
        category: "Contact",
        links: [
            {
                title: "Twitter",
                href: "https://twitter.com/genztechies"
            },
            {
                title: "Instagram",
                href: "https://instagram.com/genztechies"
            },
            {
                title: "LinkedIn",
                href: "https://linkedin.com/company/genztechies"
            },
            {
                title: "Facebook",
                href: "https://facebook.com/genztechies"
            },
            {
                title: "Hello@gmail.com",
                href: "mailto:hello@gentechies.com"
            }
        ]
    }
];
