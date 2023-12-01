import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = () => {
    return (
        <nav className='px-10 py-4 relative'>
            <ul className='hidden sm:flex justify-end gap-x-4 '>
                <li>MenuItem</li>
                <li>MenuItem</li>
                <li>MenuItem</li>
            </ul>
            <div className='absolute sm:hidden top-4 right-4' >
                <MenuIcon />
            </div>
        </nav>
    )
}

export default Navigation