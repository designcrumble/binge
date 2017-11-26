import React, { Component } from 'react';
import fire, { auth, provider } from './fire';
import Movie from './components/movie';
import StarRatingComponent from 'react-star-rating-component';
import Recommendations from './components/recommended'
class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      rating: 1,
      messages: [],
      user: null // <-- user authentication
    }; // <- set up react state
  }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

  render() {
    const { rating } = this.state;
    return (
      <div className="hero">
        <div className="title">Movies popular among your friends</div>

        <div className="sidebar">
          <img src="feed.png" alt=""/>
          <img src="feed.png" alt=""/>
          <img src="feed2.png" alt=""/>
          <img src="feed.png" alt=""/>
          <img src="feed2.png" alt=""/>
        </div>

        <div className="topMovies">
            <Movie />
        </div>

      </div>
    );
  }
}

export default Hero;