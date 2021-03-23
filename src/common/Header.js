import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Project from '../components/Project';
import Service from '../components/Service';
import Login from '../components/Login';
import Register from '../components/Register';
import Forgot from '../components/Forgot';
import Reset from '../components/Reset';
import axios from 'axios';
import Skill from '../components/Skill';
import Education from '../components/Education';

export default class Header extends Component {
    state = {
        user: {}
    }

    componentDidMount(){
        axios.get('user')
        .then(response => {
            this.setUser(response.data)
            // console.log(response.data);
        }).catch(error=> {
            console.log(error)
        });
    }

    setUser = (user) => {
        this.setState({
            user: user
        })
    }

    logout = () => {
        localStorage.clear();
        this.setUser(null);
    }

    render() {
        if(!localStorage.getItem('token')){
            return (
            <Router>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                        <div class="container">
                            <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="" /></a>
                            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                Menu
                                <i class="fas fa-bars ml-1"></i>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav text-uppercase ml-auto">
                                    <li class="nav-item text-primary"><Link to="/" class="nav-link js-scroll-trigger" href="#services">Home</Link></li>
                                    <li class="nav-item text-primary"><Link to="/about" class="nav-link js-scroll-trigger" href="#about">About</Link></li>
                                    <li class="nav-item text-primary"><Link to="/service" class="nav-link js-scroll-trigger" href="#team">Services</Link></li>
                                    <li class="nav-item text-primary"><Link to="/skill" class="nav-link js-scroll-trigger" href="#skills">Skill</Link></li>
                                    <li class="nav-item text-primary"><Link to="/education" class="nav-link js-scroll-trigger" href="#educations">Education</Link></li>
                                    <li class="nav-item text-primary"><Link to="/contact" class="nav-link js-scroll-trigger" href="#contact">Contact</Link></li>
                                    <li class="nav-item text-primary"><Link to="/login" class="nav-link js-scroll-trigger" href="#login">Login</Link></li>
                                    <li class="nav-item text-primary"><Link to="/register" class="nav-link js-scroll-trigger" href="#register">Register</Link></li>
                                    <li class="nav-item text-primary"><Link to="/forgot" class="nav-link js-scroll-trigger" href="#forgot">Forgot</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <header class="masthead">
                        <div class="container">
                        </div>
                    </header>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/service" component={Service} />
                        <Route exact path="/skill" component={Skill} />
                        <Route exact path="/education" component={Education} />
                        <Route exact path="/login" component={() => <Login setUser={this.setUser} />} />
                        <Route exact path="/register" component={() => <Register setUser={this.setUser} />} />
                        <Route exact path="/forgot" component={Forgot} />
                        <Route exact path="/reset/:id" component={Reset} />
                    </Switch>
                </div>
            </Router>
        );
        } else {
            return (
            <Router>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                        <div class="container">
                            <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="" /></a>
                            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                Menu
                                <i class="fas fa-bars ml-1"></i>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav text-uppercase ml-auto">
                                    <li class="nav-item text-primary"><Link to="/" class="nav-link js-scroll-trigger" href="#services">Home</Link></li>
                                    <li class="nav-item text-primary"><Link to="/project" class="nav-link js-scroll-trigger" href="#project">Project</Link></li>
                                    <li class="nav-item text-primary"><Link to="/about" class="nav-link js-scroll-trigger" href="#about">About</Link></li>
                                    <li class="nav-item text-primary"><Link to="/service" class="nav-link js-scroll-trigger" href="#team">Services</Link></li>
                                    <li class="nav-item text-primary"><Link to="/skill" class="nav-link js-scroll-trigger" href="#skill">Skill</Link></li>
                                    <li class="nav-item text-primary"><Link to="/education" class="nav-link js-scroll-trigger" href="#educations">Education</Link></li>
                                    <li class="nav-item text-primary"><Link to="/contact" class="nav-link js-scroll-trigger" href="#contact">Contact</Link></li>
                                    <li class="nav-item text-primary"><Link to="/" class="nav-link js-scroll-trigger" onClick={this.logout}>Logout</Link></li>                                 
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <header class="masthead">
                        <div class="container">
                        </div>
                    </header>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/project" component={() => <Project user={this.state.user} />}
                        />
                        <Route exact path="/service" component={Service} />
                        <Route exact path="/skill" component={Skill} />
                        <Route exact path="/education" component={Education} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/forgot" component={Forgot} />
                        <Route exact path="/reset" component={Reset} />
                    </Switch>
                </div>
            </Router>
        );
        }
        
    }
}