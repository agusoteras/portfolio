import React from 'react';
import "./footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                 <a target="_blank" href="https://www.linkedin.com/in/agustinsoteras/" class="fab fa-linkedin-in"></a>
                 <a target="_blank" href='https://github.com/agusoteras' class="fab fa-github"></a>
                 <a target="_blank" href='https://open.spotify.com/artist/5hu3DKzTcKPOt7VyIQeMQv' class="fab fa-spotify"></a>
            </div>
            <div className='contact'>
                   <i class="fas fa-envelope-square"> soterasjunior@hotmail.com</i>
                   <i class="fas fa-phone"> +549 3513032926</i>
            </div>
             <p>By Agu Soteras</p>
        </div>
    )
}

export default Footer
