import React, { Component } from 'react';
import fire, { auth, provider } from './fire';
import Movie from './components/movie';
import StarRatingComponent from 'react-star-rating-component';

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

        <div className="title">Top Movies Around You</div>

        <div className="trending">

        </div>

        <div className="topMovies">
          <ul>
            <li>
              <div className="movielist">
                <Movie />
              </div>
            </li>
            <li>
              <div className="movielist">
                <Movie />
              </div>
            </li>
            <li>
              <div className="movielist">
                <Movie />
              </div>
            </li>
            <li>
              <div className="movielist">
                <Movie />
              </div>
            </li>
            <li>
              <div className="movielist">
                <Movie />
              </div>
            </li>
          </ul>
        </div>

      </div>
    );
  }
}

export default Hero;