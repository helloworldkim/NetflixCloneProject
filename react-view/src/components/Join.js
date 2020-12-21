import React, { Component } from "react";
import UserApiService from "../apis/UserApiService";

class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }
  //회원가입 메서드
  JoinUser = () => {
    console.log("회원가입!");
    let user = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
    };
    UserApiService.joinUser(user)
      .then((res) => {
        console.log(res.data);
        if (res.data === 0) {
          alert("회원가입 실패! 동일한 아이디가 존재합니다");
        } else {
          let userid = res.data;
          //세션에 user정보 저장 후 홈경로로 보낸다
          alert("회원가입 성공");
          sessionStorage.setItem("user", userid);
          window.location.href = "http://localhost:3000";
        }
      })
      .catch((err) => console.log(err));
  };
  //유저정보 핸들러
  joinInfoHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div style={{ flex: 1 }}>
        {/* <h1 style={{color: 'red' , marginTop: 10, marginLeft: 0, fontFamily: 'fantasy'}}>NETFLIX</h1> */}
        <div
          className="container"
          style={{
            justifyItems: "center",
            alignItems: "center",
            width: "500px",
            marginTop: "18vh",
          }}
        >
          <div className="row">
            <div className="col">
              <div style={{ margin: 20 }}>
                <p style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
                  이메일과 비밀번호를 설정하고 멤버십을 시작하세요.
                </p>
                <p style={{ color: "white" }}>
                  몇 단계만 더 거치면 Netflix 가입완료!
                  <br />
                  복잡한 단계는 모두 없앴습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                name="email"
                placeholder="이메일 주소"
                type="text"
                className="form-control"
                value={this.state.email}
                onChange={(e) => this.joinInfoHandler(e)}
                style={{ margin: 20 }}
              />
              <input
                name="password"
                placeholder="비밀번호를 추가하세요"
                type="password"
                className="form-control"
                value={this.state.password}
                onChange={(e) => this.joinInfoHandler(e)}
                style={{ margin: 20 }}
              />
              <input
                name="name"
                placeholder="이름을 추가하세요"
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={(e) => this.joinInfoHandler(e)}
                style={{ margin: 20 }}
              />
              <button
                type="button"
                onClick={() => this.JoinUser()}
                className="btn btn-block"
                style={{
                  margin: 20,
                  backgroundColor: "red",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                다음
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Join;
