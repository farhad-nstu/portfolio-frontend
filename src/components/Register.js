import React, { Component } from 'react';
import {BrowserRouter as Link, Redirect} from "react-router-dom";
import axios from 'axios';
 


export default class Register extends Component {

    state= {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        registered: false,
        message: ""
    }

    formHandler = (e) => {
        e.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        }

        axios.post('register', data)
        .then(response => {
            console.log(response.data)
            localStorage.setItem('token', response.data.token);
            this.setState({
                registered: true
            })
            this.props.setUser(response.data.user);
        }).catch(error=> {
            this.setState({
                message: error.response.data.message
            })
        });
    }

    render() {

        if(this.state.registered){
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
                            <h2 class="section-heading text-uppercase">Register Now</h2>
                            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <form onSubmit={this.formHandler} id="contactForm" name="sentMessage">
                            {error}
                            <div class="row align-items-stretch mb-5">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input onChange={(e) => {this.setState({name: e.target.value})}} class="form-control" type="text" placeholder="Your Name *" required="required"/>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <input onChange={(e) => {this.setState({email: e.target.value})}} class="form-control" type="email" placeholder="Your Email *" required="required"/>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input onChange={(e) => {this.setState({password: e.target.value})}} class="form-control" type="password" placeholder="Your password*" required="required" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="form-group mb-md-0">
                                        <input onChange={(e) => {this.setState({password_confirmation: e.target.value})}} class="form-control" type="password" placeholder="Confirm password*" required="required" />
                                        <p class="help-block text-danger"></p>                                        
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <div id="success"></div>
                                <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </section>

            </div>
        );
    }
}