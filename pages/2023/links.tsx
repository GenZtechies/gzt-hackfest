import { venue } from "@/data/2023";
import Link from "next/link";
const links = [
    {
        name: "Get DP",
        link: "https://getdp.co/genzhackfest-2023"
    },
    {
        name: "Locate Venue On Map",
        link: venue
    },
    {}
];

const Links = () => {
    return (
        <main className="flex items-center justify-center w-screen h-screen bg-white">
            <ul className="space-y-2">
                {links.map((link) => (
                    <li key={link.name} className="text-center text-primary-purple">
                        <Link href={link.link || "#"} target="_blank" className="font-semibold">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Links;
