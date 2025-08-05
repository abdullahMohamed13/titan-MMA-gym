import { createSlice } from '@reduxjs/toolkit'

export interface ProductProps {
    id?: number
    title: string
    description: string
    price: number
    img: string
    discount?: number
    rating: number
    sizes: string[]
    onAddToCart?: () => void;
    href?: string;
}

const initialState: { initialProducts: ProductProps[] } = {
    initialProducts: [
        {
            id: 0,
            title: 'Regular Gloves',
            description: 'MMA Gloves, does the minimum job',
            price: 20,
            img: 'images/products/gloves.jpg',
            discount: 10,
            rating: 4,
            sizes: ['XS', 'S'],
        },
        {
            id: 1,
            title: 'Titan Gloves',
            description: 'MMA Gloves, supreme gloves, kill your opponent with one head shot',
            price: 35,
            img: 'images/products/titan-gloves-red.png',
            rating: 5,
            sizes: ['All Sizes Available'],
        },
        {
            id: 2,
            title: 'Gloves',
            description: 'MMA Gloves, impress your girlfriend with it',
            price: 200,
            img: 'images/products/titan-gloves-green.png',
            discount: 50,
            rating: 4,
            sizes: ['All Sizes Available'],
        },
        {
            id: 3,
            title: 'Gloves',
            description: 'Titan Hoodie',
            price: 200,
            discount: 26,
            img: 'images/products/titan-hoodie-with-logo.png',
            rating: 2,
            sizes: ['XS', 'S', 'M'],
        },
        {
            id: 4,
            title: 'Gloves',
            description: 'Logoed titan hoodie',
            price: 200,
            img: 'images/products/titan-hoodie.png',
            rating: 5,
            sizes: ['S', 'M', 'XL', '2XL'],
        },
        {
            id: 5,
            title: 'Gloves',
            description: 'Logoed titan hoodie',
            price: 200,
            img: 'images/products/blue-titan-hoodie.png',
            rating: 5,
            sizes: ['All Sizes Available'],
        },
        {
            id: 6,
            title: 'Gloves',
            description: 'Logoed titan hoodie',
            price: 200,
            discount: 30,
            img: 'images/products/blue-black-titan-hoddie.png',
            rating: 5,
            sizes: ['All Sizes Available'],
        },
        {
            id: 7,
            title: 'Leg Armor',
            description: 'Shield for your legs, those kicks are nothing when you get hit',
            price: 200,
            img: 'images/products/legs.png',
            rating: 5,
            sizes: ['XS', 'M', 'L'],
        },
        {
            id: 8,
            title: 'Mouth Piece',
            description: 'Shield for your legs, those kicks are nothing when you get hit',
            price: 200,
            img: 'images/products/mouthpiece.png',
            rating: 5,
            sizes: ['All Sizes Available'],
        },
        {
            id: 9,
            title: 'Headgear',
            description: 'Shield for your legs, those kicks are nothing when you get hit',
            price: 200,
            img: 'images/products/headgear.png',
            rating: 5,
            sizes: ['S', 'M', 'XL'],
        },
    ]//  as Product[]
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        readProducts: (state, action) => {
            console.log(state, action);
        }
    }
})

export const { readProducts } = productsSlice.actions;
export const { initialProducts } = productsSlice.getInitialState();
export default productsSlice.reducer;
