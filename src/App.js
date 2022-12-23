import './App.css';
import React, { Component, useState } from 'react';
import Personal from './components/Personal';
import Education from './components/Education';
import Header from './components/Header';
import ResumePreview from './components/ResumePreview';
import RenderInfo from './components/RenderInfo';
import RenderEducation from './components/RenderEducation';

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: 'First',
      lastName: 'Last',
      email: 'Email',
      phoneNumber: 'Phone',
      description: 'Description',
      isDefault: true,
    }
  }
  render() {
    return (
      <div className='testersbro1'>
        <Header />
        <div className="testersbro2">
          <Personal />
          <Education />
        </div>
        <div id='renderedInfo'>
          <ResumePreview info={this.state} />
          {/* {currentDiv} */}

        </div>
      </div>
    )
  }
}
export default App;
