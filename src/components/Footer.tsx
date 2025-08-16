import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { LocationOn, CallEndSharp, Email, LinkedIn, GitHub, Person } from "@mui/icons-material";
import { initialBranches } from "../features/slices/branchesSlice";
import { Link as RouterLink } from 'react-router-dom';

const partners = [
    {
        name: 'Prozis',
        officialSite: 'https://www.prozis.com',
        img: 'https://images.seeklogo.com/logo-png/55/1/prozis-logo-png_seeklogo-555496.png',
    },
    {
        name: 'Tatami Fightwear',
        officialSite: 'https://www.tatamifightwear.com',
        img: 'https://fightco.co.uk/cdn/shop/collections/Tatami-Fightwear-Fight-Co-1656106566_edd9e83d-0234-40f3-8578-4362b51d4d8d.jpg?v=1710383539&width=1296',
    },
    {
        name: 'RDX Sports',
        officialSite: 'https://rdxsports.com',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XLhZOIt9mm1upvvzaTvKPCBs6W7lgPkTFAg1xgcZRDYlGgcnTwXW3w6QzakMn3IrYPA&usqp=CAU',
    },
]

export default function Footer() {
    return <Box component='footer' className= 'py-5 md:py-8 px-7'>
            <Box component='section'
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: {
                        xs: 'column',
                        md: 'row'
                    },
                    gap: 4
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: {
                            xs: 'center',
                            md: 'flex-start'
                        },
                        justifyContent: {
                            xs: 'center',
                            md: 'flex-start'
                        },
                    }}
                >
                    <Typography
                        id="branches"
                        component='h3'
                        fontSize={27}
                        fontWeight={900}
                        mb={2}
                        className="w-fit my-0 mx-auto border-b-2 border-[var(--color-primary)]"
                    >
                        Our Branches
                    </Typography>
                    <Stack component='ul'
                        sx={{
                            listStyle: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: {
                                xs: 'center',
                                md: 'flex-start'
                            },
                            alignItems: {
                                xs: 'center',
                                md: 'flex-start'
                            },
                            gap: 1,
                        }}
                    >
                        {initialBranches.map((branch, index) => (
                            <Link
                                component={RouterLink}
                                to={`/branches/${encodeURIComponent(branch.name)}`}
                                className="flex justify-between md:text-left"
                                key={index} 
                                rel="noopener noreferrer"
                            >
                                <LocationOn color={'primary'} fontSize={'medium'} />
                                <Typography sx={{paddingLeft: 1}}>{branch.name}</Typography>
                            </Link>
                        ))}
                        <Typography
                            component='h3'
                            fontSize={27}
                            fontWeight={900}
                            mb={2}
                            className="w-fit mt-1 mx-auto border-b-2 border-[var(--color-primary)]"
                        >
                            Official Contacts
                        </Typography>
                        <li>
                            <CallEndSharp color={'primary'} fontSize={'medium'} />
                            <Link href="tel:+201010434465" sx={{ textDecoration: 'none' }} className="pl-2">+201010434465</Link>
                        </li>
                        <li>
                            <Email color={'primary'} fontSize={'medium'} />
                            <Link href="mailto:titan@mma.org" sx={{ textDecoration: 'none' }} className="pl-2">titan@mma.org</Link>
                        </li>
                    </Stack>
                </Box>

                <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: {
                            xs: 'center'
                        },
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 1,
                    }}
                >
                    <Typography
                        className="border-b-2 border-[var(--color-primary)]"
                        component='h3'
                        fontSize={27}
                        fontWeight={900}
                        mb={2}
                    >
                        Our Partners
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: 2,
                        }}
                    >
                        {partners.map((p, index) => {
                            return <Link href={p.officialSite} key={index} target="_blank" title={p.name}>
                                    <Box component='img'
                                        src={p.img}
                                        sx={{
                                            width: {xs: 120, md: 180},
                                            height: {xs: 130, md: 190},
                                            borderRadius: '10px',
                                            transition: 'all 0.3s ease-in-out',
                                            '&:hover': {
                                                transform: 'scale(1.1)',
                                                opacity: 0.9
                                            }
                                        }}
                                        alt='Partner Image'
                                    />
                                </Link>
                        })}
                    </Box>
                </Box>
            </Box>

            {/* Bottom section */}
            <Box component='section' className="bg-gradient-to-r from-gray-900 to-gray-800 py-8 px-4">
                {/* Main Content */}
                <Box className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Copyright Text */}
                    <Typography component='p' className="text-center text-gray-400 text-sm md:text-base">
                        Copyright © {new Date().getFullYear()} TitanMMAGym. All Rights Reserved.
                    </Typography>

                    {/* Built By Section */}
                    <Box className="flex items-center gap-3">
                        <Typography component='p' className="text-sm md:text-base">
                            Built By:
                        </Typography>
                        <Box className="flex items-center gap-4 overflow-hidden">
                            <div className="relative inline-block">
                                <Typography
                                        component="span"
                                        className="font-medium hover:text-blue-400 transition-colors duration-300 underline underline-offset-4 decoration-blue-400"
                                    >
                                    Abdallah_Aziz
                                </Typography>

                                {/* Stars */}
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className="star"
                                        style={{
                                            top: `${Math.random() * 30 - 10}px`,
                                            left: `${Math.random() * 150}px`,
                                            animationDelay: `${Math.random() * 2}s`
                                        }}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <Box className="flex gap-3 *:relative *:inline-block">
                                <Link
                                    href="https://linkedin.com/in/abdallah-aziz-999b54295" 
                                    target="_blank"
                                    title="Developer's LinkedIn Account"
                                    rel="noopener noreferrer"
                                    className="transition-transform duration-300 transform hover:scale-110"
                                    aria-label="LinkedIn Profile"
                                >
                                    <LinkedIn className="w-5 h-5" />
                                    {/* Stars */}
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className="star"
                                            style={{
                                                top: `${Math.random() * 30 - 10}px`,
                                                left: `${Math.random() * 150}px`,
                                                animationDelay: `${Math.random() * 2}s`
                                            }}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </Link>
                                <Link
                                    href="https://github.com/abdullahMohamed13" 
                                    target="_blank"
                                    title="Developer's GitHub Account"
                                    rel="noopener noreferrer"
                                    className="transition-transform duration-300 transform hover:scale-110"
                                    aria-label="GitHub Profile"
                                >
                                    <GitHub className="w-5 h-5" />
                                    {/* Stars */}
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className="star"
                                            style={{
                                                top: `${Math.random() * 30 - 10}px`,
                                                left: `${Math.random() * 150}px`,
                                                animationDelay: `${Math.random() * 2}s`
                                            }}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </Link>
                                <Link
                                    href="https://abdallah-aziz.vercel.app/" 
                                    target="_blank"
                                    title="Developer's Portfolio Website"
                                    rel="noopener noreferrer"
                                    className="transition-transform duration-300 transform hover:scale-110"
                                    aria-label="Portfolio Website"
                                >
                                    <Person className="w-5 h-5" />
                                    {/* Stars */}
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className="star"
                                            style={{
                                                top: `${Math.random() * 30 - 10}px`,
                                                left: `${Math.random() * 150}px`,
                                                animationDelay: `${Math.random() * 2}s`
                                            }}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <div className="mt-6 pt-6 flex flex-wrap justify-center gap-4 md:gap-8">
                    <a className="text-gray-400 text-sm transition-colors">Terms of Service</a>
                    <a className="text-gray-400 text-sm transition-colors">Privacy Policy</a>
                    <a className="text-gray-400 text-sm transition-colors">Contact Us</a>
                </div>
            </Box>
        </Box>
}
