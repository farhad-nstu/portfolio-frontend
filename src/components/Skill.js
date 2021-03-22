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


      const skills = this.state.skills;
        const allSkills = skills.map((skill, index) => {

          const result = skill.attributes.map(e => {
           return <div>
                  <div class="col-md-4">
                  <h6>{e.title}</h6>
                  </div>
                 
             </div>
        });
         
        
          return(
            <div>
                
                <div class="row">                  

                    <div class="row py-3 border">

                      <div class="text-center font-weight-bold text-success">
                        <span>{skill.title}</span>
                      </div>  
                      <div class="row text-center font-weight-bold text-info">
                        {result}
                      </div>   


                      <div>

                      </div>
                    </div>                      
                </div>              
            </div>
          )
        })

        

        return (
            <div>  


        <section class="page-section" id="skill">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">skill Me</h2>
                </div>
                <div class="nk-block">
          <div class="card card-bordered card-stretch">
            <div class="card-inner-group">
              {allSkills}
            </div>
            
          </div>
        </div>
            </div>
        </section>

            </div>
        );
    }
}