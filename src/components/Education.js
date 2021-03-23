import React, { Component } from 'react';
import axios from 'axios';

export default class Education extends Component {

  state = {
    educations: [],
  }

  componentDidMount(){
    axios.get('educations')
      .then(response => {
        console.log(response.data)
        this.setState({
          educations: response.data
        })
      }).catch(error=> {

    });
  }

    render() {

        return (
          <div>  

            <section class="page-section" id="skill">
              <div class="container">

                <div class="nk-block">
                  <div class="card card-bordered card-stretch">
                    <div class="card-inner-group">
                      <table class="datatable-init table">
                        <thead>
                          <tr>
                            <th class="font-weight-bold text-success">Title</th>
                            <th class="font-weight-bold text-success">Institute</th>
                            <th class="font-weight-bold text-success">concentration</th> 
                            <th class="font-weight-bold text-success">pass_year</th>
                            <th class="font-weight-bold text-success">result</th> 
                          </tr>
                        </thead>
                        <tbody>
                          { 
                            this.state.educations.map(education => {
                              return (
                                <tr> 
                                  <td class="font-weight-bold">{education.title}</td> 
                                  <td class="font-weight-bold">{education.institute}</td>                           
                                  <td class="font-weight-bold">{education.concentration}</td> 
                                  <td class="font-weight-bold">{education.pass_year}</td>
                                  <td class="font-weight-bold">{education.result}</td>
                                </tr>
                              )
                            })
                          }              
                        </tbody>
                      </table>
                    </div>            
                  </div>
                </div>
              </div>
            </section>

          </div>
        );
    }
}