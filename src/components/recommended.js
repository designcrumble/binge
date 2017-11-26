// import React, { Component } from 'react';
// import fire, { auth, provider } from '../fire';
// import StarRatingComponent from 'react-star-rating-component';
// import Movie from 'movie';
// let database = fire.database();

// class Recommended extends Component {
//   constructor(props) {
//     super(props);

//     // this.database = fire.database().ref().child('recommendation');
//     this.database = fire.database().ref().child('recommendations');

//     this.state = { 
//       movies: [],
//       id: null,
//       recommendations: [],
//       messages: [],
//       user: null // <-- user authentication
//     }; // <- set up react state
//   }

//   componentDidMount(){
//     this.database.on('value', snap => {
//       // console.log(snap.val());
//       this.setState({
//         // recommendation : snap.val()
//            // id: snap.val()
//            recommendations: snap.val()
//       })
//     })
//   }

//   componentWillUnmount() {
//     this.firebaseRef.off();
//   }


//   onStarClick(nextValue, prevValue, name) {
//       this.setState({rating: nextValue});
//   }

//   render() {
//     const { rating } = this.state;
//     console.log(this.state.recommendations);
//     return (
//       <div className="movie">
//         <div className="movielist">
//           <div className="moviedetails">          </div>
//             <ul className="topMovies">
//               {this.state.recommendations.map((recommendation, i) => 
//                 <div key={i}> 
//                   <div className="movielist col-xs-12 col-sm-12 col-md-3 cards">
//                     <img src={'https://image.tmdb.org/t/p/w640/'+recommendation.backdrop_path} className="poster" alt={database.orderByChild(movie.title).equalTo(recommendation.movieid)}/>
//                     <div className="moviedetails"> 
//                         <div className="movieTitle">{recommendation.title}</div>
//                         <div>{recommendation.movieid}</div>
//                         <div>{recommendation.vote_average / 2}</div>
//                         <StarRatingComponent 
//                               name="rate1" 
//                               starCount={5}
//                               value={recommendation.vote_average / 2}
//                               onStarClick={this.onStarClick.bind(this)}
//                         />
//                     </div>
//                   </div>
//                 </div>
//                 )}
//             </ul>
//             <div>

//             </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Recommended;