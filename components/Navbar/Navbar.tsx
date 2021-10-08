import React from 'react'
import { Drawer, Header, Search } from './styles'

const Navbar = () => {
    return (
        <Header>
            <Drawer>
                <div className="drawer-el">
                    <span className="line"></span>
                    </div>
                <p className="logo">Chukwudi
                    
                </p>
            
            </Drawer>
            <Search>
                <input type="text" placeholder="Search" />
                <img src="/icons/search.svg" alt="" />
            </Search>

        </Header>

    )}

    export default Navbar
