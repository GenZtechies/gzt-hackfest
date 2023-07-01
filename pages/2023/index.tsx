import { Seo } from "@/components";
import { PastEvents, PrepareToHack, Speakers } from "@/components/2023";

export default function Home() {
    return (
        <>
            <Seo
                // breaker
                title="Gen Z Hackfest 2023"
                image="/assets/2023/site-metaimage.png"
                description="Gen Z Hackfest 2023 is an annual hybrid event organised by the GenZtechies Community 🚀"
            />

            <PrepareToHack />
            <Speakers />
            <PastEvents />
        </>
    );
}
