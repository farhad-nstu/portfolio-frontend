import React, { Component } from 'react';
import {Redirect, Link} from "react-router-dom";
import axios from 'axios';

export default class Service extends Component {

  state = {
    services: [],
  }

  componentDidMount(){
    axios.get('services')
    .then(response => {
      this.setState({
        services: response.data
      })
    }).catch(error=> {

    });
  }

  render() {

    return (
      <div>      
        <section class="page-section" id="services">
          <div class="container">
            <div class="text-center">
              <h2 class="section-heading text-uppercase">Services</h2>
              <h3 class="section-subheading text-muted">This is what I serve. You can find your demand. We support various items.</h3>
            </div>
            <div class="row text-center">
              {
                this.state.services.map((service, index) => { 
                  return (
                    <div class="col-md-4">
                      <span class="fa-stack fa-4x">
                        <img class="mx-auto rounded-circle" width="150" height="130" src={"http://127.0.0.1:8000/" + service.image } alt="" />
                      </span>
                      <h4 class="my-3">{ service.title }</h4>
                      <p class="text-muted">{ service.pure_desc }</p>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </section>

      </div>
    );
  }
}





