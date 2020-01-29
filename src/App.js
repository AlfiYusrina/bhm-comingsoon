import React from 'react';
import logo from './logo.svg';
import './App.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faFacebookF} from '@fortawesome/free-brands-svg-icons'
library.add(faInstagram, faFacebookF);
dom.watch();
class App extends React.Component{
  render() {
    return(
      <div className="App">
        <header className="header">
          <div className="wrapper">
          <img src={logo} className="App-logo" alt="logo" />
          <div >
            <h1>
              Coming soon...
            </h1>
            <div>
              <a className="social-item fb" title="facebook" href="https://www.facebook.com/blackhistorymonthbelgium/" target="_blank"><i className="fab fa-facebook-f"></i></a>
              <a className="social-item ig" title="instagram" href="https://www.instagram.com/bhmbelgium/"  target="_blank"><i className="fab fa-instagram"/></a>
            </div>
          </div>
          </div>
        </header>
      </div>
    )
  }
}

export default App;
