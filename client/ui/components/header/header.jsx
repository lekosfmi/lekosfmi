// import main components
import { FlowRouter } from 'meteor/kadira:flow-router'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Session } from 'meteor/session'

import Particles from 'react-particles-js'

import EmailList from '../email-list/email-list.jsx'


export default class Header extends Component {
    constructor(props) {
      super(props)
      this.state = {
        particlesParam: {
        "particles": {
          "number": {
            "value": 20
          },
          "color": {
            "value": "#FFF17A"
          },
          "shape": {
            "type": "star",
            "stroke": {
              "width": 8,
              "color": "#FFF17A"
            }
          },
          "opacity": {
            "value": 1,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 10,
              "size_min": 10,
              "sync": true
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 10,
            "color": "#FFF17A",
            "opacity": 1,
            "width": 5
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
            "attract": {
              "enable": true,
              "rotateX": 1000,
              "rotateY": 1200
            }
          }
        },
        "retina_detect": true
        }
      }
    }

    renderAbout() {
      let text = <span>
                  I'm a full-stack software engineer with a passion for building great products.
                  My tendency is towards the front-end where I love to develop intuitive UI/UX experience.
                  I strive to consistently learn and improve my skills.
                  I am fluent in a number of programming languages––including JavaScript and Python.
                  The frameworks and libraries I have experiences in include <a href="https://angular.io" target="_blank">Angular</a>, <a href="https://facebook.github.io/react/" target="_blank">React</a>, and <a href="http://flask.pocoo.org/" target="_blank">Flask</a>.
                  Currently, I am residing in <a href="https://www.google.com/maps?q=mountain+view+california&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiP5fGqgKPTAhXKwVQKHdkkCIUQ_AUICCgB" target="_blank">Mountain View, California</a>, and working as a software engineer at <a href="https://archsys.io/" target="_blank">Arch Systems</a>.
                 </span>

      if (FlowRouter.current().path === '/') {
        return (<p className="text-left">{text}</p>)
      }
    }

    componentWillMount() {
      if (window.screen.width < 600) {
        this.state.particlesParam.particles.number.value = 15;
        this.forceUpdate();
      }
    }

    renderParticles() {
      return (<Particles params={this.state.particlesParam} />);
    }

    render() {
        return (
            <header id="header">
              {this.renderParticles()}
              <div className="jumbotron">
                <div className="container-fluid">
                    <img id="logo" src="./header-image/profile-picture.jpg" className="img-circle" alt="logo" />
                    <p className="subtitle">Vanielle Lee</p>
                    <p className="subtitle">
                      📍 <a href="https://www.google.com/maps/place/Los+Angeles,+CA/@34.0207305,-118.6919239,10z/data=!3m1!4b1!4m5!3m4!1s0x80c2c75ddc27da13:0xe22fdf6f254608f4!8m2!3d34.0522342!4d-118.2436849" target="_blank">
                        Los Angeles, California
                      </a>
                    </p>
                    {/* <p className="subtitle">👩🏻‍💻 Software Engineer @ <a href="http://archsys.io" target="_blank">Arch Systems</a></p> */}
                    <div className="btn-group" role="group" aria-label="...">
                      <a type="button" href="https://www.linkedin.com/in/lekosfmi/" className="btn btn-text" target="_blank">
                        {/* <img src="https://res.cloudinary.com/pixmi/image/upload/v1506526538/enz43dhmbdsvsvkgsav3.png" className="brand-name" width="30" /> */}
                        Linkedin
                      </a>
                      <a type="button" href="https://github.com/lekosfmi" className="btn btn-text" target="_blank">
                        {/* <img src="https://res.cloudinary.com/pixmi/image/upload/v1506526279/xajdafxxgj9d8n2nwfz2.png" className="brand-name" width="40" /> */}
                        Github
                      </a>
                      <a type="button" href="https://instagram.com/lekosfmi" className="btn btn-text" target="_blank">
                        {/* <img src="https://res.cloudinary.com/pixmi/image/upload/v1506526708/l8qk1apxnkvlgyf1lvx7.png" className="brand-name" width="30" /> */}
                        Instagram
                      </a>
                      <a type="button" href="https://twitter.com/@lekosfmi" className="btn btn-text" target="_blank">
                        {/* <img src="https://res.cloudinary.com/pixmi/image/upload/v1506526708/l8qk1apxnkvlgyf1lvx7.png" className="brand-name" width="30" /> */}
                        Twitter
                      </a>
                    </div>

                    <EmailList />

                  {/* {this.renderAbout()} */}
                </div>
              </div>
            </header>
        )
    }
}
