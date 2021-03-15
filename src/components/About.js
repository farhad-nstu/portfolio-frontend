import React, { Component } from 'react';

export default class About extends Component {
    render() {
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
              <div class="card-inner p-0">
                <div id="imageDiv" class="row pl-2 pt-2">
                  <img width="150px" height="150px" class="px-3" src="{{ asset($about->image) }}" />
                </div>
                <div class="row pl-2 pt-2">                  
                  <div class="col-md-12">

                    <div class="row">
                      <div class="col-sm-4">
                        <label class="font-weight-bold">Name</label>
                      </div>
                      <div class="col-sm-8">
                        <span></span>
                      </div>   
                    </div>    

                    <div class="row">
                      <div class="col-sm-4">
                        <label class="font-weight-bold">Email</label>
                      </div>
                      <div class="col-sm-8">
                        <p>dshkjh</p>
                      </div>   
                    </div>

                    <div class="row">
                      <div class="col-sm-4">
                        <label class="font-weight-bold">Phone</label>
                      </div>
                      <div class="col-sm-8">
                        <p>98798778</p>
                      </div>   
                    </div>

                    <div class="row">
                      <div class="col-sm-4">
                        <label class="font-weight-bold">Designation</label>
                      </div>
                      <div class="col-sm-8">
                        <p>ghjhgjhg</p>
                      </div>   
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <label class="font-weight-bold">Short Description</label>
                      </div>
                      <div class="col-sm-8">
                        <p>jhhjhgh</p>
                      </div>   
                    </div>

                    <div class="row">
                      <div class="col-sm-4">
                        <label class="font-weight-bold">Description</label>
                      </div>
                      <div class="col-sm-8">
                        <p>uytuytu</p>
                      </div>   
                    </div>

                    <div class="row">
                      <div class="col-sm-4">
                        <label class="font-weight-bold">Current Focus</label>
                      </div>
                      <div class="col-sm-8">
                        <p>uyuyt</p>
                      </div>   
                    </div>

                    <div class="row">
                      <div class="col-sm-4">
                        <label class="font-weight-bold">Professional Experience</label>
                      </div>
                      <div class="col-sm-8">
                        <p>ytiuyiuy</p>
                      </div>   
                    </div>

                    <div class="row">
                      <div class="col-sm-4">
                        <label class="font-weight-bold">Course</label>
                      </div>
                      <div class="col-sm-8">
                        <p>rtrry ytutu</p>
                      </div>   
                    </div>                    
                    
                  </div>
                </div>              
              </div>
            </div>
          </div>
        </div>
            </div>
        </section>

            </div>
        );
    }
}