import React, { Component } from 'react';
import axios from 'axios';

export default class Skill extends Component {

  state = {
    skills: [],
  }

  componentDidMount(){
    axios.get('skills')
      .then(response => {
        console.log(response.data)
        this.setState({
          skills: response.data
        })
      }).catch(error=> {

    });
  }

    render() {

        return (
          <div>  

            <section class="page-section" id="skill">
              <div class="container">
                <div class="text-center">
                  <h2 class="section-heading text-uppercase">Skill</h2>
                </div>
                <div class="nk-block">
                  <div class="card card-bordered card-stretch">
                    <div class="card-inner-group">
                      {
                        this.state.skills.map(skill => { 
                          return (
                            <div class="container border py-3">
                              <div class="text-center font-weight-bold text-success pb-2">
                                <h5>{skill.title}</h5>                        
                              </div> 
                              <div class="row">
                                {
                                  skill.attributes.map(e => { 
                                    return (
                                      <div class="col-md-4">
                                        <h6 class="pl-2 pb-1">{e.title}</h6>
                                        <img class="mx-auto rounded-circle" width="80" height="60" src={"http://127.0.0.1:8000/" + e.image } alt="" />
                                      </div>
                                    )
                                  })
                                }
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>            
                  </div>
                </div>
              </div>
            </section>

          </div>
        );
    }
}