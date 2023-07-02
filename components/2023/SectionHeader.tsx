type Props = {
    textClassName?: string;
    dotClassName?: string;
    text: string;
};

const SectionHeader = ({ textClassName, dotClassName, text }: Props) => {
    return (
        <p className={["text-[#0D0C24] font-sora text-5xl md:text-7xl font-extrabold uppercase lg:leading-[100px]", textClassName].join(" ")}>
            {text}
            <span className={["text-indigo-500 inline-block", dotClassName].join(" ")}>.</span>
        </p>
    );
};

export default SectionHeader;
