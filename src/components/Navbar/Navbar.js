import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import Logo from "../../assets/png/logo.png"
import useAuth from '../../hooks/useAuth';
import "./Navbar.scss"

export default function Navbar(props) {

    const { setVisible, visible, ancho } = props;

    const{logout} =   useAuth();
    const [clase, setclase] = useState("not-scroll");
    window.onscroll = () => {
        if (window.scrollY >= 50) {
            setclase("scroll")
        } else {
            setclase("not-scroll")
        }
    }


    return (
        <div className={`nav nav__${clase}`}>

            {ancho > 870 ? (
                <div className="n-desktop">
                    <img className="logo" src={Logo} alt="logo" />
                    <div className="botones">

                        <Link to="/">
                            <button className={`boton boton__${clase}`}> Home </button>
                        </Link>

                        <Link to="/create">
                            <button className={`boton boton__${clase}`}> Create record </button>
                        </Link>
                        <button className={`boton boton__${clase}`}> 
                            <a style={{color:"white"}} href="https://documenter.getpostman.com/view/10602446/UVJhDaK2"  target="_blank">Document</a>
                            </button>


                    </div>
                    <Link style={{marginTop:"8px"}} className="botones" to="/auth">
                        <button onClick={()=>  logout()} className={`boton boton__${clase} boton__entrar`}> Logout </button>
                    </Link>

                </div>
            ) : (
                <>
                    <Icon className={`span span__${clase}`} onClick={() => setVisible(!visible)}
                        name="bars"
                    />
                </>
            )
            }
        </div>
    )
}


