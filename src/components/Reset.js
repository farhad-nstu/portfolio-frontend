import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import axios from 'axios';



export default class Reset extends Component {

    state = {
        email: "",
        token: "",
        password: "",
        password_confirmation: "",
        message: ""
    }

    formHandler = (e) => {
        e.preventDefault();
        const data = {
            token: this.state.token,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        }

        axios.post('reset-password', data)
        .then(response => {
            console.log(response.data)
            localStorage.setItem('token', response.data.token);
            this.setState({
                message: response.data.message
            })
            document.getElementById("resetForm").reset();
        }).catch(error=> {
            this.setState({
                message: error.response.data.message
            })
        });
    }

    render() {

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
                            <h2 class="section-heading text-uppercase">Reset your password</h2>
                            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <form onSubmit={this.formHandler} id="resetForm" name="sentMessage" novalidate="novalidate">
                            {error}
                            <div class="row align-items-stretch mb-5">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input onChange={(e) => {this.setState({token: e.target.value})}} class="form-control" id="pincode" type="text" name="pincode" placeholder="Your Pin *" required="required" />
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
                                <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Change Password</button>
                            </div>
                        </form>
                    </div>
                </section>

            </div>
        );
    }
}