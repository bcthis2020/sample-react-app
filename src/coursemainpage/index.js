import React, { Component } from "react";
import CoursePage from '../coursepage/index'
import "./index.css"

class CourseMainPage extends Component {

    render() {
      
        return (
           
                <div className="container">
                    <div className="courseswrap">
                      
                                 
                                        <CoursePage
                                         />
                                         <CoursePage
                                         />
                                         <CoursePage
                                         />


                                
                           
                    </div>
                </div>
                 
        )
    }
}

export default CourseMainPage;