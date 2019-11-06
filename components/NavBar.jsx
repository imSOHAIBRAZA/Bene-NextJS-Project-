import React from 'react';
import NavLink from './NavLink';
import { imagePack } from "../Components/Constants";



function NavBar() {
    return (
        <div>
            <nav class=" container navbar navbar-expand-lg navbar-light nav__bar " >
                <a class="navbar-brand" href="#" >Shop+</a>
               <span className="text-center" >
                   <img className="rounded nav__logo " src={imagePack.logo}/>
                </span> 
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <NavLink title='Learn' link='/learn' />
                        <NavLink title='Consult' link='/consult' />
                        <NavLink link='/user' >
                            <img src={imagePack.userIcon}  />
                        </NavLink>
                        <NavLink link='/cart'>
                            <img src={imagePack.cartIcon}  />
                        </NavLink>

                    </div>
                </div>
            </nav>

        </div>
    );
}

export default NavBar;

