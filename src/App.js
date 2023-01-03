import './App.css';
import React, { Component, useRef } from 'react';
import Personal from './components/Personal';
import Education from './components/Education';
import Header from './components/Header';
import ResumePreview from './components/ResumePreview';
import uniqid from 'uniqid'
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';



// const defaultEdu = [{schoolName: 'school', majorName: 'major', dateEnd: 'date', gpa: 0}]
class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: 'First',
      lastName: 'Last',
      title: 'Title',
      city: 'City',
      state: 'State',
      email: 'email@yourdomain.com',
      phoneNumber: 'Phone',
      description: 'Description',
      projects: [],
      experience: [],
      education: [],
      skills: [],
      btnClicked: false,
    }
    this.onCompChange = this.onCompChange.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);

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
      case 'city':
        this.setState({
          city: e.target.value,
        })
        break;
      case 'state':
        this.setState({
          state: e.target.value,
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
        let prevSchoolName = [...this.state.education];
        prevSchoolName[index].schoolName = e.target.value
        this.setState({ prevSchoolName })
        break;
      case `schoolCity${index}`:
        let prevSchoolCity = [...this.state.education];
        prevSchoolCity[index].schoolCity = e.target.value
        this.setState({ prevSchoolCity })
        break;
      case `schoolState${index}`:
        let prevSchoolState = [...this.state.education];
        prevSchoolState[index].schoolState = e.target.value
        this.setState({ prevSchoolState })
        break;
      case `majorName${index}`:
        let prevMajorName = [...this.state.education];
        prevMajorName[index].majorName = e.target.value
        this.setState({ prevMajorName })
        break;
      case `dateEnd${index}`:
        let prevEndDate = [...this.state.education];
        prevEndDate[index].dateEnd = e.target.value
        this.setState({ prevEndDate })
        break;
      case `gpa${index}`:
        let prevGPA = [...this.state.education];
        prevGPA[index].gpa = e.target.value
        this.setState({ prevGPA })
        break;
      case `companyName${index}`:
        let prevCompanyName = [...this.state.experience];
        prevCompanyName[index].companyName = e.target.value;
        this.setState({ prevCompanyName })
        break;
      case `companyCity${index}`:
        let prevCompanyCity = [...this.state.experience];
        prevCompanyCity[index].companyCity = e.target.value;
        this.setState({ prevCompanyCity })
        break;
      case `companyState${index}`:
        let prevCompanyState = [...this.state.experience];
        prevCompanyState[index].companyState = e.target.value;
        this.setState({ prevCompanyState })
        break;
      case `roleName${index}`:
        let prevRoleName = [...this.state.experience];
        prevRoleName[index].roleName = e.target.value;
        this.setState({ prevRoleName })
        break;
      case `roleDescription${index}`:
        let prevRoleDescription = [...this.state.experience];
        prevRoleDescription[index].roleDescription = e.target.value;
        this.setState({ prevRoleDescription })
        break;
      case `roleStartDate${index}`:
        let prevRoleStartDate = [...this.state.experience];
        prevRoleStartDate[index].roleStartDate = e.target.value;
        this.setState({ prevRoleStartDate })
        break;
      case `roleEndDate${index}`:
        let prevRoleEndDate = [...this.state.experience];
        prevRoleEndDate[index].roleEndDate = e.target.value;
        this.setState({ prevRoleEndDate })
        break;
      case `projectName${index}`:
        let prevProjectName = [...this.state.projects];
        prevProjectName[index].projectName = e.target.value;
        this.setState({ prevProjectName })
        break;
      case `projectDescription${index}`:
        let prevProjectDescription = [...this.state.projects];
        prevProjectDescription[index].projectDescription = e.target.value;
        this.setState({ prevProjectDescription })
        break;
      case `projectLink${index}`:
        let prevProjectLink = [...this.state.projects];
        prevProjectLink[index].projectLink = e.target.value;
        this.setState({ prevProjectLink })
        break;
      case `skillName${index}`:
        let prevSkills = [...this.state.skills]
        prevSkills[index].skillName = e.target.value;
        this.setState({ prevSkills })
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
      case 'projButton':
        this.setState({
          projects: [...this.state.projects, []]
        })
        break;

      case 'skillsButton':
        this.setState({
          skills: [...this.state.skills, []]
        })
        break;
      default:
        return;
    }
    console.log(this.state.education)
  }
  handleSubmitButton() {
    document.getElementById('main').remove();
    document.getElementById('headerTag').remove();
    const myContainer = document.getElementsByClassName('container')[0];
    myContainer.classList.add('submit');
  }
  render() {
    return (
      <div className='container'>
        <Header />
        <div id='main'>
          <Personal onCompChange={this.onCompChange} info={this.state} />
          <Projects onCompChange={this.onCompChange} info={this.state} />
          <Education onCompChange={this.onCompChange} info={this.state} />
          <Experience onCompChange={this.onCompChange} info={this.state} />
          <Skills onCompChange={this.onCompChange} info={this.state} />
          <div id='myButtons'>
            <button id='eduButton' type="button" onClick={(e) => this.addNewForm(e)}>Add education</button>
            <button id='expButton' type="button" onClick={(e) => this.addNewForm(e)}>Add work experience</button>
            <button id='projButton' type='button' onClick={(e) => this.addNewForm(e)}>Add a project</button>
            <button id='skillsButton' type='button' onClick={(e) => this.addNewForm(e)}>Add a skill</button>
            <button id='submitButton' type='button' onClick={this.handleSubmitButton}>Submit</button>
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