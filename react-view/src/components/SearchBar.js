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
          //재검색할때 앞서 검색된 데이터들을 세션값에서 지우고 다시 검색
          sessionStorage.removeItem("movies");
          if(this.state.searchTerm !== '') {
              fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
              .then(data => data.json())
              .then(data => {
                console.log(data);
                this.setState({movies: [data.results]})
                window.sessionStorage.setItem("movies", JSON.stringify(this.state.movies));
                this.moveSearchMovie();
                // setItem에서 데이터값을 저장하고난다음 무브서치무비함수를 실행
            })
          }// if end
          else {
              alert('검색어를 입력해 주세요');
          }// else end
        }// if end
      else if (sessionStorage.getItem("movies") == null) {
            if(this.state.searchTerm !== '') {
                fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
                  .then(data => data.json())
                  .then(data => {
                    console.log(data);
                    this.setState({movies: [data.results]})
                    window.sessionStorage.setItem("movies", JSON.stringify(this.state.movies));
                    this.moveSearchMovie();
                    // setItem에서 데이터값을 저장하고난다음 무브서치무비함수를 실행
                  })
              }//if end 
              else {
                  alert('검색어를 입력해 주세요');
              }// else end
            }//else if end
    }//handlesubmit end

    render() {
        return (
            <div>
                <form className="form-inline" action="" onSubmit={this.handleSubmit}>
                    <div className="input-field0">
                        <input
                            className="form-control mr-sm-2"
                            type="text" placeholder="Search"
                            onChange={this.handleChange}
                        />
                        <button
                            className="btn btn-success"
                            type="submit"
                            // onClick={this.moveSearchMovie}
                            // 여기서 쓰면 버튼을 눌렀을때 
                            // 핸들서브밋과 무브서치무비를 
                            // 같이 실행해서 데이터를 받기전에 
                            // 넘어가는 경우가생김 36~7 번째줄
                            // 데이터를 저장하고 검색한영화들 보여주는 화면으로 넘어감
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