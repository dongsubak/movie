import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';



class Movie extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Movie">
        <div className="Movie__Column">
          <MoviePoster poster={this.props.poster} alt={this.props.title}/>
        </div>
        <div className="Movie__Column">
            <h1> {this.props.title} </h1>
            <div className="Movie__Genres">
              {this.props.genres.map((genre, index)=> <MovieGenre genre={genre} key={index} />)}
            </div>
            <div className="Movie__Synopsis">
              <LinesEllipsis
                text={this.props.synopsis}
                maxLine='3'
                ellipsis='...'
                trimRight
                basedOn='letters'
              />
            </div>
        </div>

      </div>
    );
  }
}

class MoviePoster extends Component{
  render() {
    return (
      <img src={this.props.poster} alt={this.props.alt} title={this.props.alt} className="Movie__Poster"/>
    );
  }
}


//dumb Component - no props, no state 위에 class MoviePoster와 같아.
function MovieGenre({genre}){
  return (
    <span className="Movie__Genre">{genre}</span>
  );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};
MovieGenre.propTypes = {
    poster: PropTypes.string.isRequired
};

export default Movie;
