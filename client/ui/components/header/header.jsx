// import main components
import { FlowRouter } from 'meteor/kadira:flow-router'
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Session } from 'meteor/session'

// import custom modules
import { logoImg } from '../../../../imports/client/module'
import Particles from 'react-particles-js'


export default class Header extends Component {
    constructor(props) {
      super(props)
      this.state = {
        particlesParam: {
        "particles": {
          "number": {
            "value": 50
          },
          "color": {
            "value": "#000"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 10,
              "color": "#000"
            }
          },
          "opacity": {
            "value": 1,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 5,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 10,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 10,
              "size_min": 10,
              "sync": true
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 300,
            "color": "#e44389",
            "opacity": 1,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 10,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
            "attract": {
              "enable": false,
              "rotateX": 600,
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

    render() {
        return (
            <header id="header">
              <Particles params={this.state.particlesParam} />
              <div className="jumbotron">
                <div className="container-fluid">
                    <img id="logo" src={logoImg} className="img-circle" alt="logo" />
                    <p className="subtitle">Vanielle Lee</p>
                    <p className="subtitle">
                      📍 <a href="https://www.google.com/maps/place/San+Francisco,+CA/@37.7576793,-122.5076399,12z/data=!3m1!4b1!4m5!3m4!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155" target="_blank">
                        San Francisco, California
                      </a>
                    </p>
                    <p className="subtitle">👩🏻‍💻 Software Engineer @ <a href="http://archsys.io" target="_blank">Arch Systems</a></p>

                  {/* {this.renderAbout()} */}
                </div>
              </div>
            </header>
        )
    }
}
