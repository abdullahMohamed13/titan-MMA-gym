import { createSlice } from "@reduxjs/toolkit";

interface CoachesProps {
    id: number
    name: string
    age: number
    title: string
    img: string
    description: string
    specials: string[]
    article: string
    gallery: string[]
}

const initialState: {initialCoaches: CoachesProps[]} = {
    initialCoaches: [
        {
            id: 0,
            name: 'Javier Mendez',
            age: 54,
            title: 'MMA Head Coach',
            img: '/images/coaches/javier/Javier Mendez.webp',
            description: 'Founder of American Kickboxing Academy (AKA), Mendez has coached multiple UFC champions across multiple weight classes—Khabib Nurmagomedov, Islam Makhachev, Daniel Cormier, Cain Velasquez, and Luke Rockhold. In 2015 he became the only coach with three simultaneous UFC champions and in 2022 was awarded “Coach of the Year” alongside Khabib',
            specials: ['MMA Head Coach'],
            article: 'https://en.wikipedia.org/wiki/Javier_Mendez_(mixed_martial_arts_trainer)',
            gallery: ['/images/coaches/javier/3.webp', '/images/coaches/javier/1.webp', '/images/coaches/javier/2.jpg'],
        },
        {
            id: 1,
            name: 'Mike Winkeljohn',
            age: 59,
            title: 'Elite Kickboxing Coach',
            img: '/images/coaches/mike/mikee winkeljohn.webp',
            description: 'A veteran striking coach partnered with Greg Jackson at Jackson-Wink, known for developing elite stand-up skills in champions like GSP and Jon Jones. He helped transform that gym into a world-class striking environment',
            specials: ['Boxing', 'Kickboxing', 'Muay Thai'],
            article: 'https://jacksonwink.com/coaches/coach-mike-winkeljohn',
            gallery: ['/images/coaches/mike/3.jpeg', '/images/coaches/mike/2.webp', '/images/coaches/mike/1.webp'],
        },
        {
            id: 2,
            name: 'Khabib Nurmagomedov',
            age: 36,
            img: '/images/coaches/khabib/khabib.webp',
            title: 'Former UFC Lightweight Champion',
            description: 'Since retiring, Khabib inherited his late father’s program and has coached fighters like Islam Makhachev and Usman Nurmagomedov, carrying on a dominant Dagestani wrestling-based system rooted in sambo and freestyle wrestling ',
            specials: ['Wrestling', 'Sambo'],
            article: 'https://en.wikipedia.org/wiki/Khabib_Nurmagomedov',
            gallery: ['/images/coaches/khabib/1.avif', '/images/coaches/khabib/3.webp', '/images/coaches/khabib/2.jpg'],
        },
        {
            id: 3,
            name: 'Daniel Cormier',
            age: 45,
            img: '/images/coaches/dc/dc.webp',
            title: 'Former UFC Light Heavyweight & Heavyweight Champion',
            description: "Daniel Cormier is a retired American mixed martial artist and former Olympic wrestler, widely regarded as one of the greatest fighters in UFC history. Known for his dominant wrestling, powerful clinch work, and high fight IQ, Cormier became a two-division champion, holding both the UFC Light Heavyweight and Heavyweight titles. Beyond his fighting career, he is a respected coach, commentator, and mentor to upcoming fighters.",
            specials: [ 'MMA', 'Wrestling', 'Grappling' ],
            article: 'https://en.wikipedia.org/wiki/Daniel_Cormier',
            gallery: [ '/images/coaches/dc/1.webp', '/images/coaches/dc/2.webp', '/images/coaches/dc/3.webp' ],
        },
        {
            id: 4,
            name: 'Rener Gracie',
            age: 41,
            title: 'BJJ Black Belt',
            img: '/images/coaches/rener/rener_main.jpg',
            description: 'Fifth-degree BJJ black belt from the legendary Gracie family, coach to Ronda Rousey, Brian Ortega, Lyoto Machida, plus celebrity clients. Founder of Gracie University and Gracie Survival Tactics program recognized in law enforcement training',
            specials: ['BJJ', 'Ground Game'],
            article: 'https://en.wikipedia.org/wiki/Rener_Gracie',
            gallery: ['/images/coaches/rener/1.jpg', '/images/coaches/rener/2.webp', '/images/coaches/rener/3.jpeg'],
        },
        {
            id: 5,
            name: 'Demetrious Johnson',
            age: 38,
            title: 'Former UFC Flyweight Champion',
            img: '/images/coaches/dj/mighty-mouse.avif',
            description: 'Demetrious Johnson was the first UFC Flyweight Champion, holding the belt from 2012 to 2018. During his reign, he made 11 consecutive successful title defenses. His philosophy focuses on developing well-rounded athletes who can think two steps ahead, control every phase of a fight, and perform with the discipline and composure of a true professional.',
            specials: ['BJJ', 'Wrestling', 'Muay Thai'],
            article: 'https://en.wikipedia.org/wiki/Demetrious_Johnson',
            gallery: ['/images/coaches/dj/1.webp', '/images/coaches/dj/2.webp', '/images/coaches/dj/3.webp','/images/coaches/dj/4.jpg'],
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
