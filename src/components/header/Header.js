import React from 'react'
import "./header.css"

const Header = () => {
    return (
        <div className='header container-fluid'>
            <nav> 
                <ul className='ul'>
                    <li className='btn btn-dark'>
                        <a href='#'>About</a>
                    </li>
                    <li className='btn btn-dark'>
                        <a href='#'>Portfolio</a>
                    </li>
                    <li className='btn btn-dark'>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </nav>
            <div className='titles'>
                   <h4>Hi! my name is</h4>
                   <h1>Agustin Soteras</h1>
                   <h4>Frontend Developer</h4>
                   <div >
                        <a target="_blank" href="https://www.linkedin.com/in/agustinsoteras/" class="fab fa-linkedin"></a>
                        <a target="_blank" href='https://github.com/agusoteras' class="fab fa-github-square"></a>
                   </div>
            </div>
            
        </div>
    )
}

export default Header
