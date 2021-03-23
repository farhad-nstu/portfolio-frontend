import React, { Component } from 'react';
import {Redirect, Link} from "react-router-dom";
import axios from 'axios';

export default class Project extends Component {

  state = {
    projects: [],
    alert_message: ""
  }

  componentDidMount(){
    axios.get('projects')
    .then(response => {
      this.setState({
      projects: response.data.projects
      })
    }).catch(error=> {

    });
  }

  render() {
    let name;
    let email;

    if(this.props.user){
      name= this.props.user.name;
      email= this.props.user.email;
    }

    //// checking authoraization ////
    if(!localStorage.getItem('token')){
      return <Redirect to="login" />
    }

    return(
    <div>      
      <section class="page-section bg-light" id="portfolio">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Projects</h2>
            <h3>{name}</h3>
            <h3>{email}</h3>
          </div>
          <div class="row">
            {
              this.state.projects.map((project, index) => {
                return(
                  <div class="col-lg-4 col-sm-6 mb-4">
                    <div class="portfolio-item">
                      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                        <div class="portfolio-hover">
                          <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src={"http://127.0.0.1:8000/" + project.image } alt="" />
                      </a>
                      <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">{project.title}</div>
                        <Link to={{ pathname: project.link }} target="_blank" class="portfolio-caption-subheading text-muted">{project.link}</Link>
                      </div>
                    </div>
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
