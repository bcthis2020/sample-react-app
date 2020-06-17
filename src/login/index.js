import React, {Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default class Login extends Component {

  
    render(){
return (
    <div className= "login-back" >
        <div className="login-form">
            <div className="container">
                <div className="row justify-content-center login-card">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header text-center card-border">
                                <img src="https://www.torryharris.com/images/this/this_logo_innerpages.svg" alt="logo" className="logo-prop" />

                            </div>
                            <div className="card-body">
                                <div className=" row justify-content-center">
                                    <p className="login-text">
                                        Log in to your account 
                                    </p>
                                </div>
                                <form >
                                    <div className="form-group row justify-content-center">
                                        {/* <label for="username" className="col-md-4 col-form-label text-md-right">Email ID</label> */}
                                        <div className="col-md-6">
                                            <input type="email" id="email"
                                                className="form-control login-input"
                                                name="email"
                                                placeholder="Email ID" required autoFocus />
                                        </div>
                                    </div>

                                    <div className="form-group row justify-content-center">
                                        {/* <label for="password" className="col-md-4 col-form-label text-md-right">Password</label> */}
                                        <div className="col-md-6">
                                            <input type="password"
                                                id="password"
                                                className="form-control login-input"
                                                name="password"
                                                // error={errors.password} 
                                                placeholder="Password" required />
                                
                                        </div>
                                    </div>
                                
                              
                                  
                        <div className="row">
                                    <div className="col-sm-12 login-btn">
                                    <Link to = "/dashboard">
                                        <button type="submit" className="btn btn-login">
                                          
                                            Log In
                                        </button>
                                        </Link>
                                      </div>
                                    </div>
                                
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        <div className="foot">
            <p>
                Copyright &copy; 2020. All Rights Reserved.
        </p>
        </div>
    </div>


);
    }

}
