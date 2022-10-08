import React from "react";

export default function Header() {
    return (
        <header className='py-5 px-2 xl:px-20 2xl:px-44 text-white bg-[#294aae] flex'>
            <a href="https://github.com/xtechilad/note-taking-app" target="#">
                <h1 className='text-[1.7rem] ml-4 xl:ml-0 overflow-hidden'>NoteUs</h1>
            </a>
        </header>
    );
}
