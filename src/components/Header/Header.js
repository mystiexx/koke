import React, { useState } from "react";
import "./Header.css";
import { MenuItems } from "./MenuItems.js";
import { FaBars, FaTimes } from "react-icons/fa";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../../resources/kokewhite.png";

const Header = (props) => {
    const [ clicked, setClicked ] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <div>
        <header>
            <div
                style={{
                    borderBottom: "1px solid #fff",
                    display: "flex",
                    padding: "20px 70px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <div className="logo-t">
                    <Image
                        src={Logo}
                        alt="koke-logo"
                        style={{ width: "100px", height: "50px" }}
                    />
                </div>

                <div className="menu-icon" onClick={handleClick}>
                    <i>
                        {clicked ? (
                            <FaTimes className="fabars" style={{ color: "#0F1422" }} />
                        ) : (
                            <FaBars className="times" style={{ color: "#0F1422" }} />
                        )}{" "}
                    </i>
                </div>
                <nav>
                    <ul className={clicked ? "nav-area active" : "nav-area"}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={item.url} className={item.cName}>
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <Link to="/become-a-member" className="btn-area">
                    Join
                </Link>
            </div>
        </header>
        {props.children}
    </div>
    )
}



export default Header;
