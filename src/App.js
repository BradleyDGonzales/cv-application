import './App.css';
import { Component } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Header from './components/Header';
import FinalInput from './components/FinalInput';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <div className='mainInput'>
            <PersonalInfo />
            <Education />
          </div>
          <div className='finalInput'>test
          {/* <FinalInput /> */}
          {/* thinking that FinalInput should render everything starting from underneath this line but idk*/}
          </div>
      </div>
    )
  }
}

export default App;
