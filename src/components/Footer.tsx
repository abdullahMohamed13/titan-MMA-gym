import Stack from "./animated/Stack";
import { Divider } from "@mui/material";
import { LocationOn, CallEndSharp, Email, LinkedIn, GitHub, Person } from "@mui/icons-material";

const branches = [
"Eastside – 45 Al-Salam Street, Alexandria, Egypt",
"Westside – 78 El-Maadi Road, Giza, Egypt",
"Moscow – 12 Tverskaya Street, Moscow, Russia",
"Makhachkala – 34 Imam Shamil Avenue, Makhachkala, Dagestan"
]

export default function Footer() {
    return <footer className="py-10">
        <Divider />
        <div className='*:py-2 pl-7 pr-10'>
            <section className="flex items-center justify-between">
                <ul className="list-none flex flex-col gap-2">
                    {branches.map((branch, index) => (
                            <li key={index}>
                                <LocationOn color={'primary'} fontSize={'medium'} />
                                <span className="pl-2">{branch}</span>
                            </li>
                    ))}
                    <li>
                        <CallEndSharp color={'primary'} fontSize={'medium'} />
                        <span className="pl-2">+201010434465</span>
                    </li>
                    <li>
                        <Email color={'primary'} fontSize={'medium'} />
                        <span className="pl-2">titan@bruh.lol</span>
                    </li>
                </ul>

                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-bold pb-2 mb-4 border-b-2 border-red-600">
                        Gallery
                    </h2>
                    <Stack />
                </div>
            </section>
            {/* Bottom section */}
            <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Main Content */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright Text */}
                        <p className="text-gray-400 text-sm md:text-base">
                            Copyright © {new Date().getFullYear()} TitanMMAGym. All Rights Reserved.
                        </p>

                        {/* Built By Section */}
                        <div className="flex items-center gap-3">
                            <span className="text-sm md:text-base">Built By:</span>
                            <div className="flex items-center gap-4">
                                <span 
                                    className="font-medium hover:text-blue-400 transition-colors duration-300 underline underline-offset-4 decoration-blue-400"
                                >
                                    Abdallah_Aziz
                                </span>

                                <div className="flex gap-3">
                                    <a 
                                        href="https://linkedin.com/in/abdallah-aziz-999b54295" 
                                        target="_blank"
                                        title="Developer's GitHub Account"
                                        rel="noopener noreferrer"
                                        className="hover:text-[#0A66C2] transition-all duration-300 transform hover:scale-110"
                                        aria-label="LinkedIn Profile"
                                    >
                                        <LinkedIn className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="https://github.com/abdullahMohamed13" 
                                        target="_blank"
                                        title="Developer's LinkedIn Account"
                                        rel="noopener noreferrer"
                                        className="hover:text-[#0A66C2] transition-all duration-300 transform hover:scale-110"
                                        aria-label="GitHub Profile"
                                    >
                                        <GitHub className="w-5 h-5" />
                                    </a>
                                    <a 
                                        href="https://abdallah-aziz.vercel.app/" 
                                        target="_blank"
                                        title="Developer's Portfolio Website"
                                        rel="noopener noreferrer"
                                        className="hover:text-[#0A66C2] transition-all duration-300 transform hover:scale-110"
                                        aria-label="Portfolio Website"
                                    >
                                        <Person className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-6 flex flex-wrap justify-center gap-4 md:gap-8">
                        <a className="text-gray-400 text-sm transition-colors">Terms of Service</a>
                        <a className="text-gray-400 text-sm transition-colors">Privacy Policy</a>
                        <a className="text-gray-400 text-sm transition-colors">Contact Us</a>
                    </div>
                </div>
            </section>
        </div>
    </footer>
}
