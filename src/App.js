import React, { useEffect } from "react";
import Home from "./components/Home/Home.js";
import "./App.css";
import Particles from "react-particles-js";

const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="p">
                <Particles
                    params={{
                        number: {
                            value: 1080,
                            density: {
                                enable: true,
                                value_area: 2000,
                            },
                        },
                    }}
                />
            </div>
            <div className="b">
                <div className="content">
                    <div className="main-text ">
                        <h1 data-text='KOKE EMPIRE'>KOKE EMPIRE</h1>
                    </div>
                </div>
            </div>
            <Home />
        </div>
    );
};

export default App;
