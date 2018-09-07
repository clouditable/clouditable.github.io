import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">

          <div className="three columns">

            <img className="profile-pic" src="images/profilepic.jpg" alt="" />

          </div>

          <div className="nine columns main-col">

            <h2>About Me</h2>
            <p style={{color: "white"}}>
              {
                resumeData.aboutme
              }
            </p>

            <div className="row">

              <div className="columns contact-details">

                <h2>Contact Details</h2>
                <p className="address">
                  <span style={{color: "white"}}>{resumeData.name}</span>
                  <br></br>
                  <span style={{color: "white"}}>
                    {resumeData.address}
                  </span>
                  <br></br>
                  <span style={{color: "white"}}>{resumeData.website}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
