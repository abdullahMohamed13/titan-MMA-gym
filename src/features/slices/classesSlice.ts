import {createSlice} from '@reduxjs/toolkit'

export interface ClassesProps {
    name: string
    description: string
    imgSrc: string
    coach: {
        coachName: string,
        coachUrl: string,
        coachImg: string,
    }
    price: number
    cardBgColor: string
    level: string
    targetAudience: string[]
    schedule: string
    drillsAndSkills: string[]
}

const initialState: {initialClasses: ClassesProps[]} = {
    initialClasses: [
        {
            name: 'MMA Fundamentals',
            description: 'Master the building blocks of Mixed Martial Arts! This beginner-friendly class covers striking, wrestling, and submission basics. Perfect for anyone starting their MMA journey or looking to sharpen their all-around skills.',
            coach: {
                coachName: 'Javier Mendez - MMA Head Coach',
                coachUrl: '/coaches/Javier Mendez',
                coachImg: '/images/coaches/Javier Mendez.webp'
            },
            price: 49.99,
            imgSrc: '/images/routines/fundamentals.webp',
            cardBgColor: '#e20000',
            level: 'Beginner',
            targetAudience: ['Beginners', 'hobbyists', 'anyone new to MMA'],
            schedule: 'Sunday & Wednesday — 8:00 PM to 10:00 PM',
            drillsAndSkills: [
                "Basic striking stance and footwork",
                "Jab, cross, hook combinations",
                "Takedown defense fundamentals",
                "Basic submissions: armbar, rear-naked choke"
            ]
        },
        {
            name: 'Striking',
            description: 'Learn how to strike with power, speed, and precision. Our striking classes blend Muay Thai, Kickboxing, and Boxing to help you dominate in the stand-up game, whether for self-defense, fitness, or competition.',
            coach: {
                coachName: 'Mike Winkeljohn',
                coachUrl: '/coaches/Mike Winkeljohn',
                coachImg: '/images/coaches/mikee winkeljohn.webp'
            },
            price: 129.99,
            imgSrc: 'images/routines/striking-routine.webp',
            cardBgColor: '#111',
            level: 'Beginner',
            targetAudience: ['self-defense learners', 'cardio lovers'],
            schedule: 'Monday & Thursday — 1:00 PM to 4:30 PM',
            drillsAndSkills: [
                "Striking to takedown transitions",
                "Proper guard and stance for striking",
                "Ground-and-pound positioning",
                "Fight strategy and conditioning drills"
            ]
        },
        {
            name: 'Muay Thai',
            description: "Develop devastating kicks, elbows, knees, and punches in a high-energy class that pushes your cardio and power to the max. Muay Thai is known as the 'Art of 8 Limbs' — we'll teach you how to use all of them",
            coach: {
                coachName: 'Demetrious Johnson',
                coachUrl: '/coaches/Demetrious Johnson',
                coachImg: '/images/coaches/mighty-mouse.avif'
            },
            price: 79.99,
            imgSrc: '/images/routines/muay-thai.jpg',
            cardBgColor: '#e20000',
            level: 'Intermediate',
            targetAudience: ['Fitness-focused members', 'fighters', "women's self-defense seekers"],
            schedule: 'Monday & Wednesday — 6:00 PM to 7:30 PM',
            drillsAndSkills: [
                "Muay Thai stance and footwork",
                "Knee strikes from the clinch",
                "Elbow strike combinations",
                "Defensive blocks and counters"
            ]
        },
        {
            name: 'Wrestling',
            description: 'Control the fight with world-class takedowns, clinch work, and ground control techniques. Wrestling is the backbone of MMA — give yourself the competitive edge.',
            coach: {
                coachName: 'Khabib Nurmagomedov',
                coachUrl: '/coaches/Khabib Nurmagomedov',
                coachImg: '/images/coaches/khabib.webp'
            },
            price: 199.99,
            imgSrc: '/images/routines/wrestling.webp',
            cardBgColor: '#111',
            level: 'Advanced',
            targetAudience: ['Fighters wanting strong takedowns and control',
                'BJJ practitioners wanting better top game'],
            schedule: 'Saturday & Tuesday — 5:00 PM to 8:00 PM',
            drillsAndSkills: [
                "Cage wrestling and wall work",
                "Submission chains and counters",
                "Basic submissions: armbar, rear-naked choke"
                ]
            },
        {
            name: 'BJJ',
            description: 'Win on the ground with our Brazilian Jiu-Jitsu program. Learn submissions, sweeps, and escapes that work in MMA and self-defense. Suitable for all levels, from white belt to black belt',
            coach: {
                coachName: 'Rener Gracie',
                coachUrl: '/coaches/Rener Gracie',
                coachImg: '/images/coaches/rener_main.jpg',
            },
            price: 99.99,
            imgSrc: '/images/routines/bjj2.jpg',
            cardBgColor: '#e20000',
            level: 'Advanced',
            targetAudience: ['Ground game enthusiasts', 'people interested in belt ranking'],
            schedule: 'Sunday & Thursday — 6:30 PM to 9:00 PM',
            drillsAndSkills: [
                "Guard retention and recovery",
                "Hip escapes and shrimping drills",
                "Closed guard sweeps",
                "Positional control: mount, side control, back",
            ]
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
