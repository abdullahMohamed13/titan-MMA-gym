import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
// custom components
import { createData } from "../../components/Table";
import CollapsibleTable from '../../components/Table'
import HeaderComponent from "../../components/HeaderComponent";
import PageSkeleton from "../../components/PageSkeleton";
import StyledButton from "../../components/StyledButton";
// MUI Components
import { Container, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

type FighterApi = Record<
  | 'category'
  | 'draws'
  | 'imgUrl'
  | 'losses'
  | 'name'
  | 'nickname'
  | 'wins'
  | 'status'
  | 'placeOfBirth'
  | 'fightingStyle'
  | 'age'
  | 'height'
  | 'weight'
  | 'octagonDebut'
  | 'reach'
  | 'legReach',
  string
>

const fetchFightersData = async (): Promise<FighterApi[]> => {
    const response = await fetch('https://api.octagon-api.com/fighters');

    if (!response.ok) throw new Error('This data is not available no more')
    const rawData = await response.json()

    return Object.values(rawData).slice(0, 10) as FighterApi[];
}

const MotionBox = motion(Box)

export default function Students() {
    document.title = 'Titan MMA - Students';
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false)

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const { data, isLoading, error } = useQuery({
        queryKey: ['fighters'],
        queryFn: fetchFightersData,
    })

    if (isLoading) return <PageSkeleton />
    
    if (error) {
        const prank = (e: any) => {
            const prankBtn = document.querySelector('.prank-button')
            prankBtn!.textContent = 'WHY DO YOU THINK I WORK EITHER?';
            e.preventDefault();
                setTimeout(() => {
                    setVisible(true)
                }, 2500)
        }
        return (
            <Container
                sx={{
                    textAlign: {xs: 'center', md: 'left'},
                    py: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                }}
            >
                <HeaderComponent
                    headingText="SORRRRY :( There is an Error Loading Student's Data"
                    subHeadingText="Something went wrong while fetching fighter data"
                    subHeadingClassName="mb-2"
                />
                <Typography
                    variant="h6"
                    sx={{
                        color: '#b0b0b0',
                        mx: 'auto',
                    }}
                >
                    Oh🙄, so it's not our fault😇.
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        color: '#b0b0b0',
                        mx: 'auto',
                    }}
                >
                    Ahh.. maybe take a look to another pages, Ah.. like this one 😁👇, this one works.
                </Typography>
                <StyledButton className="prank-button"
                    text='Home'
                    onClick={prank}
                />
                <StyledButton text="Hey, I will take care of you 🗿" sx={{display: visible ? 'block' : 'none'}} href="/" />
            </Container>
        );
    }

    let fightersArray: FighterApi[] = []

    if (data) {
        if (Array.isArray(data)) {
            // If data is directly an array
            fightersArray = data;
        }
    }

    const transformedData = fightersArray.map((fighter: FighterApi) =>
        createData({
            name: fighter?.name || 'Unknown',
            img: fighter?.imgUrl || '',
            age: fighter?.age || 'Unknown',
            category: fighter?.category || 'Unknown',
            placeOfBirth: fighter?.placeOfBirth || 'Unknown',
            details: {
                status: fighter.status,
                nickname: fighter?.nickname,
                height: fighter?.height,
                weight: fighter?.weight,
                octagonDebut: fighter?.octagonDebut,
                reach: fighter?.reach,
                record: {
                    wins: fighter?.wins,
                    draws: fighter?.draws,
                    loses: fighter?.losses,
                }
            }
        })
    )
    
    return <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
                sx={{
                    pt: 6,
                    pb: 3,
                    minHeight: '100vh',
                    background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Background Elements */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className={`absolute top-20 left-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl transition-all duration-2000 ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
                    <div className={`absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl transition-all duration-2000 delay-500 ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
                </div>
                <Container>
                    {/* Page's Header */}
                    <HeaderComponent
                        headingText={
                            <span className="flex justify-center text-center items-center flex-wrap">
                                OUR <a href="https://www.ufc.com/" target="_blank" aria-label="UFC Website/Logo">
                                        <img title="Go to UFC site" src="/images/ufc-logo.webp" alt="UFC Logo" className="pr-1 pl-1.5" width={110} height={110} />
                                    </a>
                                STUDENTS
                            </span>}
                        subHeadingText="Meet the rising stars of Titan MMA. Know our fighters stats, backgrounds, and career highlights"
                    />

                    {/* Data Table */}
                    <CollapsibleTable rows={transformedData} />

                    {/* CTA Section */}
                    <Box
                        mt={2}
                        sx={{
                        display: 'flex',
                        justifyContent: 'center',}}
                    >
                        <StyledButton text="CHECK OUR CLASSES & JOIN THEM NOW" href="/classes" />
                    </Box>
                </Container>
        </MotionBox>
}
