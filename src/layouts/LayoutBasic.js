import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import { useState } from 'react';
import "./LayoutBasic.scss";
import Footer from '../components/Footer/Footer';

export default function LayoutBasic(props) {
    const { children } = props;

    const [visible, setVisible] = React.useState(false)
    const [ancho, setAncho] = useState(window.innerWidth);


    window.onresize = resize;

    function resize() {
        setAncho(window.innerWidth);
    }



    return (
        <>
            <Navbar ancho={ancho} visible={visible} setVisible={setVisible} />
            <Sidebar ancho={ancho} visible={visible} setVisible={setVisible} />

            <div className="layout-basic" >
            <div className="margin">
                    
                    
                    </div>
                {children}
            </div>

            <Footer />
        </>
    )
}