import React, { Component } from "react";
import "../styles/App.css";
import SearchBar from "../components/SearchBar";
import UserApiService from "../apis/UserApiService";

class MainNavbar extends Component {
  //Logout Func
  onLogout = () => {
    UserApiService.logoutOK()
      .then((res) => {
        let status = res.status;
        console.log(res.status);
        if (status === 200) {
          alert("로그아웃이 완료되었습니다!");
          sessionStorage.removeItem("user");
          window.location.href = "http://localhost:3000";
        }
      })
      .catch((err) => {
        console.error("UserApiService error : ", err);
        alert("로그아웃 에러 \n 다시 시도하세요👻");
      });
  };
  render() {
    return (
      <div className="mainNavbar">
        <nav className="navbar">
          <ul className="nav justify-content-start">
            {/* <!-- Brand --> */}
            <a
              className="navbar-brand"
              href="/"
              style={{ color: "red", fontFamily: "fantasy", fontSize: 25 }}
            >
              NETFLIX
            </a>

            <li className="nav-item">
              <a className="nav-link" href="/" style={{ color: "white" }}>
                홈
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/movie" style={{ color: "white" }}>
                영화
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/newContent"
                style={{ color: "white" }}
              >
                NEW! 요즘 대세 콘텐츠
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/myContent"
                style={{ color: "white" }}
              >
                내가 찜한 콘텐츠
              </a>
            </li>
          </ul>
          <ul className="nav justify-content-end">
            <li>
              {/* <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} /> */}
              <SearchBar />
            </li>
            <li className="nav-item">
              <div>
                {sessionStorage.getItem("user") == null ? (
                  <a
                    className="nav-link"
                    href="/login"
                    style={{ color: "white" }}
                  >
                    로그인
                  </a>
                ) : (
                  <a
                    className="nav-link"
                    href="/logout"
                    onClick={this.onLogout}
                    style={{ color: "white" }}
                  >
                    로그아웃
                  </a>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MainNavbar;
