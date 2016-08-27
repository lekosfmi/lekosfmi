// import main components / modules
import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'

// import custom components
import Btn from '../../components/btn/btn.jsx'
import InputField from '../../components/input-field/input-field.jsx'
import MessageField from '../../components/message-field/message-field.jsx'
import PageHeader from '../../components/page-header/page-header.jsx'


export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = { } // from model
  }

  handleSubmit(e) {
    e.preventDefault()
    e.persist() // event synthetic

    let firstName = e.target.firstName.value
    let lastName = e.target.lastName.value
    let email = e.target.email.value
    let message = e.target.message.value

    if (firstName && lastName && email && message) {
      Meteor.call('messages.insert', firstName, lastName, email, message, (err) => {
        if (!err) {
          e.target.firstName.value = ''
          e.target.lastName.value = ''
          e.target.email.value = ''
          e.target.message.value = ''
        }
      })
    }
  }

  render() {
    return (
      <form id="contact-page" className="container" onSubmit={this.handleSubmit.bind(this)}>
        <PageHeader title="Contact Me" />
          <div className="col-sm-6">
            <InputField type="text" placeholder="First Name" name="firstName" />
          </div>
          <div className="col-sm-6">
            <InputField type="text" placeholder="Last Name" name="lastName" />
          </div>
          <InputField type="email" placeholder="Email" name="email" />
          <MessageField placeholder="Message" name="message" />
          <Btn type="submit" className="btn btn-default pull-right" name="Submit" />
      </form>
    )
  }
}