import { createSlice } from "@reduxjs/toolkit";

interface CoachesProps {
    id: number
    name: string
    title: string
    img: string
    description: string
    specials: string[]
    article: string
    gender?: boolean
}

const initialState: {initialCoaches: CoachesProps[]} = {
    initialCoaches: [
        {
            id: 0,
            name: 'Javier Mendez',
            title: 'MMA Head Coach',
            img: '/images/coaches/Javier Mendez.webp',
            description: 'Founder of American Kickboxing Academy (AKA), Mendez has coached multiple UFC champions across multiple weight classes—Khabib Nurmagomedov, Islam Makhachev, Daniel Cormier, Cain Velasquez, and Luke Rockhold. In 2015 he became the only coach with three simultaneous UFC champions and in 2022 was awarded “Coach of the Year” alongside Khabib',
            specials: ['MMA Head Coach'],
            article: 'https://en.wikipedia.org/wiki/Javier_Mendez_(mixed_martial_arts_trainer)'
        },
        {
            id: 1,
            name: 'Mike Winkeljohn',
            title: 'Elite Kickboxing Coach',
            img: '/images/coaches/mikee winkeljohn.webp',
            description: 'A veteran striking coach partnered with Greg Jackson at Jackson-Wink, known for developing elite stand-up skills in champions like GSP and Jon Jones. He helped transform that gym into a world-class striking environment',
            specials: ['Boxing', 'Kickboxing', 'Muay Thai'],
            article: 'https://jacksonwink.com/coaches/coach-mike-winkeljohn'
        },
        {
            id: 2,
            name: 'Khabib Nurmagomedov',
            img: '/images/coaches/khabib.webp',
            title: 'Former UFC Lightweight Champion',
            description: 'Since retiring, Khabib inherited his late father’s program and has coached fighters like Islam Makhachev and Usman Nurmagomedov, carrying on a dominant Dagestani wrestling-based system rooted in sambo and freestyle wrestling ',
            specials: ['Wrestling', 'Sambo'],
            article: 'https://en.wikipedia.org/wiki/Khabib_Nurmagomedov'
        },
        {
            id: 3,
            name: 'Kayla Harrison',
            title: 'Olympic Judo gold medalist',
            img: '/images/coaches/Kayla Harrison.webp',
            description: "Master the art of throws, trips, and clinch control with techniques that work in both traditional Judo and MMA. Learn how to off-balance opponents, execute powerful throws, and dominate in close-range situations, just like two-time Olympic gold medalist Kayla Harrison.",
            specials: ['Judo', 'MMA'],
            article: 'https://en.wikipedia.org/wiki/Kayla_Harrison',
            gender: false,
        },
        {
            id: 4,
            name: 'Rener Gracie',
            title: 'BJJ Black Belt',
            img: '/images/coaches/rener_main.jpg',
            description: 'Fifth-degree BJJ black belt from the legendary Gracie family, coach to Ronda Rousey, Brian Ortega, Lyoto Machida, plus celebrity clients. Founder of Gracie University and Gracie Survival Tactics program recognized in law enforcement training',
            specials: ['BJJ', 'Ground Game'],
            article: 'https://en.wikipedia.org/wiki/Rener_Gracie'
        },
        {
            id: 5,
            name: 'Demetrious Johnson',
            title: 'Former UFC Flyweight Champion',
            img: '/images/coaches/mighty-mouse.avif',
            description: 'Demetrious Johnson was the first UFC Flyweight Champion, holding the belt from 2012 to 2018. During his reign, he made 11 consecutive successful title defenses. His philosophy focuses on developing well-rounded athletes who can think two steps ahead, control every phase of a fight, and perform with the discipline and composure of a true professional.',
            specials: ['BJJ', 'Wrestling', 'Muay Thai'],
            article: 'https://en.wikipedia.org/wiki/Demetrious_Johnson'
        },
    ]
}

const coachesSlice = createSlice({
    name: 'coaches',
    initialState,
    reducers: {}
})

export default coachesSlice.reducer;
export const { initialCoaches } = coachesSlice.getInitialState();
