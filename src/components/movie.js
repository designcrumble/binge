import React, { Component } from 'react';
import fire, { auth, provider } from '../fire';
import StarRatingComponent from 'react-star-rating-component';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      rating: 0,
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
      <div className="movie">
        <div className="movielist">
          <img src="poster.jpg" alt="" className="poster"/>
          <div className="moviedetails">
            <div>Name</div>
            <div>Genre</div>
            <div>Rating</div>
            <div>
              <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;