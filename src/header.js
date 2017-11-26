import React, { Component } from 'react';
import fire, { auth, provider } from './fire';
import Menu from './components/menu';

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
      <div className="header row">

        <div className="logo col-md-4"><img className="logo-img" src="logo.png" alt=""/></div>

        <div className="centermenu col-md-4">
          <ul>
            <li>Queue</li>
            <li>Popular</li>
            <li>Newly Added</li>
            <li>Discover</li>
            <li>Category</li>
          </ul>
        </div>

        <div className="user-data col-md-4">
        {this.state.user ?
        <div className="profile">
          <div className='something'>
              <div>{this.state.user.displayName || this.state.user.email} </div>
          </div>
          <div className='user-profile'>
             <img className='profilepic' src={this.state.user.photoURL} />
          </div>

        </div>
          :
          <div className='wrapper'>
            <p className="announcement">You must be logged in to see your friend's feed</p>
          </div>
        }

        {this.state.user ?
            <button className="logout" onClick={this.logout}>Log Out</button>                
            :
            <button className="logout" onClick={this.login}>Log In</button>              
          }

        </div>

      </div>
    );
  }
}

export default Header;