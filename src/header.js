import React, { Component } from 'react';
import fire, { auth, provider } from './fire';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      messages: [],
      user: null // <-- user authentication
    }; // <- set up react state
    this.login = this.login.bind(this); // <-- add this line
    this.logout = this.logout.bind(this); // <-- add this line    
  }

  handleChange(e) {
    /* ... */
  }
  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }
  login() {
    auth.signInWithPopup(provider) 
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
  }

  render() {
    return (
      <div className="header">

        <div className="logo">Binge</div>

        <div className="centermenu">
          <ul>
            <li>Queue</li>
            <li>Popular</li>
            <li>Newly Added</li>
            <li>Discover</li>
            <li>Category</li>
          </ul>
        </div>
        {this.state.user ?
        <div className="profile">
          <div className='container'>
              <div>{this.state.user.displayName || this.state.user.email} </div>
          </div>
          <div className='user-profile'>
             <img className='profilepic' src={this.state.user.photoURL} />
          </div>
        </div>
          :
          <div className='wrapper'>
            <p>You must be logged in to see the potluck list and submit to it.</p>
          </div>
        }

      </div>
    );
  }
}

export default Header;