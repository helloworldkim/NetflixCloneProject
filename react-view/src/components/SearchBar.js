import React, { Component } from 'react';
import * as Icon from 'react-bootstrap-icons';

class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            movies: [],
            title: '',
            searchTerm: '',
            totalResults: 0,
        }
        this.apiKey = '1027a01020b01c3266e0531dc4542a8a'
    }
    
    handleChange = (e) => {
      this.setState({searchTerm: e.target.value})
    }

    moveSearchMovie = () => {
        document.location.href='searchMovie';
    }

    handleSubmit = (e) => {
      e.preventDefault();
      if (sessionStorage.getItem("movies") != null) {
          sessionStorage.removeItem("movies");
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
          .then(data => data.json())
          .then(data => {
            console.log(data);
            // this.setState({movies: [data.results], totalResults: data.total_results})  //배열의 모든내용을 [...data.results] 배열로 가져온다.
            this.setState({movies: [data.results]})
            window.sessionStorage.setItem("movies", JSON.stringify(this.state.movies));
            this.moveSearchMovie();
            // setItem에서 데이터값을 저장하고난다음 무브서치무비함수를 실행
        })
          
      } else if (sessionStorage.getItem("movies") == null) {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
          .then(data => data.json())
          .then(data => {
            console.log(data);
            // this.setState({movies: [data.results], totalResults: data.total_results})  //배열의 모든내용을 [...data.results] 배열로 가져온다.
            this.setState({movies: [data.results]})
            window.sessionStorage.setItem("movies", JSON.stringify(this.state.movies));
            this.moveSearchMovie();
            // setItem에서 데이터값을 저장하고난다음 무브서치무비함수를 실행
          })
      }
        // this.props.handleFormSubmit(this.state.searchTerm);        
    }

    render() {
        return (
            <div>
                <form className="form-inline" action="" onSubmit={this.handleSubmit}>
                    <div className="input-field0">
                        <input
                            className="form-control mr-sm-2"
                            type="text" placeholder="Search"
                            onChange={this.handleChange}
                            // value={this.state.searchTerm}
                        />
                        <button
                            className="btn btn-success"
                            type="submit"
                            // onClick={this.moveSearchMovie}
                            // 여기서 쓰면 버튼을 눌렀을때 
                            // 핸들서브밋과 무브서치무비를 
                            // 같이 실행해서 데이터를 받기전에 
                            // 넘어가는 경우가생김 그걸방지하기위해서 
                            // 데이터를 받고난다음에 넘어가도록 만들어둠
                        >
                            <Icon.Search/>
                        </button>
                            {/* <SearchMovie movies={this.state.movies} /> */}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;