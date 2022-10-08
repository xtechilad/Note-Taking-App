import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

export default function AddNote(props) {
    const [note, setNote] = useState({
        title: '',
        description: ''
    });

    const [placeholderText, setPlaceholderText] = useState({
        title: 'Take a note...',
        description: ''
    });

    const [descriptionCSS, setDescriptionCSS] = useState({
        display: 'none'
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function displayForm() {
        setPlaceholderText({
            title: 'Title',
            description: 'Take a note...'
        })
        setDescriptionCSS({
            display: 'flex'
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: '',
            description: ''
        });
        if (note.title === '' && note.description ==='') {
            setDescriptionCSS({
                display: 'flex'
            });
        }
        else {
            setDescriptionCSS({
                display: 'none'
            });
        }
        event.preventDefault();
    }

    return (
        <div className='px-6 xl:px-20 2xl:px-44'>
            <div className='border-[1px] rounded-md w-3/5 xl:w-2/3 mt-12 shadow-2xl mx-auto noteForm' >
                <input 
                    name='title' 
                    onChange={handleChange} 
                    onClick={displayForm} 
                    className='text-white bg-transparent h-12 w-full pl-4 placeholder:font-bold placeholder:text-gray-400 outline-none' 
                    placeholder={placeholderText.title} 
                    value={note.title} 
                />

                <div style={descriptionCSS} >
                    <input 
                        name='description' 
                        onChange={handleChange} 
                        className='text-white bg-transparent h-12 w-full pl-4 placeholder:font-bold placeholder:text-gray-300 placeholder:text-sm outline-none' 
                        placeholder={placeholderText.description} 
                        value={note.description} 
                    />
                    <button onClick={submitNote} className='mx-2'>
                        <FontAwesomeIcon icon={faCirclePlus} className='text-gray-200 rounded-full mb-[2px] h-8 w-auto' />
                    </button>
                </div>
            </div>
        </div>
    );
}
