import React, { Component } from 'react';
import {BrowserRouter as Link, Redirect} from "react-router-dom";
import axios from 'axios';


export default class Login extends Component {
    state= {
        email: "",
        password: "",
        message: ''
    }

    formHandler = (e) => {
        e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('login', data)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            this.setState({
                loggedIn: true
            })
            this.props.setUser(response.data.user);
        }).catch(error=> {
            this.setState({
                message: error.response.data.message
            })
        });
    }

    render() {
        if(this.state.loggedIn){
            return <Redirect to="portfolio" />
        }
        if(localStorage.getItem('token')){
            return <Redirect to="portfolio" />
        }

        let error = "";
        if(this.state.message){
            error = (
                <div>
                    <div class="alert alert-danger" role="alert">{this.state.message}</div>
                </div>
            );
        }

        return (
            <div>      
                <section class="page-section" id="contact">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="section-heading text-uppercase">Sign In Now</h2>
                            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <form onSubmit={this.formHandler} id="contactForm" name="sentMessage" novalidate="novalidate">
                            {error}
                            <div class="row align-items-stretch mb-5">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input onChange={(e) => {this.setState({email: e.target.value})}} class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <input onChange={(e) => {this.setState({password: e.target.value})}} class="form-control" id="password" type="password" name="password" placeholder="Your password*" required="required" data-validation-required-message="Please enter your valid password." />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    
                                </div>
                            </div>
                            <div class="ml-5">
                                <div id="success"></div>
                                <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Sign In</button>
                            </div>
                                
                            
                        </form>
                        <Link to="forgot" class="nav-link js-scroll-trigger">Forgot</Link>
                    </div>
                </section>

            </div>
        );
    }
}