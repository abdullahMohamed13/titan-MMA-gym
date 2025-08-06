import {createSlice} from '@reduxjs/toolkit'

interface ClassesProps {
    name: string
    description: string
    imgSrc: string
    coach: string
    coachUrl: string
    classUrl: string
    price: number
    cardBgColor: string
    level: string
    targetAudience: string[]
}

const initialState: {initialClasses: ClassesProps[]} = {
    initialClasses: [
    {
        name: 'MMA Fundamentals',
        description: 'Master the building blocks of Mixed Martial Arts! This beginner-friendly class covers striking, wrestling, and submission basics. Perfect for anyone starting their MMA journey or looking to sharpen their all-around skills.',
        coach: 'Javier Mendez - MMA Head Coach',
        classUrl: '',
        coachUrl: '/coaches/Javier Mendez',
        price: 50,
        imgSrc: '/images/routines/fundamentals.webp',
        cardBgColor: '#e20000',
        level: 'A',
        targetAudience: ['Beginners', 'hobbyists', 'anyone new to MMA']
    },
    {
        name: 'Striking',
        description: 'Learn how to strike with power, speed, and precision. Our striking classes blend Muay Thai, Kickboxing, and Boxing to help you dominate in the stand-up game, whether for self-defense, fitness, or competition.',
        coach: 'Mike Winkeljohn',
        classUrl: '',
        coachUrl: '/coaches/Mike Winkeljohn',
        price: 130,
        imgSrc: 'images/routines/striking.webp',
        cardBgColor: '#1e40af',
        level: 'A',
        targetAudience: ['self-defense learners', 'cardio lovers']
    },
    {
        name: 'Wrestling',
        description: 'Control the fight with world-class takedowns, clinch work, and ground control techniques. Wrestling is the backbone of MMA — give yourself the competitive edge.',
        coach: 'Khabib Nurmagomedov',
        classUrl: '',
        coachUrl: '/coaches/Khabib Nurmagomedov',
        price: 200,
        imgSrc: '/images/brand-logo.webp',
        cardBgColor: '#059669',
        level: 'C',
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
        imgSrc: '/images/routines/bjj.webp',
        cardBgColor: '#7c3aed',
        level: 'C',
        targetAudience: ['Ground game enthusiasts', 'people interested in belt ranking']
    },
    {
        name: 'Muay Thai',
        description: "Develop devastating kicks, elbows, knees, and punches in a high-energy class that pushes your cardio and power to the max. Muay Thai is known as the 'Art of 8 Limbs' — we'll teach you how to use all of them",
        coach: 'Demetrious Johnson',
        classUrl: '',
        coachUrl: '/coaches/Demetrious Johnson',
        price: 80,
        imgSrc: '/images/brand-logo.webp',
        cardBgColor: '#dc2626',
        level: 'B',
        targetAudience: ['Fitness-focused members', 'fighters', "women's self-defense seekers"]
    },
    ]
}

const classesSlice = createSlice({
    name: 'classes',
    initialState,
    reducers:{}
})

export const { initialClasses } = classesSlice.getInitialState()
export default classesSlice.reducer;
