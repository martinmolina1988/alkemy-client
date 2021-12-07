import { map } from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.scss";

export default function Footer() {
    const items = [
        {
            titulo: "TEXTO 1",
            itemList: [
                "Item 1",
                "Item 2",
                "Item 3",
                "Item 4",
                "Item 5",
                "Item 6",
            ]
        },
        {
            titulo: "TEXTO 2",
            itemList: [
                "Item 1",
                "Item 2",
                "Item 3",
                "Item 4",
                "Item 5",
                "Item 6",
            ]
        },
        {
            titulo: "TEXTO 3",
            itemList: [
                "Item 1",
                "Item 2",
                "Item 3",
                "Item 4",
                "Item 5",
                "Item 6",
            ]
        },
    ]

    const date = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="boton">

                <Link to="/">
                    <button className={`boton`}> Home </button>
                </Link>

                <Link to="/create">
                    <button className={`boton`}> Create record </button>
                </Link>
                <button style={{ backgroundColor: "transparent", border: "none" }} >
                    <a style={{ color: "white" }} href="https://documenter.getpostman.com/view/10602446/UVJhDaK2" target="_blank">Document</a>
                </button>
            </div>

            <p style={{ color: "white" }}>Copyright © CMMolina {date}. All Rights Reserved</p>



        </div>
    )


}
function List(props) {
    const { element } = props;
    const { titulo, itemList } = element;
    return (
        <ul >
            <h4 className="l-titulo animate__animated animate__fadeIn">{titulo}</h4>
            {map(itemList, (item, index) => (


                <li className="l-item" key={index}>{item}</li>
            ))}
        </ul>)
}