import React from 'react';

const NavLink = ({ title, link, children }) => {
    return (
        <a class="nav-item nav-link navLink"
            href={link}
        >
            {children}
            {title}
        </a>
    );
}

export default NavLink;


