/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        BACKEND_BASE_URL: process.env.BACKEND_BASE_URL || "http://localhost:4000",

        HACKATHON_REGISTRATION_URL: "https://forms.gle/x5UNkUcDCDryLdsLA",
        CONFERENCE_REGISTRATION_URL: "",
        BECOME_A_SPONSOR_URL: ""
    }
};

module.exports = nextConfig;
