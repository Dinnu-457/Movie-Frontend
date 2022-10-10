import React, { Component } from 'react';
import 'bootstrap';
import '../CSS/Movie.css';
import MovieService from '../services/MovieService';
import m1 from '../images/adip.jpg';
import m2 from '../images/karthi.jpg';
import m3 from '../images/ps.jpg';
import m4 from '../images/RRR.jpg';
import m5 from '../images/sita.jpg';
import star from '../images/star.png';
class Movies extends Component {
  constructor(props){
    super(props)
    this.state={
      movies:[],
      images : [{key : 1 , value : m1},{key:2,value:m2},{key:3,value:m3},{key:4,value:m4},{key:5,value:m5}],
      star:[{key:1,value:3.9},{key:1,value:3.9},{key:1,value:4},{key:1,value:4.5},{key:1,value:4.1}],
      i:0,j:0
    }

  }
  componentDidMount(){
    MovieService.getMovies().then((res)=>{
this.setState({movies:res.data});
    });
}
    render() {
        return (
            <div className='box' style={{color:"white"}}>
        {
        this.state.movies.map(
          movie =>
          <div key={movie.no}  className='box_movie'>
            <div class="image"><center><img src={this.state.images[this.state.i++].value}></img></center>
            <div className="img_down">
            <h5>{movie.name}</h5>
            <h6>Genre:{movie.genre}</h6>
            <div className='rating'><h5>{this.state.star[this.state.j++].value} <img src={star}></img></h5></div>
            </div>
            {/* <a href="http://127.0.0.1:5501/src/show.html">Click here to book tickets</a>
       <h3 id="pay"></h3> */}
            </div>
         
          </div>
          
        )
        
}
            </div>
        );
}
}
export default Movies;