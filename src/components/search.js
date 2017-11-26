import React, { Component } from 'react';
import fire, { auth, provider } from '../fire';
import axios from 'axios';

let database = fire.database();

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {searchResults:[]}

    
  }
  componentDidMount(){
    axios.get("https://api.whatismymovie.com/1.0/?api_key=5zVdDC5eYXQauihL&text=thor")
    .then(res => {
      console.log(res)
      const searchResults = res.children.map(obj => obj.data);
      console.log(searchResults);
      this.setState({ searchResults });
    });
  }

  searchForMovies(moviename) {
    this.props.source = "https://api.whatismymovie.com/1.0/?api_key=5zVdDC5eYXQauihL&text="+ moviename
    var th = this;
    this.serverRequest = 
      axios.get(this.props.source)
        .then(function(result) {    
          th.setState({
            persons: result.data.results
          });
        })
  }

  componentWillUnmount() {
  }


  // onStarClick(nextValue, prevValue, name) {
  //     this.setState({rating: nextValue});
  // }

  render() {
    
    console.log(this.state.searchResults);
    return (
      <div className="movie">
        <div className="movielist">
          <div className="moviedetails">          </div>
            <ul className="topMovies">
              {this.state.searchResults.map((movie, i) => 

                <div key={i}> 
                  <div className="movielist col-xs-12 col-sm-12 col-md-3 cards">
                    <img src={'https://image.tmdb.org/t/p/w640/'+movie.backdrop_path} className="poster" alt={movie.title}/>
                    <div className="moviedetails"> 
                        <div className="movieTitle">{movie.title}</div>
                        
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

export default Search;