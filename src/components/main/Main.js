import React from 'react';
import "./main.css";
import profile from "../../assets/profile.png";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

const Main = () => {
    return (
        <Router>
                <div id='about' className='main'> 
                 <div className='picture'>
                      <img src={profile}></img>
                 </div>
                 <div className='article'>
                       <h2> <span>A</span><span>b</span><span>o</span><span>u</span><span>t</span> <span>m</span><span>e</span><span>.</span><span>.</span><span>.</span> </h2>
                        <nav>
                            <ul>
                                <li> <Link to="/profile">Profile</Link> </li>
                                <li> <Link to="/skills">Skills</Link> </li>
                                <li> <Link to="/education">Education</Link> </li>
                            </ul>
                        </nav>
                        <Switch>
                            <Route path="/profile">
                                <div className='container profile'>
                                    <p>¡Hi! My name is Agu, I’m a Frontend developer from Córdoba, Argentina. I specialize in programming with React.js, both in applications and websites, so I’m looking for professional experience to develop my career in the programming world, I hope we could work together!  </p>
                                    <a href={process.env.PUBLIC_URL + "/curriculum.pdf"} download="Curriculum.pdf" className='btn btn-dark'>Download CV</a>
                                </div>
                            </Route>

                            <Route path="/skills">
                                <div className='container-fluid icons'>
                                      <i class="fab fa-html5"><br></br> HTML</i>
                                      <i class="fab fa-css3"><br></br> CSS</i>
                                      <i class="fab fa-js"><br></br> JavaScript</i>
                                      <i class="fab fa-react"><br></br> React</i>
                                      <i class="fab fa-sass"><br></br> Sass</i>
                                      <i class="fab fa-github"><br></br> GitHub</i>
                                      <i class="fab fa-bootstrap"><br></br> Bootstrap</i>
                                </div>
                            </Route>

                            <Route path="/education">
                                  <div className='container-fluid education'>                            
                                      <i class="fas fa-laptop-code"> Fullstack programming course taken in "Mundos E"</i>
                                      <i class="fab fa-react"> Certification in React.js taken in "Educacion IT"</i>
                                      <i class="fas fa-headset"> IT recruitment course taken in "Capacitarte"</i>
                                      <i class="fas fa-briefcase"> Technical degree in human resources dictated <br></br><br></br> in "Colegio Universitario IES Siglo 21" </i>
                                  </div>
                            </Route>
                        </Switch>
                        
                 </div>
            
                </div>

        </Router>
        
    )
}

export default Main
