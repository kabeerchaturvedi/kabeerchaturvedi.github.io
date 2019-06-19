import React from 'react';
import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="container">
      <script>
        <link href='https://fonts.googleapis.com/css?family=Caveat' rel='stylesheet' />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </script>
      <div className="div1">
        <img src={require('../src/A.jpg')} alt="profile" className="IM" />
        <div className="center">
          <h4 ><p><em>Hey, I'm</em></p></h4>
          <p><strong>Kabeer Chaturvedi</strong></p>
        </div>
      </div>
      <div className="div2">
        <div>
          <div >
            <div>
              <h2 >Things done so far</h2>
              <img src={require('../src/cg-logo.jpg')} alt="card1" className="IMG1" />
            </div>
          </div>
          <div className="text2">
            <div class="facility-description">
              <span>Capgemini</span>
              <div class="facility-title">
                <span>Software Engineer</span>
              </div>
              <div class="facility-content">
                <span>My team works on building amazing user experiences for customers. I helped out in
                  supporting the application which led me to learn from top-to-bottom implementation of the application.
                  The technologies used in the application are Angular,Hibernate,Spring.
                                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div >
            <div >
              <img src={require('../src/EY-logo.png')} alt="card1" className="IMG2" />
            </div>
          </div>
          <div >
            <div class="facility-description">
              <span>Ernst & Young</span>
              <div class="facility-title">
                <span>Internship</span>
              </div>
              <div class="facility-content">
                <span>During the couple of months, I queried SQL data to create user analytics reports which represented the data for different subsets.
                  I'm grateful for the time I spent with these folks, whose work gave me a glimpse into the challenges and rewards of a corporate employee's life.
                  The technologies that I used for creating a dashboard was NodeJS,MySQL,HTML,CSS.
                                  </span>
              </div>
            </div>
          </div>
        </div>
        <h2>Education</h2>
        <div>
          <div >
            <div >
              <img src={require('../src/College.png')} alt="card1" className="IMG2" />
            </div>
          </div>
          <div >
            <div class="facility-description">
              <span>SKIT</span>
              <div class="facility-title">
                <span>Graduation</span>
              </div>
              <div class="facility-content">
                <span>SKIT presented unprecedented scale and diversity of opportunity.My four years of phenomenal professors across the disciplines pushed me to expand, challenge, and adjust my worldview.
                   I pursued my Bachelors in Information Technology.
                                  </span>
                <p><a href="http://www.skit.ac.in/" className="desc1">
                  <strong>College Website</strong>
                </a></p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div >
            <div >
              <img src={require('../src/School.png')} alt="card1" className="IMG2" />
            </div>
          </div>
          <div >
            <div class="facility-description">
              <span>St. Anselms's</span>
              <div class="facility-title">
                <span>Internship</span>
              </div>
              <div class="facility-content">
                <span>During the couple of months, I queried SQL data to create user analytics reports which represented the data for different subsets.
                  I'm grateful for the time I spent with these folks, whose work gave me a glimpse into the challenges and rewards of a corporate employee's life.
                  The technologies that I used for creating a dashboard was NodeJS,MySQL,HTML,CSS.
                                  </span>
                <p><a href="http://stanselmmansarovar.in/" className="desc2">
                  <strong>School Website</strong>
                </a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div3">
        <h2>Skills</h2>
        <table className="table table-striped table-bordered">
          <tr>
            <td>HTML</td>
            <td>
              
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star-half-o"></span>
              <span class="fa fa-star-o"></span>
              <span class="fa fa-star-o"></span>
            </td>
         
            <td>CSS</td>
            <td>
              
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star-half-o"></span>
              <span class="fa fa-star-o"></span>
              <span class="fa fa-star-o"></span>
              <span class="fa fa-star-o"></span>
            </td>
          </tr>
          <tr>
            <td>Angular</td>
            <td>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star-o"></span>
              <span class="fa fa-star-o"></span>
              <span class="fa fa-star-o"></span>
              
            </td>
          
            <td>React</td>
            <td>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star-o"></span>
              <span class="fa fa-star-o"></span>
              
            </td>
</tr>
<tr>
            <td>NodeJS</td>
            <td>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star-half-o"></span>
              <span class="fa fa-star-o"></span>
              <span class="fa fa-star-o"></span>
            </td>
          
            <td>MongoDB</td>
            <td>
              
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star-o"></span>
              <span class="fa fa-star-o"></span>
              <span class="fa fa-star-o"></span>
            </td>
</tr>
<tr>
            <td>MySQL</td>
            <td>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star-o"></span>
              <span class="fa fa-star-o"></span>
            </td>
          
            <td>C/C++</td>
            <td>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star-o"></span>
              <span class="fa fa-star-o"></span>
              <span class="fa fa-star-o"></span>
            </td>
            </tr>
            <tr>
            <td>Bootstrap</td>
            <td>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star-o"></span>
              <span class="fa fa-star-o"></span>
              <span class="fa fa-star-o"></span>
            </td>
         
            <td>Java</td>
            <td>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star-o"></span>
              <span class="fa fa-star-o"></span>
              <span class="fa fa-star-o"></span>
              <span class="fa fa-star-o"></span>
            </td>
          </tr>
        </table>
      </div>
      <div className="div4">
        <strong>Projects done</strong>
        <div>
          <div >
            <div >
              <img src={require('../src/Normal.png')} alt="card1" className="IMG2" />
            </div>
          </div>
          <div >
            <div class="facility-description">
              <span>Ernst & Young</span>
              <div class="facility-content">
                <span>Developed a dashboard with data in MySQL. NodeJS and html were used to pass the data
                      to UI. Different graphs were designed according to different requirements.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div >
            <div >
              <img src={require('../src/Project.png')} alt="card1" className="IMG2" />
            </div>
          </div>
          <div >
            <div class="facility-description">
              <span>SKIT</span>
              <div class="facility-content">
                <span>Developed a startup application for the colleges and different teams.Technologies used were
                  HTML5,CSS,JavaScript.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div5">
        <div>
          <footer className="footer-basic">
            <span className="symbol">
              <a className="fa fa-facebook-square" href="https://www.facebook.com/ChaturvediKabeer"></a>
            </span>
            <span className="symbol">
              <a className="fa fa-twitter-square" href="https://twitter.com/ckabeer07"></a>
            </span>
            <span className="symbol">
              <a className="fa fa-linkedin-square" href="www.linkedin.com/in/kabeerchaturvedi"></a>
            </span>
            <span className="symbol">
              <a className="fa fa-github-square" href="https://github.com/kabeerchaturvedi"></a>
            </span>
            <span className="symbol">
              <a className="fa fa-instagram" href="https://www.instagram.com/kabeerchaturvedi/"></a>
            </span>

          </footer>
        </div>
      </div>

    </div>
  );
}

export default App;
