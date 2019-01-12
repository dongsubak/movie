import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

class App extends Component {
  state = {
  }

  componentDidMount(){
    this._getMovies();
    /*
    fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err)); */

    /* setTimeout(()=>{
      this.setState({
        movies: [
          {
            title:"Matrix",
            poster:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
          },
          {
            title:"Oldboy",
            poster:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
          }
        ]
      })
    }, 1000) */
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie
        title={movie.title}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
        />
    })
    return movies;
  }

  _getMovies = async () => {
      const movies = await this._callApi();
      this.setState({ movies });
  }

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
    // return fetch('http://www.omdbapi.com/?i=tt3896198&apikey=9e9350f4&page=1')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err));
  }


  // callApi 끝날때까지 기다린다. movies 설정을. 그래서 setState로 callApi가 완료되기를 기다린다.

  render() {
    return (
      <div className={this.state.movies ? "App" : "App--loading"}>
         {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
