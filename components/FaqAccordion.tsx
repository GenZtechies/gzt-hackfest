import React from "react";

type FaqAccordionType = {
    question: string;
    answer: string;
};

const FaqAccordion = ({ question, answer }: FaqAccordionType) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    return (
        <div className="w-full">
            <button className="flex flex-row justify-between items-center w-full border-4 border-primary-green rounded-lg p-5 my-5" onClick={() => setIsOpen(!isOpen)}>
                <h4 className="text-2xl text-left font-bold text-gray-100">{question}</h4>
                <svg className="animate-bounce" width={24} height={14} viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L12 12L22 2" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <p className={["text-lg text-gray-100", !isOpen && "hidden"].join(" ")}>{answer}</p>
        </div>
    );
};

export default FaqAccordion;
