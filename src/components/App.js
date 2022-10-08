import React, { useState } from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import Header from "./Header";

export default function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        if((newNote.title !== '' && newNote.description !== '') || (newNote.title.length <=10 && newNote.description !== '') || (newNote.title.length >10 && newNote.description === '')) {
            setNotes(prevNotes => {
                return [...prevNotes, newNote];
            });
        } else if (newNote.title.length <=10 && newNote.description === '') {
            alert("Description can't be empty!");
        } else {
            alert('Enter enough details to add a note!');
        }
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />

            <AddNote 
                onAdd={addNote}
            />

            <div className='2xl:mx-24 xl:px-16 px-2 mt-12'>
                {notes.map((aNote, index) => {
                    return (
                        <Note 
                            key={index}
                            id={index}
                            title={aNote.title}
                            description={aNote.description} 
                            onDelete={deleteNote}
                        />
                    );
                })}
            </div>
        </div>
    );
}
