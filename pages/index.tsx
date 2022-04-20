import React from "react";
import type { NextPage } from "next";

import { Header } from "../components";


const Home: NextPage = () => {
    return (
        <>
            {/* <main className="bg-gradient-to-tl from-primary-purple via-primary-green/80 to-primary-purple"> */}
            <Header />

            <main>
                <section id="home" className="container flex flex-col items-center mx-auto p-10 min-h-screen py-6 bg-slate-50 shadow-sm">
                    <h3 className="md:text-3xl text-2xl font-medium py-5 text-center text-black">This is Gen Z Hack + Fest</h3>
                    <div className="grid md:grid-cols-2 items-center place-items-center">

                        <div className="flex flex-col items-center md:items-start md:pl-20">

                            <h3 className="md:text-5xl text-3xl font-bold py-5 text-center md:text-left text-black max-w-xl">Africa&apos;s largest GenZ Hackathon.</h3>
                            <p className="md:text-2xl text-xl pl-5 md:pl-0 pr-5 md:pr-0 pb-5  text-center md:text-left max-w-3xl text-black">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th industry&apos;s standard dummy text ever since the 1500s, when an unknown
                                printer took a galley.
                            </p>

                            <button className="bg-green-500 text-white font-bold p-5 rounded-lg">Register</button>
                        </div>

                        <div className="w-screen md:w-9/12">
                            <img src="/assets/images/icon-5.svg" alt="hackathon"/>
                        </div>

                    </div>

                    {/* Background Images Attachment */}
                    <div className="fixed -z-10 opacity-40 lg:opacity-100 right-10 top-36">
                        <img src="/assets/images/bg-icon-1.svg" alt="hackathon" />
                    </div>
                    <div className="fixed -z-10 opacity-40 lg:opacity-100 left-10 top-36">
                        <img src="/assets/images/bg-icon-4.svg" alt="hackathon" />
                    </div>

                    <div className="fixed -z-10 opacity-40 lg:opacity-100 left-10 bottom-20">
                        <img src="/assets/images/bg-icon-2.svg" alt="hackathon" />
                    </div>
                    <div className="fixed -z-10 opacity-40 lg:opacity-100 right-10 bottom-20">
                        <img src="/assets/images/bg-icon-3.svg" alt="hackathon" />
                    </div>
                </section>

                <section id="about" className="container flex flex-col items-center mx-auto p-10 ">
                <div className="grid md:grid-cols-2 items-center place-items-center">
                    <img src="/assets/images/icon-6.svg" alt="hackathon" />
                    <div className="md:mr-10">
                    <h3 className="text-5xl font-bold py-5 md:text-left text-center text-black max-w-3xl">Why Africa&apos;s largest Gen-Z Hackathon + Festival?</h3>
                    <p className="text-xl pb-5 md:text-left text-center max-w-3xl text-black" >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th industry&apos;s standard dummy text ever since the 1500s, when an unknown
                        printer took a galley. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley.
                    </p>
                    </div>
                    </div>
                    
                </section>

                <section id="judges" className="container flex flex-col items-center mx-auto p-10">
                    <h3 className="text-5xl font-bold py-5 text-center text-black">Judges & Speakers</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="bg-green-500 p-2 rounded-lg shadow-lg hover:scale-105 transition duration-300">
                            <img src="https://via.placeholder.com/600x600" alt="team-member" className="h-60 w-72 object-cover object-center rounded-lg pb-2" />
                            <h4 className="text-xl text-white font-bold px-1">Samantha Jane</h4>
                            <p className="text-md text-white font-light px-1 italic">Software Developer</p>
                            <p className="text-md text-white font-medium px-1">Microsoft</p>
                        </div>
                        <div className="bg-green-500 p-2 rounded-lg shadow-lg hover:scale-105 transition duration-300">
                            <img src="https://via.placeholder.com/600x600" alt="team-member" className="h-60 w-72 object-cover object-center rounded-lg pb-2" />
                            <h4 className="text-xl text-white font-bold px-1">Samantha Jane</h4>
                            <p className="text-md text-white font-light px-1 italic">Software Developer</p>
                            <p className="text-md text-white font-medium px-1">Microsoft</p>
                        </div>
                        <div className="bg-green-500 p-2 rounded-lg shadow-lg hover:scale-105 transition duration-300">
                            <img src="https://via.placeholder.com/600x600" alt="team-member" className="h-60 w-72 object-cover object-center rounded-lg pb-2" />
                            <h4 className="text-xl text-white font-bold px-1">Samantha Jane</h4>
                            <p className="text-md text-white font-light px-1 italic">Software Developer</p>
                            <p className="text-md text-white font-medium px-1">Microsoft</p>
                        </div>
                    </div>
                </section>

                <section id="sponsors" className="container flex flex-col items-center mx-auto p-10 bg-slate-50">
                    <h3 className="text-5xl font-bold py-5 text-center text-black">Our Sponsors</h3>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="rounded-lg">
                            <img src="https://via.placeholder.com/400x400" alt="team-member" className="h-32 w-64 object-cover object-center rounded-lg" />
                        </div>
                        <div className="rounded-lg">
                            <img src="https://via.placeholder.com/400x400" alt="team-member" className="h-32 w-64 object-cover object-center rounded-lg" />
                        </div>
                        <div className="rounded-lg">
                            <img src="https://via.placeholder.com/400x400" alt="team-member" className="h-32 w-64 object-cover object-center rounded-lg" />
                        </div>
                        <div className="rounded-lg">
                            <img src="https://via.placeholder.com/400x400" alt="team-member" className="h-32 w-64 object-cover object-center rounded-lg" />
                        </div>
                        <div className="rounded-lg">
                            <img src="https://via.placeholder.com/400x400" alt="team-member" className="h-32 w-64 object-cover object-center rounded-lg" />
                        </div>
                        <div className="rounded-lg">
                            <img src="https://via.placeholder.com/400x400" alt="team-member" className="h-32 w-64 object-cover object-center rounded-lg" />
                        </div>
                        <div className="rounded-lg">
                            <img src="https://via.placeholder.com/400x400" alt="team-member" className="h-32 w-64 object-cover object-center rounded-lg" />
                        </div>
                        <div className="rounded-lg">
                            <img src="https://via.placeholder.com/400x400" alt="team-member" className="h-32 w-64 object-cover object-center rounded-lg" />
                        </div>
                    </div>

                    <button className="bg-green-500 text-white font-bold p-5 rounded-lg mt-5">Become a Sponsor</button>
                </section>

                <section className="container flex flex-col items-center mx-auto p-10">
                    <h3 className="text-5xl font-bold py-5 text-center text-black">Frequently Asked Questions</h3>

                    <div className="flex flex-col items-center">
                        <div className="w-full md:w-2/3">
                            <div className="flex items-center justify-between border-4 rounded-lg border-green-500 p-5 my-5">
                                <h4 className="text-2xl font-bold text-black">What is HackFest ?</h4>
                                <span>
                                    <svg className="animate-bounce" width={24} height={14} viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 2L12 12L22 2" stroke="black" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                            <p className="text-lg text-black">
                                HackFest is a hackathon that is held every year in the fall. It is a great way to learn new skills and get involved in the tech community.
                            </p>
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="flex items-center justify-between border-4 rounded-lg border-green-500 p-5 my-5">
                                <h4 className="text-2xl font-bold text-black">What is the hackathon format?</h4>
                                <span>
                                    <svg className="animate-bounce" width={24} height={14} viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 2L12 12L22 2" stroke="black" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                            <p className="text-lg text-black">The hackathon is a 24 hour event where teams of around 5-10 people come together to build a project.</p>
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="flex items-center justify-between border-4 rounded-lg border-green-500 p-5 my-5">
                                <h4 className="text-2xl font-bold text-black">What is the hackathon theme?</h4>
                                <span>
                                    <svg className="animate-bounce" width={24} height={14} viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 2L12 12L22 2" stroke="black" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                            <p className="text-lg text-black">The theme of the hackathon is to build a product that will help people in need.</p>
                        </div>
                    </div>
                </section>

                <section className="container flex flex-col items-center mx-auto p-10">
                    <h3 className="text-5xl font-bold py-5 text-center text-black">Ready to Join Us?</h3>
                    <p className="text-2xl pb-5 text-center max-w-lg text-black">Join others and be among the first to know when we finally launch.</p>

                    <button className="bg-green-500 text-white font-bold p-5 rounded-lg">Get involved</button>
                </section>

                <footer className="container flex flex-col items-center mx-auto p-10 ">
                    <h4 className="text-3xl font-bold py-5 text-center text-black">Connect with us</h4>

                    <div className="flex flex-row gap-5 pb-10 items-center">
                        <a href="https://twitter.com/genztechies" target="_blank" rel="noopener noreferrer">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="none" />
                                <path
                                    d="M35 11.7282C33.9335 12.1893 32.7879 12.5008 31.5835 12.6416C32.8262 11.9161 33.7559 10.7743 34.1992 9.42928C33.0316 10.1059 31.7538 10.5821 30.4213 10.8373C29.5251 9.90385 28.3382 9.28515 27.0448 9.07724C25.7513 8.86934 24.4237 9.08387 23.268 9.68753C22.1123 10.2912 21.1932 11.2502 20.6535 12.4157C20.1137 13.5811 19.9834 14.8879 20.2829 16.133C17.9171 16.0171 15.6028 15.4172 13.49 14.3722C11.3773 13.3272 9.51336 11.8605 8.01925 10.0673C7.50837 10.927 7.21461 11.9238 7.21461 12.9855C7.21404 13.9412 7.45528 14.8822 7.91692 15.7252C8.37855 16.5681 9.04632 17.2868 9.86096 17.8176C8.91619 17.7883 7.99226 17.5392 7.16608 17.0912V17.1659C7.16598 18.5063 7.64124 19.8055 8.5112 20.843C9.38116 21.8804 10.5922 22.5923 11.939 22.8578C11.0625 23.0892 10.1437 23.1233 9.25174 22.9575C9.6317 24.1109 10.3718 25.1194 11.3685 25.842C12.3652 26.5646 13.5686 26.965 14.8101 26.9872C12.7025 28.6013 10.0997 29.4769 7.42024 29.473C6.94561 29.4732 6.47138 29.4461 6 29.392C8.71976 31.0981 11.8858 32.0035 15.1192 32C26.0647 32 32.0484 23.1556 32.0484 15.485C32.0484 15.2358 32.042 14.9841 32.0305 14.7349C33.1944 13.9137 34.1991 12.8969 34.9974 11.732L35 11.7282Z"
                                    fill="#252525"
                                />
                            </svg>
                        </a>

                        <a href="https://linkedin.com/company/genztechies" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.5236 0.517578H1.47639C1.08483 0.517578 0.709301 0.673126 0.432425 0.950003C0.155548 1.22688 0 1.6024 0 1.99397V19.0412C0 19.4328 0.155548 19.8083 0.432425 20.0852C0.709301 20.362 1.08483 20.5176 1.47639 20.5176H18.5236C18.9152 20.5176 19.2907 20.362 19.5676 20.0852C19.8445 19.8083 20 19.4328 20 19.0412V1.99397C20 1.6024 19.8445 1.22688 19.5676 0.950003C19.2907 0.673126 18.9152 0.517578 18.5236 0.517578ZM5.96111 17.5551H2.95417V8.00369H5.96111V17.5551ZM4.45556 6.68008C4.11447 6.67816 3.7816 6.57524 3.49895 6.38432C3.21629 6.19339 2.99653 5.92302 2.8674 5.60732C2.73826 5.29162 2.70554 4.94474 2.77336 4.61046C2.84118 4.27618 3.0065 3.96948 3.24846 3.72906C3.49042 3.48865 3.79818 3.3253 4.13289 3.25963C4.4676 3.19396 4.81426 3.22891 5.12913 3.36007C5.44399 3.49123 5.71295 3.71272 5.90205 3.99659C6.09116 4.28046 6.19194 4.61399 6.19167 4.95508C6.19488 5.18344 6.15209 5.41011 6.06584 5.62158C5.97959 5.83305 5.85165 6.02499 5.68964 6.18597C5.52763 6.34694 5.33487 6.47365 5.12285 6.55854C4.91083 6.64343 4.68389 6.68476 4.45556 6.68008ZM17.0444 17.5634H14.0389V12.3454C14.0389 10.8065 13.3847 10.3315 12.5403 10.3315C11.6486 10.3315 10.7736 11.0037 10.7736 12.3842V17.5634H7.76667V8.01063H10.6583V9.33425H10.6972C10.9875 8.74675 12.0042 7.74258 13.5556 7.74258C15.2333 7.74258 17.0458 8.73841 17.0458 11.6551L17.0444 17.5634Z"
                                    fill="#252525"
                                />
                            </svg>
                        </a>

                        <a href="https://instagram.com/genztechies" target="_blank" rel="noopener noreferrer">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="none" />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M14.7589 9.069C15.9852 9.01255 16.3762 9 19.5 9C22.6238 9 23.0148 9.01359 24.2401 9.069C25.4654 9.12441 26.3017 9.31991 27.0335 9.60323C27.7999 9.89282 28.4951 10.3455 29.0701 10.931C29.6555 11.5049 30.1072 12.1991 30.3957 12.9665C30.6801 13.6983 30.8745 14.5346 30.931 15.7578C30.9875 16.9862 31 17.3772 31 20.5C31 23.6238 30.9864 24.0148 30.931 25.2411C30.8756 26.4643 30.6801 27.3007 30.3957 28.0325C30.1072 28.8 29.6548 29.4953 29.0701 30.0701C28.4951 30.6555 27.7999 31.1072 27.0335 31.3957C26.3017 31.6801 25.4654 31.8745 24.2422 31.931C23.0148 31.9875 22.6238 32 19.5 32C16.3762 32 15.9852 31.9864 14.7589 31.931C13.5357 31.8756 12.6993 31.6801 11.9675 31.3957C11.2001 31.1071 10.5047 30.6548 9.92991 30.0701C9.34485 29.4958 8.8921 28.8008 8.60323 28.0335C8.31991 27.3017 8.12545 26.4654 8.069 25.2422C8.01255 24.0138 8 23.6228 8 20.5C8 17.3762 8.01359 16.9852 8.069 15.7599C8.12441 14.5346 8.31991 13.6983 8.60323 12.9665C8.89253 12.1992 9.34562 11.5042 9.93095 10.9299C10.505 10.345 11.1996 9.89224 11.9665 9.60323C12.6983 9.31991 13.5346 9.12545 14.7578 9.069H14.7589ZM24.147 11.139C22.9343 11.0836 22.5705 11.0721 19.5 11.0721C16.4295 11.0721 16.0657 11.0836 14.853 11.139C13.7312 11.1902 13.1227 11.3774 12.7171 11.5352C12.1808 11.7443 11.7971 11.9921 11.3946 12.3946C11.013 12.7658 10.7194 13.2177 10.5352 13.7171C10.3774 14.1227 10.1902 14.7312 10.139 15.853C10.0836 17.0657 10.0721 17.4295 10.0721 20.5C10.0721 23.5705 10.0836 23.9343 10.139 25.147C10.1902 26.2688 10.3774 26.8773 10.5352 27.2829C10.7192 27.7816 11.013 28.2343 11.3946 28.6054C11.7657 28.987 12.2184 29.2808 12.7171 29.4648C13.1227 29.6226 13.7312 29.8098 14.853 29.861C16.0657 29.9164 16.4285 29.9279 19.5 29.9279C22.5715 29.9279 22.9343 29.9164 24.147 29.861C25.2688 29.8098 25.8773 29.6226 26.2829 29.4648C26.8192 29.2557 27.2029 29.0079 27.6054 28.6054C27.987 28.2343 28.2808 27.7816 28.4648 27.2829C28.6226 26.8773 28.8098 26.2688 28.861 25.147C28.9164 23.9343 28.9279 23.5705 28.9279 20.5C28.9279 17.4295 28.9164 17.0657 28.861 15.853C28.8098 14.7312 28.6226 14.1227 28.4648 13.7171C28.2557 13.1808 28.0079 12.7971 27.6054 12.3946C27.2342 12.0131 26.7823 11.7194 26.2829 11.5352C25.8773 11.3774 25.2688 11.1902 24.147 11.139ZM18.0311 24.0451C18.8515 24.3866 19.7649 24.4327 20.6154 24.1755C21.466 23.9184 22.2008 23.3739 22.6945 22.6351C23.1882 21.8963 23.4101 21.009 23.3222 20.1248C23.2344 19.2406 22.8423 18.4143 22.213 17.787C21.8117 17.3861 21.3266 17.0791 20.7925 16.8881C20.2584 16.6971 19.6886 16.627 19.1242 16.6826C18.5597 16.7383 18.0146 16.9185 17.5281 17.2101C17.0416 17.5017 16.6258 17.8976 16.3106 18.3692C15.9955 18.8408 15.7888 19.3764 15.7055 19.9375C15.6222 20.4986 15.6644 21.0711 15.8289 21.6139C15.9935 22.1568 16.2763 22.6564 16.6571 23.0768C17.0379 23.4971 17.5072 23.8279 18.0311 24.0451ZM15.3203 16.3203C15.8692 15.7714 16.5208 15.336 17.2379 15.0389C17.9551 14.7419 18.7238 14.589 19.5 14.589C20.2762 14.589 21.0449 14.7419 21.7621 15.0389C22.4792 15.336 23.1308 15.7714 23.6797 16.3203C24.2286 16.8692 24.664 17.5208 24.9611 18.2379C25.2581 18.9551 25.411 19.7238 25.411 20.5C25.411 21.2762 25.2581 22.0449 24.9611 22.7621C24.664 23.4792 24.2286 24.1308 23.6797 24.6797C22.5712 25.7883 21.0677 26.411 19.5 26.411C17.9323 26.411 16.4288 25.7883 15.3203 24.6797C14.2117 23.5712 13.589 22.0677 13.589 20.5C13.589 18.9323 14.2117 17.4288 15.3203 16.3203ZM26.722 15.4693C26.858 15.341 26.9669 15.1867 27.0422 15.0155C27.1175 14.8444 27.1578 14.6598 27.1605 14.4729C27.1632 14.2859 27.1284 14.1003 27.0581 13.927C26.9878 13.7538 26.8835 13.5964 26.7512 13.4641C26.619 13.3319 26.4616 13.2276 26.2883 13.1573C26.1151 13.087 25.9294 13.0522 25.7425 13.0549C25.5555 13.0576 25.371 13.0978 25.1998 13.1731C25.0287 13.2485 24.8744 13.3573 24.7461 13.4934C24.4966 13.7579 24.3599 14.1093 24.3652 14.4729C24.3705 14.8365 24.5173 15.1837 24.7745 15.4409C25.0316 15.698 25.3789 15.8448 25.7425 15.8501C26.1061 15.8554 26.4575 15.7188 26.722 15.4693Z"
                                    fill="#252525"
                                />
                            </svg>
                        </a>

                        <a href="http://github.com/genztechies" target="_blank" rel="noopener noreferrer">
                            <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx={20} cy={20} r={20} fill="none" />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19.5 8C13.1462 8 8 13.2764 8 19.7909C8 25.0083 11.2919 29.4152 15.8631 30.9775C16.4381 31.0806 16.6537 30.7269 16.6537 30.4174C16.6537 30.1374 16.6394 29.2088 16.6394 28.2214C13.75 28.7667 13.0025 27.4992 12.7725 26.8359C12.6431 26.4969 12.0825 25.4505 11.5938 25.1705C11.1912 24.9494 10.6162 24.4041 11.5794 24.3893C12.485 24.3746 13.1319 25.2442 13.3475 25.5979C14.3825 27.3813 16.0356 26.8801 16.6969 26.5706C16.7975 25.8042 17.0994 25.2884 17.43 24.9936C14.8713 24.6988 12.1975 23.6819 12.1975 19.1719C12.1975 17.8896 12.6431 16.8284 13.3762 16.0031C13.2613 15.7083 12.8587 14.4997 13.4913 12.8785C13.4913 12.8785 14.4544 12.569 16.6537 14.087C17.5737 13.8217 18.5512 13.6891 19.5287 13.6891C20.5062 13.6891 21.4837 13.8217 22.4037 14.087C24.6031 12.5542 25.5662 12.8785 25.5662 12.8785C26.1987 14.4997 25.7963 15.7083 25.6812 16.0031C26.4144 16.8284 26.86 17.8749 26.86 19.1719C26.86 23.6966 24.1719 24.6988 21.6131 24.9936C22.03 25.3621 22.3894 26.0695 22.3894 27.1749C22.3894 28.7519 22.375 30.0195 22.375 30.4174C22.375 30.7269 22.5906 31.0954 23.1656 30.9775C25.4485 30.1872 27.4323 28.6829 28.8377 26.6761C30.2431 24.6694 30.9993 22.2613 31 19.7909C31 13.2764 25.8538 8 19.5 8Z"
                                    fill="#252525"
                                />
                            </svg>
                        </a>
                    </div>

                    <p className="flex justify-center w-full border-t-2 pt-10">
                        &copy; Hosted by&nbsp;
                        <a href="https://genztechies.com" target="_blank" rel="noopener noreferrer" className="underline">
                            GenZTechies
                        </a>
                        &nbsp;2022
                    </p>
                </footer>
            </main>
        </>
    );
};

export default Home;
