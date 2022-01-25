import { MenuItems } from './MenuItems'
import './Navbar.css'
// import { Button } from '../Button';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);

    return (
        <nav className="NavbarItems" >
            <h1 className="navbar-logo"><i className="bi bi-bug-fill"></i> React </h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'bi bi-x' : 'bi bi-list'}></i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index} className='nav-item'>
                            <Link className={item.cName} to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}

            </ul>
            {/* <Button>Sign Up</Button> */}
        </nav>
    );
}

export default Navbar;
