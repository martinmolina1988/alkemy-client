import React from 'react';
import Logo from "../../assets/png/logo.png"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Sidebar.scss";
import { Button } from 'semantic-ui-react';

export default function Nav(props) {
    const [clase, setClase] = useState("");
    const { visible, ancho } = props;
    const { logout } = useAuth();

    useEffect(() => {

        if (visible) {
            setClase("inActive");
        } else {
            setClase("active");
        }
        if (ancho > 870)
            setClase("active");
    }, [visible, ancho])
    return (<>
        {ancho < 870 &&
            <div className={`side side__${clase}`}>
                <br /><br /><br /><br /><br />
                <ul style={{ marginBottom: "40px" }}>
                    <li>
                        <img src={Logo} alt="Logo" className="logo" />
                    </li>
                    <Link to="/">
                        <li>Home</li>
                    </Link>

                    <Link to="/create">
                        <li>Create record</li>
                    </Link>
                    <li>

                        <button style={{ backgroundColor: "transparent", border: "none" }} >
                            <a style={{ color: "white" }} href="https://documenter.getpostman.com/view/10602446/UVJhDaK2" target="_blank">Document</a>
                        </button>
                    </li>


                </ul>
                <Button color="green" onClick={() => logout()}>Logout</Button>
            </div >
        }    </>
    )
}
