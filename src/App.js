import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from  './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import resumeData from './resumeData';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Route exact path={`/header`} render={ (routerProps) => <Header resumeData={resumeData} routerProps={routerProps} /> } />
       <Route exact path={`/about`} render={ (routerProps) => <About resumeData={resumeData} routerProps={routerProps} /> } />
       <Route exact path={`/resume`} render={ (routerProps) => <Resume resumeData={resumeData} routerProps={routerProps} /> } />
       <Route exact path={`/portfolio`} render={ (routerProps) => <Portfolio resumeData={resumeData} routerProps={routerProps} /> } />
       <Route exact path={`/testimonials`} render={ (routerProps) => <Testimonials resumeData={resumeData} routerProps={routerProps} /> } />
       <Route exact path={`/contactUs`} render={ (routerProps) => <ContactUs resumeData={resumeData} routerProps={routerProps} /> } />
       <Route exact path={`/footer`} render={ (routerProps) => <Footer resumeData={resumeData} routerProps={routerProps} /> } />
      </div>
    );
  }
}

export default App;
