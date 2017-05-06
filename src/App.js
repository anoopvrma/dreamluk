import React, { Component } from 'react';
import logo from './logo.svg';
import fblogo from './fblogo.png';
import background from './collage.jpg';
import './App.css';

var sectionStyle = {
  flex: 1,
  height: '100%',
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center'
};

function Header(){
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to DreamLuk.com</h2>
    </div>
  ); 
}

function FBlink(){
  return (
      <a href="http://facebook.com/logicjava.com" className="inline-block margin-mini"><img src={fblogo} height="42" width="42"/></a>
    );
}

function Section(props){
  return (
    <section style={sectionStyle}>
      {props.children}
    </section>
  );
}

function FloatingBox(props){
  return (
    <div className="floating-div">
      <div>
        {props.children}
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Section>
        <div className="App">
          <FloatingBox>
            <Header />
            <div className="App-intro center-box">
              <div className="center-helper"/>
              Get ready for new shopping experience. We are launching soon.<br/>
              Stay connected...<br/> 
              <FBlink />
            </div>
          </FloatingBox>
        </div>
      </Section>
    );
  }
}

export default App;
