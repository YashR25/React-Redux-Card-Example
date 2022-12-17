import { nanoid } from '@reduxjs/toolkit'
import {React, useState} from 'react'

import { useDispatch } from 'react-redux'
import { addNote, deleteNote } from '../Slices/noteSlice'
import { useSelector } from 'react-redux'

import './Child1.css'

function Child1() {

    const [noteValue,setNote] = useState('')
    const [description, setDesc] = useState('')
    
    const total = useSelector((state) => state.noteReducer.total)
    const totalAmount = useSelector((state) => state.noteReducer.totalPrice)


    const dispatch = useDispatch()

    function submitNote(event){
        event.preventDefault();
        dispatch(addNote({
            id: nanoid(10),
            noteValue,
            description,
            quantity: 0,
            price: 0 
        }))
    }
  return (
    <div>
        <nav>
            <p>Total Itmes : <b>{total}</b></p>
            <p>Total Price: <b>{totalAmount} Rs.</b></p>
        </nav>
        <form onSubmit={submitNote}>
            <div className='container'>
                <input placeholder='Title' type={'text'} onChange={(e) => {setNote(e.target.value)}}/>
                <input placeholder='Description' type={'text'} onChange={(e) => {setDesc(e.target.value)}}/>
                <button className='button' type={'submit'} onClick={submitNote}>submit</button>
            </div>
        </form>
        
    </div>
  )
}

export default Child1