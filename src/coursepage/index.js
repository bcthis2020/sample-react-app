import React, { Component } from 'react'
import './index.css';

import logo from "../logo.svg";


class CoursePage extends Component {  

    render() {
        return (
            <div>
                    <div className="course_card">
                            
                            <div className="course_card_content">
                            <img
                                src={logo}
                                alt="Cinque Terre"
                                width="130"
                                height="150" />
                            <div className="title">Test</div>
                            <div className="desc">Description</div>
                        </div>
                    </div>
              
            </div>
        )
    }
}

export default CoursePage;