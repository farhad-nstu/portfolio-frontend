import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import axios from 'axios';

export default class Forgot extends Component {
    state = {
        email: "",
        message: ""
    }

    formHandler = (e) => {
        e.preventDefault();
        const data = {
            email: this.state.email,
        }

        axios.post('forgot-password', data)
        .then(response => {
            this.setState({
                message: response.data.message
            })
            document.getElementById("forgotForm").reset();
        }).catch(error=> {
            this.setState({
                message: error.response.data.message
            })
        });
    }

    render() {
        if(localStorage.getItem('token')){
            return <Redirect to="portfolio" />
        }

        let error = "";
        if(this.state.message){
            error = (
                <div>
                    <div class="alert alert-primary" role="alert">{this.state.message}</div>
                </div>
            );
        }

        return (
            <div>      

                <section class="page-section" id="contact">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="section-heading text-uppercase">Forgot password</h2>
                            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <form onSubmit={this.formHandler} id="forgotForm" name="sentMessage" novalidate="novalidate">
                            {error}
                            <div class="row align-items-stretch mb-5">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input onChange={(e) => {this.setState({email: e.target.value})}} class="form-control" id="email" type="email" placeholder="Your Email *" required="required" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    
                                </div>
                            </div>
                            <div class="ml-5">
                                <div id="success"></div>
                                <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send To Email</button>
                            </div>
                        </form>
                    </div>
                </section>

            </div>
        );
    }
}