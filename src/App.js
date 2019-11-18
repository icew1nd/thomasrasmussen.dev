import React, { Component } from "react";

import profilePic from "./assets/0.jpeg";
import "./App.css";
import { SocialIcon } from "react-social-icons";
import Trianglify from "trianglify";
import TypeOut from "react-typeout";
import { throttle, debounce } from "throttle-debounce";

const words = [
  "By the way this page is open source and available on GitHub 🎉.",
  "Hey! I'm Thomas Kjær-Rasmussen, I work with backend, frontend and anything in between.",
  "Send me a message if you need anything 🔥."
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { background: null };
    // Test
  }

  componentDidMount() {
    // window.addEventListener("resize", throttle(500, this.trianglifyBackground));
    this.trianglifyBackground();
  }
  trianglifyBackground = (withFade = false) => {
    var pattern = new Trianglify({
      width: window.innerWidth,
      height: window.innerHeight
    });
    if (withFade) {
      this.setState({
        changingBackground: true,
        background: pattern.png()
      });

      setTimeout(() => {
        this.setState({
          changingBackground: false
        });
      }, 1000);
    } else {
      this.setState({
        background: pattern.png()
      });
    }
  };
  render() {
    console.log(this.state.changingBackground);
    const style = {
      backgroundImage: "url(" + this.state.background + ")",
      height: window.innerHeight + "px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    };

    return (
      <div
        className={this.state.changingBackground ? "fade-out-in" : "App"}
        style={style}
      >
        <header className="social-header fade-in">
          <img
            onMouseEnter={this.trianglifyBackground}
            alt="Hey"
            class="icon profile-pic"
            src={profilePic}
          />
          <div class="icon wiggle">
            <SocialIcon url="https://twitter.com/ThomasR______" />
          </div>
          <div class="icon wiggle">
            <SocialIcon url="https://medium.com/@vvvsejvvv" />
          </div>
          <div class="icon wiggle">
            <SocialIcon url="https://www.facebook.com/profile.php?id=100001125740147" />
          </div>
          <div class="icon wiggle">
            <SocialIcon url="https://www.linkedin.com/in/thomas-kj%C3%A6r-rasmussen-8428a954/" />
          </div>
          <div class="icon wiggle">
            <SocialIcon url="https://github.com/icew1nd" />
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 120,
              left: 230,
              alignSelf: "right"
            }}
          >
            <div class="speech-bubble">
              <TypeOut
                typeSpeed={50}
                rewindSpeed={20}
                pauseSpeed={4000}
                words={words}
              />
              {/* Hey! I'm Thomas Kjær-Rasmussen and this is my place on the web */}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
