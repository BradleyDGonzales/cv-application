import './App.css';
import React, { Component, useState } from 'react';
import Personal from './components/Personal';
import Education from './components/Education';
import Header from './components/Header';
import ResumePreview from './components/ResumePreview';
import uniqid from 'uniqid'
import Experience from './components/Experience';


class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: 'First',
      lastName: 'Last',
      title: 'Title',
      email: 'email@yourdomain.com',
      phoneNumber: 'Phone',
      description: 'Description',
      education: [],
      experience: [],
      btnClicked: false,
    }
    this.onCompChange = this.onCompChange.bind(this);

  }
  onCompChange(e, index) {
    switch (e.target.id) {
      case 'firstName':
        this.setState({
          firstName: e.target.value
        });
        break;
      case 'lastName':
        this.setState({
          lastName: e.target.value,
        })
        break;
      case 'title': {
        this.setState({
          title: e.target.value,
        })
        break;
      }
      case 'email':
        this.setState({
          email: e.target.value,
        })
        break;
      case 'phoneNumber':
        this.setState({
          phoneNumber: e.target.value,
        })
        break;
      case 'description':
        this.setState({
          description: e.target.value,
        })
        break;
      case `schoolName${index}`:
        this.state.education[index].schoolName = e.target.value;
        break;
      case `majorName${index}`:
        this.state.education[index].majorName = e.target.value;
        break;
      case `dateEnd${index}`:
        this.state.education[index].dateEnd = e.target.value;
        break;
      case `gpa${index}`:
        this.state.education[index].gpa = Number(e.target.value);
        break;
      case `companyName${index}`:
        this.state.experience[index].companyName = e.target.value;
        break;
      case `roleName${index}`:
        this.state.experience[index].roleName = e.target.value;
        break;
      case `roleDescription${index}`:
        this.state.experience[index].roleDescription = e.target.value;
        break;
      case `roleStartDate${index}`:
        this.state.experience[index].roleStartDate = e.target.value;
        break;
      case `roleEndDate${index}`:
        this.state.experience[index].roleEndDate = e.target.value
        break;
      default:
        return;
    }
  }
  addNewForm(e) {
    console.log(e.target.id);
    switch (e.target.id) {
      case 'eduButton':
        this.setState({
          education: [...this.state.education, []]
        })
        break;
      case 'expButton':
        this.setState({
          experience: [...this.state.experience, []]
        })
        break;
      default:
        return;
    }
    console.log(this.state.education)
  }

  render() {
    return (
      <div id='container'>
        <Header />
        <div id='main'>
          <Personal onCompChange={this.onCompChange} info={this.state} />
          <Education onCompChange={this.onCompChange} info={this.state} />
          <Experience onCompChange={this.onCompChange} info={this.state} />
          <div id='myButtons'>

            <button id='eduButton' type="button" onClick={(e) => this.addNewForm(e)}>Add education</button>
            <button id='expButton' type="button" onClick={(e) => this.addNewForm(e)}>Add work experience</button>
          </div>

        </div>
        <div id='renderedInfo'>
          <ResumePreview info={this.state} />
        </div>
      </div>
    )
  }
}
export default App;
