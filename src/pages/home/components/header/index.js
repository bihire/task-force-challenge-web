import React, { Component } from 'react'
import Button from '../../../../components/Button'
import logo from '../../../../assets/Assets_IB_logo.png'


import './header.scss'
import Filter from './components/filter'

const Header = ({
    changeModal
}) => {
    return (
            <div className='Header'>
                <div className='Header_logo'>
                    <img src={logo} width='20'/>
                </div>
                <div className='Header_right'>
                    <div className='Header_right_search'>
                            <div className="Header_right_search_container">
                                <input id="searchBar" className="Header_right_search_container_searchbar" type="text" placeholder="search" />
                                <div className="Header_right_search_container_btn_search">
                            <Button className="searchBtn" value="Search" />
                        </div>
                    </div>

                    </div>
                    <div className='Header_right_menu'>
                        {/* <Button className="menuBtn" value="" /> */}
                    <Filter />
                    </div>
                    <div className='Header_right_addTask'>
                        <Button className="newTask" value="NEW TASK" onClick={changeModal}/>
                    </div>
                </div>
            </div>

    )

}

export default Header;