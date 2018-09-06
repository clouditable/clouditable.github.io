import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from  './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Route exact path={} render={ (routerProps) => <Header resumeData={resumeData}/> } />
       <Route exact path={} render={ (routerProps) => <About resumeData={resumeData}/> } />
       <Route exact path={} render={ (routerProps) => <Resume resumeData={resumeData}/> } />
       <Route exact path={} render={ (routerProps) => <Portfolio resumeData={resumeData}/> } />
       <Route exact path={} render={ (routerProps) => <Testimonials resumeData={resumeData}/> } />
       <Route exact path={} render={ (routerProps) => <ContactUs resumeData={resumeData}/> } />
       <Route exact path={} render={ (routerProps) => <Footer resumeData={resumeData}/> } />
      </div>
    );
  }
}

export default App;
