import { createSlice } from "@reduxjs/toolkit";
import { initialCoaches } from "./coachesSlice";

interface BranchProps {
    id: number
    name: string
    address: string
    workingHours: string
    phone: string
    email: string
    img: string
    coach: {
        coachName: string,
        coachUrl: string,
        coachImg: string,
    }
    region: string
    countryImg: string
}

const initialState: {initialBranches: BranchProps[]} = {
    initialBranches: [
        {
            id: 1,
            name: 'Alexandria',
            address: '45 Al-Salam Street, Alexandria, Egypt',
            workingHours: '9:00 AM - 8:00 PM',
            phone: '+201008767860',
            email: 'titan@mmaalexandria.com',
            img: '/images/branches/alexendria.webp',
            coach: {
                    coachName: initialCoaches.find((coach) => coach.name === 'Javier Mendez')!.name,
                    coachUrl: `/coaches/${initialCoaches.find((coach) => coach.name === 'Javier Mendez')!.name}`,
                    coachImg: initialCoaches.find((coach) => coach.name === 'Javier Mendez')!.img,
                },
            region: 'Alexandria',
            countryImg: '/images/fighters/flags/egypt.png',
        },
        {
            id: 2,
            name: 'Giza',
            address: '78 El-Maadi Road, Giza, Egypt',
            workingHours: '9:00 AM - 8:00 PM',
            phone: '+21093848307',
            email: 'titan@mmagiza.com',
            img: '/images/branches/giza.webp',
            coach: {
                    coachName: initialCoaches.find((coach) => coach.name === 'Mike Winkeljohn')!.name,
                    coachUrl: `/coaches/${initialCoaches.find((coach) => coach.name === 'Mike Winkeljohn')!.name}`,
                    coachImg: initialCoaches.find((coach) => coach.name === 'Mike Winkeljohn')!.img,
                },
            region: 'Giza',
            countryImg: '/images/fighters/flags/egypt.png',
        },
        {
            id: 3,
            name: 'Makhachkala',
            address: '34 Imam Shamil Avenue, Makhachkala, Dagestan',
            workingHours: '8:00 AM - 6:00 PM',
            phone: '+7 8722 555 019',
            email: 'titan@mmarussia.com',
            img: '/images/branches/dagestan.webp',
            coach: {
                    coachName: initialCoaches.find((coach) => coach.name === 'Khabib Nurmagomedov')!.name,
                    coachUrl: `/coaches/${initialCoaches.find((coach) => coach.name === 'Khabib Nurmagomedov')!.name}`,
                    coachImg: initialCoaches.find((coach) => coach.name === 'Khabib Nurmagomedov')!.img,
                },
            region: 'Makhachkala',
            countryImg: '/images/fighters/flags/russia.webp',
        },
        {
            id: 4,
            name: 'Houston',
            address: '2211 Westheimer Rd, Houston, Texas',
            workingHours: '12:00 AM - 10:00 PM',
            phone: '+1 281-555-7842',
            email: 'titan@mmausa.com',
            img: '/images/branches/texas.webp',
            coach: {
                    coachName: initialCoaches.find((coach) => coach.name === 'Demetrious Johnson')!.name,
                    coachUrl: `/coaches/${initialCoaches.find((coach) => coach.name === 'Demetrious Johnson')!.name}`,
                    coachImg: initialCoaches.find((coach) => coach.name === 'Demetrious Johnson')!.img,
                },
            region: 'Texas',
            countryImg: '/images/fighters/flags/us.webp',
        },
        {
            id: 5,
            name: 'Cape Town',
            address: '88 Bree Street, Cape Town, Western Cape',
            workingHours: '7:00 AM - 7:00 PM',
            phone: '+27 21 555 3298',
            email: 'titan@mmafrica.com',
            img: '/images/branches/south-africa.webp',
            coach: {
                    coachName: initialCoaches.find((coach) => coach.name === 'Rener Gracie')!.name,
                    coachUrl: `/coaches/${initialCoaches.find((coach) => coach.name === 'Rener Gracie')!.name}`,
                    coachImg: initialCoaches.find((coach) => coach.name === 'Rener Gracie')!.img,
                },
            region: 'Western Cape',
            countryImg: '/images/fighters/flags/south-africa.webp',
        }
    ]
}

const branchesSlice = createSlice({
    name: 'branches',
    initialState,
    reducers: {}
})

export default branchesSlice.reducer;
export const { initialBranches } = branchesSlice.getInitialState();
