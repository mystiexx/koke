import React, { Component } from "react";
import "./Service.css";

class Service extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div classNam="pb-5">
              <div className="header pb-4">
                    <div className="head">
                        <h2 className="header-text ">Contact Us</h2>
                    </div>
                </div>

                <div style={{ marginTop: "500px", color:'black' , position: 'relative'}}>
                    Entertainment in General (Showbiz, Music, Film making etc) Talent Management
                    Clothing Line Modeling Event Management Charity Logistics Construction General
                    Contractors With other wholesale and retail shops like (Wine, gadgets, house
                    hold materials etc) registered under the business name
                </div>
            </div>
        );
    }
}

export default Service;
