import React, { Component } from 'react';
import fire, { auth, provider } from '../fire';
import StarRatingComponent from 'react-star-rating-component';

let database = fire.database();

class Movie extends Component {
  constructor(props) {
    super(props);

    // this.database = fire.database().ref().child('recommendation');
    this.database = fire.database().ref().child('movies');

    this.state = { 
      movies: [],
      id: null,
      recommendation: 2,
      messages: [],
      user: null // <-- user authentication
    }; // <- set up react state
  }

  componentDidMount(){
    this.database.on('value', snap => {
      // console.log(snap.val());
      this.setState({
        // recommendation : snap.val()
           // id: snap.val()
           movies: snap.val()
      })
    })
  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }


  onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue});
  }

  render() {
    const { rating } = this.state;
    console.log(this.state.movies);
    return (
      <div className="movie">
        <div className="movielist">
          <div className="moviedetails">          </div>
            <ul className="topMovies">
              {this.state.movies.map((movie, i) => 

                <div key={i}> 
                  <div className="movielist col-xs-12 col-sm-12 col-md-3 cards">
                    <img src={'https://image.tmdb.org/t/p/w640/'+movie.backdrop_path} className="poster" alt={movie.title}/>
                    <div className="moviedetails"> 
                        <div className="movieTitle">{movie.title}</div>
                        <div>{movie.genre}</div>
                        <div>{movie.vote_average / 2}</div>
                        <StarRatingComponent 
                              name="rate1" 
                              starCount={5}
                              value={Math.round(movie.vote_average / 2)}
                              onStarClick={this.onStarClick.bind(this)}
                        />
                    </div>
                  </div>
                </div>
                )}
            </ul>
            <div>

            </div>
        </div>
      </div>
    );
  }
}

export default Movie;