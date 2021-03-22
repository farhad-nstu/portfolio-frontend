import React, { Component } from 'react';
import axios from 'axios';

export default class About extends Component {

  state = {
    abouts: [],
    description: "",
    experience: ""
  }

  componentDidMount(){
    axios.get('about')
      .then(response => {
        console.log(response.data)
        this.setState({
          abouts: response.data.abouts,
          description: response.data.description,
          experience: response.data.experince
        })
      }).catch(error=> {

    });
  }

    render() {

      const abouts = this.state.abouts;
        const allAbouts = abouts.map((about, index) => {
          return(
            <div>
              <div class="card-inner p-0">
                <div class="pl-2 pt-2 float-right">
                  <img width="200px" height="200px" class="px-3" src={"http://127.0.0.1:8000/" + about.image } alt="" />
                </div>
                <div class="row pl-2 pt-2">                  
                  <div class="col-md-12">

                    <div class="row">
                      <div class="col-sm-4">
                        <label class="font-weight-bold">Name</label>
                      </div>
                      <div class="col-sm-8">
                        <span>{about.name}</span>
                      </div>   
                    </div>    

                    <div class="row">
                      <div class="col-sm-4">
                        <label class="font-weight-bold">Email</label>
                      </div>
                      <div class="col-sm-8">
                        <p>{about.email}</p>
                      </div>   
                    </div>

                    <div class="row">
                      <div class="col-sm-4">
                        <label class="font-weight-bold">Phone</label>
                      </div>
                      <div class="col-sm-8">
                        <p>{about.phone}</p>
                      </div>   
                    </div>

                    <div class="row">
                      <div class="col-sm-4">
                        <label class="font-weight-bold">Designation</label>
                      </div>
                      <div class="col-sm-8">
                        <p>{about.designation}</p>
                      </div>   
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <label class="font-weight-bold">Short Description</label>
                      </div>
                      <div class="col-sm-8">
                        <p>{about.short_name_desc}</p>
                      </div>   
                    </div>

                    <div class="row">
                      <div class="col-sm-4">
                        <label class="font-weight-bold">Description</label>
                      </div>
                      <div class="col-sm-8">
                        <p>{this.state.description}</p>
                      </div>   
                    </div>

                    <div class="row">
                      <div class="col-sm-4">
                        <label class="font-weight-bold">Current Focus</label>
                      </div>
                      <div class="col-sm-8">
                        <p>{about.current_focus}</p>
                      </div>   
                    </div>

                    <div class="row">
                      <div class="col-sm-4">
                        <label class="font-weight-bold">Professional Experience</label>
                      </div>
                      <div class="col-sm-8">
                        <p>{this.state.experience}</p>
                      </div>   
                    </div>

                    <div class="row">
                      <div class="col-sm-4">
                        <label class="font-weight-bold">Course</label>
                      </div>
                      <div class="col-sm-8">
                        <p>{about.course}</p>
                      </div>   
                    </div>                    
                    
                  </div>
                </div>              
              </div>
            </div>
          )
        })

        return (
            <div>  


        <section class="page-section" id="about">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">About Me</h2>
                </div>
                <div class="nk-block">
          <div class="card card-bordered card-stretch">
            <div class="card-inner-group">
              {allAbouts}
            </div>
          </div>
        </div>
            </div>
        </section>

            </div>
        );
    }
}