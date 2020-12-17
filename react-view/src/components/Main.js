import React, { Component } from 'react';
import TMDBMovieApiService from '../apis/TMDBMovieApiService';
import Row from './Row';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    TMDBMovieApiService.getDatasByGenre('Action')
      .then((res) => {
        const actions = res.data.results;
        console.log(actions, '액션값');
        this.setState({ actions: actions }, () => {});
      })
      .catch((err) => console.log(err));

    TMDBMovieApiService.getDatasByGenre('Comedy')
      .then((res) => {
        const comedys = res.data.results;
        console.log(comedys, '코미디값');
        this.setState({ comedys: comedys }, () => {});
      })
      .catch((err) => console.log(err));
    TMDBMovieApiService.getDatasByGenre('Horror')
      .then((res) => {
        const horrors = res.data.results;
        console.log(horrors, '호러값');
        this.setState({ horrors: horrors }, () => {});
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div style={{ backgroundColor: '#181818' }}>
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://youtube.com/embed/UIA1QoGATHY"
              title="Youtube Video Player"
              className="video"
              allowFullScreen
              style={{ width: '100%', height: '80vh' }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn btn-light"
              style={{ margin: 10 }}
              children="▶ 재생"
            />
            <button
              type="button"
              className="btn btn-secondary"
              children="상세 정보"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Row
              actions={this.state.actions}
              comedys={this.state.comedys}
              horrors={this.state.horrors}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
