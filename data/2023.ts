import { FAQCardProps } from "@/components/2023/FAQCard";
import { PastEventsCardProps } from "@/components/2023/PastEventsCard";
import { SpeakerCardProps } from "@/components/2023/SpeakerCard";

export const JOIN_THE_COMMUNITY_URL = "https://www.genztechies.com";
export const SESSIONIZE_URL = "https://sessionize.com/genzhackfest-2023";
export const SPONSORSHIP_DECK_URL = "https://docsend.com/view/x3t5y66xybdyyxwq";
export const HACKATHON_REGISTRATION_URL = "https://forms.gle/y5wRgVRFh1HabQrj7";
export const BUY_CONFERENCE_TICKET_URL = "https://eventprime.co/e/gen-z-hackfest-2023";
export const HACKFEST_2022_PICTURES_URL = "https://photos.app.goo.gl/MnLqmyVyAn8ivCc19";

export const SPEAKERS: SpeakerCardProps[] = [
    {
        name: "jude dike",
        role: "CEO/Cofounder at GetEquity",
        imgSrc: "/assets/2023/speakers/jude-dike.JPG",
        linkedin: "https://www.linkedin.com/in/dikejudein"
    },
    {
        name: "Alexandra Ighodaro",
        role: "Data engineer at wema bank",
        imgSrc: "/assets/2023/speakers/alexandra-ighodaro.jpg",
        linkedin: "https://www.linkedin.com/in/alexandra-ighodaro"
    },
    {
        name: "Douglas Kendyson",
        role: "ceo & founder at selar",
        imgSrc: "/assets/2023/speakers/douglas-kendyson-new.jpg",
        linkedin: "https://www.linkedin.com/in/kendysond"
    },
    {
        name: "Victor fatanmi",
        role: "CEO at Fullgap and FourthCanvas",
        imgSrc: "/assets/2023/speakers/victor-fatanmi.png",
        linkedin: "https://www.linkedin.com/in/victorfatanmi"
    },
    {
        name: "edidiong asikpo",
        role: "senior developer advocate at ambassador labs",
        imgSrc: "/assets/2023/speakers/edidiong-asikpo.jpeg",
        linkedin: "https://www.linkedin.com/in/edidiong-asikpo"
    },

    {
        name: "Benita Riagbayire",
        role: "marketing associate at figg africa",
        imgSrc: "/assets/2023/speakers/benita-riagbayire.jpeg",
        linkedin: "https://www.linkedin.com/in/benita-riagbayire-178b6917a"
    },
    {
        name: "Rasheed aro",
        role: "COO and Co-Founder at Trakka",
        imgSrc: "/assets/2023/speakers/rasheed-aro.jpg",
        linkedin: "https://www.linkedin.com/in/rasheed-aro-81431b1a3"
    },
    {
        name: "eunice azu",
        role: "customer success associate",
        imgSrc: "/assets/2023/speakers/eunice-azu.jpg",
        linkedin: "https://www.linkedin.com/in/azueunice"
    },
    {
        name: "travis uche",
        role: "Managing Director Xanotech LTD",
        imgSrc: "/assets/2023/speakers/travis-uche.jpeg",
        linkedin: "https://www.linkedin.com/in/david-travis-uche"
    },
    {
        name: "Oyinkansola Olunaike",
        role: "Product designer",
        imgSrc: "/assets/2023/speakers/oyinkansola-olunaike.jpeg",
        linkedin: "https://www.linkedin.com/in/oyinkansola-olunaike-7582531a1"
    },

    {
        name: "osame okunbo",
        role: "Co-Founder and Solutions Architect Mangospace",
        imgSrc: "/assets/2023/speakers/osama-okunbo.jpg",
        linkedin: "https://www.linkedin.com/in/osama-okunbo-a52101222"
    },
    {
        name: "Fadhl Yusuf",
        role: "design consultant at uu consulting",
        imgSrc: "/assets/2023/speakers/fadhl-yusuf.JPG",
        linkedin: "https://www.linkedin.com/in/thefadhlyusuf"
    },
    {
        name: "Daniel Umoren",
        role: "frontend developer & community manager",
        imgSrc: "/assets/2023/speakers/daniel-umoren.jpg",
        linkedin: "https://www.linkedin.com/in/daniel-umoren"
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
        answer: "Gen Z HackFest is an annual week-long hackathon and a one-day in-person conference for Gen-Zs in tech. It's an event where ambitious Gen-Zs come together to put their creative and coding skills to test, build innovative solutions to problems in Africa, and showcase what they can do!"
    },
    {
        type: "general",
        question: "How much does it cost?",
        answer: "The week-long hackathon is free. However, tickets for the one day in-person conference cost N3,000 / $4 only (Early Bird) and N5,000 / $7 (General)."
    },
    {
        type: "general",
        question: "When is the event?",
        answer: "The week-long hackathon is from August 21 — 25. However, teams can be formed and projects can be built beginning August 1st, we understand that everyone has different availabilities particularly students and working professionals. The in-person conference is on the 26th of August in Lagos."
    },
    {
        type: "hackathon",
        question: "Do I need coding experience?",
        answer: "No! But you can find a team of developers to join. First-time coders are encouraged to attend as well. We hope to help each of the participants discover their passion for something new."
    },
    {
        type: "conference",
        question: "Who can attend?",
        answer: "All Gen-Zs are welcome! No prior experience in tech is required. Students, developers, designers, founders, and anyone are welcome to attend the conference."
    },
    {
        type: "conference",
        question: "Will there be swag?",
        answer: "Yes! Every attendee will receive a swag. They'll also be a lot of giveaways and prizes throughout the event."
    },
    {
        type: "hackathon",
        question: "What happens if I encounter technical issues or need assistance during the hackathon?",
        answer: "The hackathon team will be available to provide support and assistance throughout the event. You can reach out to them through the designated slack channel for the hackathon."
    },
    {
        type: "hackathon",
        question: "Can I attend the hackathon remotely, or is physical attendance required?",
        answer: "The hackathon is designed to be accessible remotely. Participants can join and contribute from anywhere with an internet connection. There is no requirement for physical attendance at any location. However, we are partnering with tech hubs across the country to provide access to basic utilities, e.g Electricity, Internet, etc."
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
        question: "Can I attend the hackathon remotely, or is physical attendance required?",
        answer: "The hackathon is designed to be accessible remotely. Participants can join and contribute from anywhere with an internet connection. There is no requirement for physical attendance at any location. However, we are partnering with tech hubs across the country to provide access to basic utilities, e.g Electricity, Internet, etc."
    },
    {
        type: "hackathon",
        question: "Can I participate in the hackathon individually, or do I need to form a team?",
        answer: "The hackathon encourages team participation, a team must not exceed 3 members. However, if you prefer to participate individually, you are welcome to do so."
    },
    {
        type: "hackathon",
        question: "How do I form a team or find team members for the hackathon?",
        answer: "You can reach out to fellow participants through Slack to find team members. Alternatively, you can form a team with friends or colleagues who are also interested in participating and have registered. You are free to change teammates if any of them “ghost” halfway through."
    },
    {
        type: "hackathon",
        question: "Where will the Hackathon take place?",
        answer: "The hackathon will take place virtually. All links to community calls will be sent ahead to all registered participants."
    },
    {
        type: "hackathon",
        question: "Can I work on a project that I have already started before the hackathon?",
        answer: "The hackathon promotes the creation of new projects during the event. It is recommended you work on a new idea/solution for the hackathon."
    },
    {
        type: "hackathon",
        question: "How are the winners selected?",
        answer: "All submitted projects will be scored based on a set of factors that will be communicated pre-event. The judging will be 100% unbiased."
    },
    {
        type: "hackathon",
        question: "What programming languages or technologies can I use for my project?",
        answer: "The hackathon is open to participants from various technical backgrounds. You can choose any programming language or technology stack that best suits your project requirements and expertise. There are no specific restrictions on the tools or technologies you can use."
    },
    {
        type: "hackathon",
        question: "What happens after the hackathon ends?",
        answer: "Judging begins! The winners will be announced and prizes will be awarded at the conference."
    },
    {
        question: "I still have a question 🥲",
        answer: "Email us at hello@genztechies.com with any questions you may have and we'll get back to you ASAP."
    }
];

export const venue = "https://www.google.com/maps/dir/my+location/Unilag+Multipurpose+Hall,+Lagos/";

export const TOP_NAV_LINKS: { name: string; href: string; target?: string }[] = [
    {
        name: "About",
        href: "#about-us"
    },
    {
        name: "Speakers",
        href: "#speakers"
    },
    {
        name: "hackathon",
        href: "#faqs"
    },
    {
        name: "conference",
        href: "#past-events"
    },
    {
        name: "locate venue",
        href: venue,
        target: "_blank"
    }
];

export const FOOTER_LINKS: { category: string; links: { title: string; href: string }[] }[] = [
    {
        category: "Quick Links",
        links: [
            {
                title: "Initiatives",
                href: "https://www.genztechies.com/initiatives"
            },
            {
                title: "Donate",
                href: "https://www.genztechies.com/donate"
            },
            {
                title: "Gallery",
                href: "#past-events"
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
                title: "hello@genztechies.com",
                href: "mailto:hello@genztechies.com"
            }
        ]
    }
];

export const PREVIOUS_PARTNERS: { title: string; link: string }[] = [
    {
        title: "vercel",
        link: "https://vercel.com/?utm_source=genztechies&utm_campaign=oss"
    },
    {
        title: "lazerpay",
        link: "https://lazerpay.finance/"
    },
    {
        title: "filecoin",
        link: "https://filecoin.io/"
    },
    {
        title: "sail",
        link: "https://www.tokunboabiru.org/sail"
    },
    {
        title: "spheron",
        link: "https://spheron.network/"
    },
    {
        title: "technext",
        link: "https://technext.ng/"
    },
    {
        title: "i4g",
        link: "https://ingressive.org/"
    },
    {
        title: "zeddpay",
        link: "https://www.zeddpay.com/"
    },
    {
        title: "techsteroid",
        link: "https://techsteroid.africa/"
    },
    {
        title: "zuri",
        link: "https://www.zuri.team/"
    }
];

export const sponsors_partners = [
    {
        title: "quine",
        link: "https://www.quine.sh/?utm_source=genztechies&utm_campaign=social_promo"
    },

    {
        title: "paystack",
        link: "https://paystack.com"
    },
    {
        title: "chimoney",
        link: "https://chimoney.io"
    },
    {
        title: "sail",
        link: "https://www.tokunboabiru.org/sail"
    },
    {
        title: "vercel",
        link: "https://vercel.com/?utm_source=genztechies&utm_campaign=oss"
    },

    // {
    //     title: "technext",
    //     link: "https://technext.ng/"
    // },
    {
        title: "i4g",
        link: "https://ingressive.org/"
    },
    {
        title: "treford",
        link: "https://treford.africa/"
    },
    {
        title: "NexaScale",
        link: "https://nexascale.org/",
        image: "nexascale.png"
    },
    {
        title: "She Code Africa",
        link: "https://shecodeafrica.org/",
        image: "she-code-africa.svg"
    },
    {
        title: "Web3 lagies",
        link: "https://www.web3ladies.com/",
        image: "web3ladies-logo.svg"
    },

    {
        name: "Unilag TV",
        link: "https://www.youtube.com/@unilagontv5062",
        image: "unilag-tv.jpg"
    },
    {
        name: "Brila FM",
        link: "https://www.brila.net/",
        image: "brilla-fm.jpg"
    }
];
