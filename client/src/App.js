import React, { Component } from 'react';

import './App.css';
import ActivationFormComponent from './components/ActivationFormComponent';

class App extends Component {
  render() {
    return (
<div>
    <header className="sunset-header">
        <div><img src={("../../public/assets/images/sunset-logo.png")} alt="#" height="133" width="264" className="logo-img" /></div>
    </header>


<div className="row">
    <div className ="col-md-12 mid-col text-center">
        <h1 id="search-bikes">Get Started With NeXT Live 365!</h1>
    </div>
        
    <ActivationFormComponent />

        <div className="row">
                <div className="col-md-3 col-sm-12">
                        <div><img src={("../../public/assets/images/next-logo.png")} alt="#" height="143" width="328" className="next-img" /></div>
                </div>
                <div className="col-md-9 col-sm-12">
                    <p>
                        <br> 
                        </br>
                        <span>Demand for trained and certified technical professionals is growing, and the rise of digital is transforming the way we learn. </span>
                        <span style={{'fontSize': '10px'}}>To stay competitive in a global, fast-paced job market, it’s imperative to stay up-to-date on emerging technologies and ensure your skills are relevant. </span>
                         
                        <br> 
                        </br>
                        <p style={{'textAlign': 'justify'}}><span style={{'fontSize': '10px'}}><strong>neXT LIVE 365</strong> is available to help you maintain your skills and gain knowledge with quick, easy access to training on the entire portfolio of SLI products and technologies.</span></p>

                    </p>
                </div>
        </div>   


        <div className="row">
                <div className="col-md-3 col-sm-12">
                        <img src={("../../public/assets/images/amazon-logo.png")} alt="#" height="143" width="328" className="next-img" /></div>
                </div>
                <div className="col-md-9 col-sm-12">
                    <br>
                    </br>
                    <p>To begin your NeXT 365 journey, simply enter your activation code exactly as it appears on your card mailed from Amazon, along with some basic information.

                            You will receive an automated email from "Jkorengold@sunsetlearning.com" with your login information and further instructions within moments!
                            
                            In most cases your account will be active within 24 hours.
                            
                            We look forward to having you in our comunity!
                    </p>
                </div>
        </div> 
        </div>

    );
  }
}

export default App;
