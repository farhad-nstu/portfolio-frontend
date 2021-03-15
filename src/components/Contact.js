import React, { Component } from 'react';
import {BrowserRouter as Link, Redirect} from "react-router-dom";
import axios from 'axios';




export default class Contact extends Component {

  state= {
      name: "",
      email: "",
      phone: "",
      message: "",
      alert: ""
  }

  formHandler = (e) => {
      e.preventDefault();
      const data = {
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          message: this.state.message
      }

      axios.post('contact', data)
      .then(response => {
          console.log(response.data.success);
          this.setState({
              alert: response.data.success
          })
      }).catch(error=> {
          this.setState({
              alert: error.response.data
          })
      });
  }
    render() {
        return (
            <div>      

                <section class="page-section" id="contact">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="section-heading text-uppercase">Contact Us</h2>
                            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <form onSubmit={this.formHandler} id="contactForm" name="sentMessage">
                          { alert }
                            <div class="row align-items-stretch mb-5">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input onChange={(e) => {this.setState({name: e.target.value})}} class="form-control" id="name" type="text" placeholder="Your Name *" required="required" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <input onChange={(e) => {this.setState({email: e.target.value})}} class="form-control" id="email" type="email" placeholder="Your Email *" required="required" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="form-group mb-md-0">
                                        <input onChange={(e) => {this.setState({phone: e.target.value})}} class="form-control" id="phone" type="text" placeholder="Your Phone *" required="required" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group form-group-textarea mb-md-0">
                                        <textarea onChange={(e) => {this.setState({message: e.target.value})}} class="form-control" id="message" placeholder="Your Message *" required="required"></textarea>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <div id="success"></div>
                                <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </section>

            </div>
        );
    }
}