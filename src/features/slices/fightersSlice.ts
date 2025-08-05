import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface Fighter {
    id: number
    name: string
    title: string
    imgURL?: string
}

axios.get('https://api.octagon-api.com/fighters').then((res) => {
    // console.log(res.data['azamat-murzakanov'])
})

const initialState: { initialFighters: Fighter[] } = {
    initialFighters: [
        {
            id: 1,
            name: 'Ilia Topuria',
            title: 'UFC Lightweight Champion',
        },        
        {
            id: 2,
            name: 'Magamedov Ankalyv',
            title: 'UFC Light Heavyweight Champion',
        },        
        {
            id: 3,
            name: 'Tom Aspinall',
            title: 'UFC Heavyweight Champion',
        },
    ]//  as Fighter[]
    ,

}

export const fightersSlice = createSlice({
    name: 'fighters',
    initialState,
    reducers: {
        readFighter: (state, action) => {
            console.log(state, action);
        }
    }
})

export const { readFighter } = fightersSlice.actions;
export default fightersSlice.reducer;
export const { initialFighters } = fightersSlice.getInitialState();