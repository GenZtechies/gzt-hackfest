export type FAQCardProps = {
    type?: "general" | "conference" | "hackathon";
    question: string;
    answer: string;
};

const FAQCard = ({ type, question, answer }: FAQCardProps) => {
    return (
        <div className="collapse collapse-arrow join-item border border-none">
            <input type="radio" name="my-accordion-4" />

            <div className="collapse-title font-semibold font-sora border border-primary-blue-dark text-primary-blue-dark">
                {type && <span className="uppercase">{type} - </span>}
                {question}
            </div>

            <div className="collapse-content bg-white border-x last:border-b border-primary-blue-dark">
                <p className="p-[18px] pb-0 text-primary-blue-dark">{answer}</p>
            </div>
        </div>
    );
};

export default FAQCard;
