import React from 'react';
import { NavLink } from 'react-router-dom';
import style from'./HireTalent.module.css';
import logo from './img/stafferLogo.png';
import Serach from './img/Search2.png';
import user from './img/User.png';
import place from './img/Place Marker.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css"
export default function HireTalent() {
    return (
        <>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        {/* ======================================================================== */}
        <div className={style.navbar}>
                <NavLink to={'/'} className={style.link}>
                    <div className={style.all_logo}>
                        <img src={logo} alt="Logo" className={style.logo}/>
                        <p className={style.logo_text}><span>Staff</span><span>er</span></p>
                    </div>
                </NavLink>
                <div className={style.nav_links}>
                    <NavLink to={'/'} className={style.nav_link}>Home</NavLink>
                    <NavLink to={'/FindJob'} className={style.nav_link}>Find Jobs</NavLink>
                    <NavLink to={'/HireTalent'} className={style.nav_link}>Hire Talent</NavLink>
                    <NavLink to={'/'} className={style.nav_link}>About Us</NavLink>
                </div>
                <div className={style.nav_buttons}>
                    <NavLink to={'/'} className={style.nav_button}>Login</NavLink>
                    <NavLink to={'/'} className={style.nav_button}>
                        <button className="btn btn-primary">Register</button>
                    </NavLink>
                </div>

            </div>
        {/* =============================================================================== */}
        <br/><br/><br/><br/>
        <div className={style.all}>
        <div className="container ">
            <div className="row">
                <div className='col-3 offset-col-1'>
                    <div className="card blue-border">
                        <div className="card-body">
                            <h5 className="card-title" style={{color: "#3A1078"}}>Filtrer par</h5>
                            <form className="form-inline">
                                <div className='row'>
                                    <div className='col-9'>
                                        <input className="form-control" type="search" placeholder="Categorie" aria-label="Search"/>
                                    </div>
                                    <div className='col-3'>
                                        <button className="btn btn-primary  m-auto">
                                            <img src={Serach} alt="Logo" className={style.search} style={{width:"1.5rem", height:"auto"}}/>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            
                            <hr className='mx-auto purple-devider'/>
                            <form className="form-inline">
                                <p className='col-12' style={{color: "#3A1078"}}>Coût horaire</p>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        100$-200$
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        100$-500$
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        500$-900$
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        plus que 1000$
                                    </label>
                                </div>
                            </form>
                            <hr className='mx-auto purple-devider'/>
                            <form className="form-inline">
                                <p className='col-12' style={{color: "#3A1078"}}>Type de projet</p>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        moin d'un mois
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        1 - 2 mois
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        2 - 5 mois
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        plus que 6 mois
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-9 card blue-border">
                    <div className='mt-3'>
                        <div className='row'>
                            <div className='col-12'>
                                <form className="form-inline">
                                    <div className='row'>
                                        <div className='col-5'>
                                            <input className="form-control" type="search" placeholder="Titre ou mots clés" aria-label="Search"/>
                                        </div>
                                        <div className='col-5'>
                                            <input className="form-control" type="search" placeholder="location" aria-label="Search"/>
                                        </div>
                                        <div className='col-2'>
                                            <button className="btn btn-primary  m-auto">
                                                <img src={Serach} alt="Logo" className={style.search} style={{width:"1.5rem", height:"auto"}}/>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <NavLink to={'#'}>
                            <div className='card mt-3 blue-border job-card'>
                                <div className='card-body'>
                                    <div className='row'>
                                        <img src={user} alt="user-icon" style={{width: "auto", height:'3.5rem', }}  />
                                        <h3 className='col-9 mt-2' style={{color:"#3A1078"}}>John Doe</h3>
                                    </div>
                                    <div className='row'>
                                        <img src={place} alt="place" style={{width: "auto", height:'1rem', marginLeft:"0.5rem"}} className='mt-1' />
                                        <p className='text-muted col-9'>location</p>
                                    </div>
                                    <div className='row'>
                                        <p className='col-4'>Coût horaire : <span>10da-20da</span></p>
                                        
                                        <p className='col-12 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorum non eveniet maxime ducimus sapiente soluta ea consequatur assumenda eos vero minima sint ullam dolores, magnam pariatur quis? Cupiditate, amet!</p>
                                        

                                        <span class="badge badge-pill badge-primary mt-1 mx-1">Primary</span>
                                        <span class="badge badge-pill badge-primary mt-1 mx-1">Primary</span>
                                        <span class="badge badge-pill badge-primary mt-1 mx-1">Primary</span>
                                    </div>

                                </div>
                            </div>
                        </NavLink>
                        <hr className='mx-auto purple-devider'/>

                        <NavLink to={'#'}>
                            <div className='card mt-3 blue-border job-card'>
                                <div className='card-body'>
                                    <div className='row'>
                                        <img src={user} alt="user-icon" style={{width: "auto", height:'3.5rem', }}  />
                                        <h3 className='col-9 mt-2' style={{color:"#3A1078"}}>John Doe</h3>
                                    </div>
                                    <div className='row'>
                                        <img src={place} alt="place" style={{width: "auto", height:'1rem', marginLeft:"0.5rem"}} className='mt-1' />
                                        <p className='text-muted col-9'>location</p>
                                    </div>
                                    <div className='row'>
                                        <p className='col-4'>Coût horaire : <span>10da-20da</span></p>
                                        
                                        <p className='col-12 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorum non eveniet maxime ducimus sapiente soluta ea consequatur assumenda eos vero minima sint ullam dolores, magnam pariatur quis? Cupiditate, amet!</p>
                                        

                                        <span class="badge badge-pill badge-primary mt-1 mx-1">Primary</span>
                                        <span class="badge badge-pill badge-primary mt-1 mx-1">Primary</span>
                                        <span class="badge badge-pill badge-primary mt-1 mx-1">Primary</span>
                                    </div>

                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <br/>
                </div>
                
            </div>
            <br/>
            
        </div>
        </div>

        </>
    );

}