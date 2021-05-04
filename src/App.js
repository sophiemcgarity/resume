import './App.css';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import Banner from './Components/Banner';
import Main from './Components/Main';
import Navigation from './Components/Navigation';
import profileData from './profileData.json';

const TITLE = "Sophie McGarity | Portfolio"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bannerData : profileData.banner,
      educationData : profileData.education,
      socialData: profileData.social,
      projectsData: profileData.projects
    }
  }

  render() {

    return (
      <div className="App container">
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <Navigation />
        <Banner bannerData={this.state.bannerData}/>
        <Main educationData={this.state.educationData} socialData={this.state.socialData} projectsData={this.state.projectsData}/>
      </div>
    );
  }
}

export default App;
