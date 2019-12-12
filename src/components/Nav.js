import React from 'react';
import './style.css'
import { Link } from 'react-router-dom'

// import Sobre from './Sobre';
// import Contato from './Contato';

function Nav(){
    return (
        <div className='navbar'>
            <h1>Moriyama Dojo</h1>

            <ul className='lista-links'>
            <li>
                <button>
                    <Link to='/' className='home'>
                        Home
                    </Link>
                </button>
            </li>
            <li>
                <button>
                    <Link to='/sobre' className='sobre'>
                    Sobre
                    </Link>
                </button>
                
            </li>
            <li>
                <button>
                    <Link to='/contato' className='contato'>
                        Contato
                    </Link>
                </button>
                
            </li>
            </ul>
        </div>
        
    )
}

export default Nav;