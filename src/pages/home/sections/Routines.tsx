import ScrollStack, { ScrollStackItem } from '../../../components/animated/ScrollStack'
import { Box, Container, Grid, Stack, useMediaQuery } from "@mui/system";
import Item from "@mui/material/Paper";
import { Link } from 'react-router-dom';
import { Chip, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles";

interface RoutinesProps {
    name: string
    description: string
    coach: string
    classUrl: string
    coachUrl: string
    price: number
    imgSrc: string
    cardBgColor: string
    targetAudience: string[]
}

const routines: RoutinesProps[] = [
    {
        name: 'MMA Fundamentals',
        description: 'Master the building blocks of Mixed Martial Arts! This beginner-friendly class covers striking, wrestling, and submission basics. Perfect for anyone starting their MMA journey or looking to sharpen their all-around skills.',
        coach: 'Javier Mendez - MMA Head Coach',
        classUrl: '',
        coachUrl: '/coaches/Javier Mendez',
        price: 50,
        imgSrc: '/images/brand-logo.png',
        cardBgColor: '#e20000',
        targetAudience: ['Beginners', 'hobbyists', 'anyone new to MMA']
    },
    {
        name: 'Striking',
        description: 'Learn how to strike with power, speed, and precision. Our striking classes blend Muay Thai, Kickboxing, and Boxing to help you dominate in the stand-up game, whether for self-defense, fitness, or competition.',
        coach: 'Mike Winkeljohn',
        classUrl: '',
        coachUrl: '/coaches/Mike Winkeljohn',
        price: 130,
        imgSrc: '/images/brand-logo.png',
        cardBgColor: '#1e40af',
        targetAudience: ['self-defense learners', 'cardio lovers']
    },
    {
        name: 'Wrestling',
        description: 'Control the fight with world-class takedowns, clinch work, and ground control techniques. Wrestling is the backbone of MMA — give yourself the competitive edge.',
        coach: 'Khabib Nurmagomedov',
        classUrl: '',
        coachUrl: '/coaches/Khabib Nurmagomedov',
        price: 200,
        imgSrc: '/images/brand-logo.png',
        cardBgColor: '#059669',
        targetAudience: ['Fighters wanting strong takedowns and control',
            'BJJ practitioners wanting better top game']
    },
    {
        name: 'BJJ',
        description: 'Win on the ground with our Brazilian Jiu-Jitsu program. Learn submissions, sweeps, and escapes that work in MMA and self-defense. Suitable for all levels, from white belt to black belt',
        coach: 'Rener Gracie',
        classUrl: '',
        coachUrl: '/coaches/Rener Gracie',
        price: 100,
        imgSrc: '/images/brand-logo.png',
        cardBgColor: '#7c3aed',
        targetAudience: ['Ground game enthusiasts', 'people interested in belt ranking']
    },
    {
        name: 'Muay Thai',
        description: "Develop devastating kicks, elbows, knees, and punches in a high-energy class that pushes your cardio and power to the max. Muay Thai is known as the 'Art of 8 Limbs' — we'll teach you how to use all of them",
        coach: 'Demetrious Johnson',
        classUrl: '',
        coachUrl: '/coaches/Demetrious Johnson',
        price: 80,
        imgSrc: '/images/brand-logo.png',
        cardBgColor: '#dc2626',
        targetAudience: ['Fitness-focused members', 'fighters', "women's self-defense seekers"]
    },
]

export default function Routines() {
    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
    return <Box
              component="section"
              sx={{
                // bgcolor: "background.paper",
                py: { xs: 6, md: 8 },
              }}
            >
                <Container sx={{ py: 4, width: '100%' }}>
                    <Typography
                    variant={isSmUp ? "h3" : "h4"}
                    component="h2"
                    gutterBottom
                    fontWeight={700}
                    sx={{ mb: 4 }}
                    >
                    Our Routines
                    </Typography>
                    <div className="scroll-stack-container" style={{ height: '80vh', marginTop: '0.5rem' }}> {/* 80vh */}
                        <ScrollStack className='text-white'>
                            {routines.map((routine, index) => {
                                return <ScrollStackItem key={index}
                                className="flex justify-between gap-4" style={{ backgroundColor: routine.cardBgColor }}>
                                        <div>
                                            <h2>{routine.name}</h2>
                                            <p>{routine.description}</p>
                                            <a href={routine.coachUrl}>Coach: {routine.coach}</a>
                                            <div className='mr-1'>Target Audience:
                                                {routine.targetAudience.map((ta, index) => {
                                                    return <Chip label={ta} key={index}
                                                    className='m-1' variant="filled" />
                                                })}
                                            </div>
                                            <div className='flex gap-4 items-center'>
                                                <p className='text-xl'>{routine.price}$</p>
                                                <Link to={routine.classUrl}>
                                                    <button
                                                    className="w-full sm:w-auto rounded-lg px-6 py-3 bg-primary hover:bg-white
                                                    hover:text-black font-semibold shadow-lg transition">
                                                    Book A Class
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                        <img src={routine.imgSrc} className='rounded-lg border-2 border-primary'
                                        width={200} height={170} alt={`${routine.name} Routine`} />
                                    </ScrollStackItem>
                            })}
                        </ScrollStack>
                    </div>
                </Container>
            </Box>
}

{/*
            <Grid container spacing={2}>
            <Grid size={4}>
                <Stack spacing={2}>
                    <Item sx={{padding: '5px 10px'}}>Column 1 - Row 1</Item>
                    <Item sx={{padding: '5px 10px'}}>Column 1 - Row 2</Item>
                </Stack>
            </Grid>
            <Grid size={3}>
                <Item sx={{padding: '5px 10px'}}>Column 1 - Row 3</Item>
            </Grid>
            <Grid size={5}>
                <Item sx={{padding: '5px 10px'}}>Column 1 - Row 3</Item>
            </Grid>
            <Grid size={8}>
                <Item sx={{ height: '100%', padding: '5px 10px' }}>Column 2</Item>
            </Grid>
        </Grid>
     */} 