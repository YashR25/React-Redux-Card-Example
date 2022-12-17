import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteNote, increaseQuantity, decreaseQuantity, totalCount } from '../Slices/noteSlice';
import './Child2.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



function Child2() {

    const notes = useSelector((state) => state.noteReducer.notes)
    console.log(notes)

    const dispatch = useDispatch();
    function handleDelete(note){
        console.log(note.id)
        dispatch(deleteNote(note.id));
    }

    function handleIncrease(note){
        dispatch(increaseQuantity(note.id))
    }

    function handleDecrease(note){
        dispatch(decreaseQuantity(note.id))
    }

    useEffect(() => {
        dispatch(totalCount())
    })
  return (
    <div className='child2-container'>
        {
            notes.map((not) => {
                return <div className='notes-container'>
                            {/* <h1>{not.id}</h1> */}
                            <div>
                                <h1>{not.noteValue}</h1>
                                <p>{not.description}</p>
                            </div>
                            <button className='button-plus' onClick={() => handleIncrease(not)}><i class="fa-sharp fa-solid fa-plus"></i></button>
                            <p>{not.quantity}</p>
                            <button className='button-plus' onClick={() => handleDecrease(not)}><i class="fa-sharp fa-solid fa-minus"></i></button>
                            <p>{not.price} Rs.</p>
                            <button className='button-delete' onClick={() => handleDelete(not)}><i class="fa-sharp fa-solid fa-trash"></i></button>
                        </div>
            })
        }
    </div>
  )
}

export default Child2