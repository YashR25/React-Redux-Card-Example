import {createSlice, nanoid} from '@reduxjs/toolkit'

const noteSlice = createSlice({
    name: 'noteReducer',
    initialState: {
        notes: [],
        total: 0,
        totalPrice: 0,
    },
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload)
        },
        deleteNote: (state, action) => {
            console.log(action.payload)
            state.notes = state.notes.filter((note) => action.payload !== note.id)
        },
        increaseQuantity: (state, action) => {
            console.log(action.payload)
            state.notes.forEach((note) => {
                if(note.id === action.payload){
                    note.quantity = note.quantity + 1
                    note.price = note.price + 20
                }
            })
        },
        decreaseQuantity: (state, action) => {
            state.notes.forEach((note) => {
                if(note.id === action.payload){
                    if(note.quantity > 0){
                        note.quantity = note.quantity - 1
                        note.price = note.price - 20
                    }
                }
            })
        },
        totalCount: (state, action) => {
            console.log("called total")
            let result = 0
            let amount = 0
            state.notes.forEach((note) => {
                result = result + note.quantity
                amount = amount + note.price
            })
            state.total = result
            state.totalPrice = amount
        },
    },
})

export const {addNote, deleteNote, increaseQuantity, decreaseQuantity, totalCount} = noteSlice.actions

export default noteSlice.reducer



