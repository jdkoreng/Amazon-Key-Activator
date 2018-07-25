import React, { Component } from 'react';

import './App.css';
import ActivationFormComponent from './components/ActivationFormComponent';
console.log('PROCESS ENV', process.env);

const activationUrl = (process.env.NODE_ENV === 'development')
? 'http://localhost:3001/activate'
: 'https://shrouded-journey-16655.herokuapp.com/activate';

class App extends Component {
  render() {
    return (
<div>
    <header className="sunset-header"  style={{'textAlign': 'center'}}  style={{'width': '100%'}} style={{'height': '150px'}} style={{'backgroundColor': 'black'}}>
        <div style={{'textAlign': 'center'}}    ><img src="/assets/images/sunset-logo.png"  style={{'textAlign': 'center'}} style={{'height': '133px'}} style={{'width': '234px'}} className="logo-img" /></div>
    </header>

 

<div className="row">
    <div className ="col-md-12 mid-col text-center">
        <h1  style={{'height': '100%'}} style={{'fontSize': '40px'}} id="search-bikes">Get Started With NeXT Live 365!</h1>
    </div>
        
    <ActivationFormComponent
      activationUrl={activationUrl}
    />

        <div className="row">
                <div className="col-md-3 col-sm-12">
                        <div><img src="/assets/images/next-logo.png" alt="#" height="143" width="328" className="next-img" /></div>
                </div>
                <div className="col-md-9 col-sm-12">
                    <div>
                        <br> 
                        </br>
                        <span>Demand for trained and certified technical professionals is growing, and the rise of digital is transforming the way we learn. </span>
                        <br> 
                        </br>
                        <span style={{'fontSize': '15px'}}>To stay competitive in a global, fast-paced job market, it’s imperative to stay up-to-date on emerging technologies and ensure your skills are relevant. </span>
                         
                        <br> 
                        </br>
                        <p style={{'textAlign': 'justify'}}><span style={{'fontSize': '15px'}}><strong>neXT LIVE 365</strong> is available to help you maintain your skills and gain knowledge with quick, easy access to training on the entire portfolio of SLI products and technologies.</span></p>

                    </div>
                </div>
        </div>   


        <div className="row">
                <div className="col-md-3 col-sm-12">
                        <img src="/assets/images/amazon-logo.png" alt="#" height="143" width="328" className="next-img" /></div>
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
