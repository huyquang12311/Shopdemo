import React from 'react'
import "./Navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input type='text' placeholder='search...' />
                    <SearchIcon />
                </div>
                <div className='items'>
                    <div className='item'>
                        <SettingsBrightnessIcon className='icon' />
                    </div>
                    <div className='item'>
                        <NotificationsNoneIcon className='icon' />
                        <div className='couter'>1</div>
                    </div>
                    <div className='item'>
                        <ChatBubbleOutlineIcon className='icon' />
                        <div className='couter'>1</div>
                    </div>
                    <div className='item'>
                        <FormatListBulletedIcon className='icon' />
                    </div>
                    <div className='item'>
                        <img className='avatar'
                            src='https://d1j8r0kxyu9tj8.cloudfront.net/images/1617647693nRFHJyLRP5Rtryd.jpg'
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
