import Image from "next/image";

export type SpeakerCardProps = {
    imgId: string;
    name: string;
    role: string;
};

const SpeakerCard = ({ name, imgId, role }: SpeakerCardProps) => {
    return (
        <div className="flex-shrink-0 space-y-6 h-96">
            <div className="relative w-full overflow-hidden rounded-lg shadow-sm h-72 ">
                <Image src={`https://drive.google.com/uc?export=view&id=${imgId}`} fill alt={name} className="object-cover object-top" />
            </div>

            <div className="space-y-1 text-center">
                <p className="text-2xl font-extrabold uppercase text-primary-blue-dark font-sora">{name}</p>
                <p className="uppercase text-[#2F2D2D]">{role}</p>
            </div>
        </div>
    );
};

export default SpeakerCard;
