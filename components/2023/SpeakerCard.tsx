import Image from "next/image";

export type SpeakerCardProps = {
    imgSrc: string;
    name: string;
    role: string;
};

const SpeakerCard = ({ name, imgSrc, role }: SpeakerCardProps) => {
    return (
        <div className="flex-shrink-0 space-y-6 h-96">
            <div className="relative w-full overflow-hidden border-b-8 rounded-lg shadow-sm h-72 border-primary-blue-dark">
                <Image src={imgSrc} fill alt={name} className="object-cover object-top" />
            </div>

            <div className="space-y-1 text-center">
                <p className="text-2xl font-extrabold uppercase text-primary-blue-dark font-sora">{name}</p>
                <p className="uppercase text-[#2F2D2D]">{role}</p>
            </div>
        </div>
    );
};

export default SpeakerCard;
