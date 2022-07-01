/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        BACKEND_BASE_URL: process.env.BACKEND_BASE_URL || "http://localhost:4000",

        HACKATHON_REGISTRATION_URL: "https://forms.gle/x5UNkUcDCDryLdsLA",
        CONFERENCE_REGISTRATION_URL: "https://eventprime.co/e/gen-z-hackfest-2022",
        BECOME_A_SPONSOR_URL: "https://airtable.com/shr3eOxjfYoHDqi8s",

        SCHEDULE_URL: "https://genztechies.notion.site/Gen-Z-Hackfest-2022-Schedule-14eb7071e734426ba744d9f6838e200f",
    },
    async redirects() {
        return [
            {
                source: "/speaking",
                destination: "https://docs.google.com/forms/d/1jZETaw47OIapNRY2zDkVXmKkVzN8HjXWVaFdN3ZX81s/edit?usp=sharing",
                permanent: false,
            },
            {
                source: "/volunteer",
                destination: "https://docs.google.com/forms/d/1SIxj-2eri8wqvRetUyT5a_yRdmpYQPj5zdsblWsPG_Q/edit?usp=sharing",
                permanent: false,
            },
            {
                source: "/showcase",
                destination: "https://docs.google.com/forms/d/1zn8NLGRVAXA05_yeHwClTDnlFH_z2uzTr9M0cXl4wV4/edit?usp=sharing",
                permanent: false,
            },
            {
                source: "/schedule",
                destination: "https://genztechies.notion.site/Gen-Z-Hackfest-2022-Schedule-14eb7071e734426ba744d9f6838e200f",
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig;
