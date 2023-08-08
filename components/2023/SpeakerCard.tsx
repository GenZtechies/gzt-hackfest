import Image from "next/image";
import Link from "next/link";

export type SpeakerCardProps = {
    imgSrc: string;
    name: string;
    role: string;
    linkedin: string;
};

const SpeakerCard = ({ name, imgSrc, role, linkedin }: SpeakerCardProps) => {
    return (
        <div className="flex-shrink-0 space-y-6 h-96">
            <Link href={linkedin} target="_blank" className="w-full">
                <div className="relative w-full overflow-hidden border-b-8 rounded-lg shadow-sm h-80 border-primary-blue-dark">
                    <Image src={imgSrc} fill alt={name} className="object-cover object-top" />
                </div>
            </Link>

            <div className="space-y-1 text-center">
                <Link href={linkedin} target="_blank" className="text-2xl font-extrabold uppercase hover:underline text-primary-blue-dark font-sora">
                    {name}
                </Link>
                <p className="uppercase text-[#2F2D2D]">{role}</p>
            </div>
        </div>
    );
};

export default SpeakerCard;
