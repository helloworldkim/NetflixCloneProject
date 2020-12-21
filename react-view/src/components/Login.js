/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../styles/Login.css";
import { Redirect } from "react-router-dom";
import UserApiService from "../apis/UserApiService";

function Login({ authenticated, location }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginOk = async () => {
    console.log(email);
    console.log(password);
    if (email === "") {
      alert("이메일을 입력하세요!");
      return;
    } else if (password === "") {
      alert("비밀번호를 입력하세요!");
      return;
    }
    //유저객체생성
    let user = {
      email: email,
      password: password,
    };
    //로그인 메서드
    login(user);
  };

  //로그인 메서드 구현
  const login = (user) => {
    console.log("입력한 유저정보", user);
    UserApiService.loginOk(user)
      .then((res) => {
        // console.log(res.data);
        let userid = res.data;
        //기존 값이 있을경우 삭제
        sessionStorage.removeItem("user");
        // console.log(res.data);
        //user정보에 userid값만 저장! 나머지값은 필요가없음!
        sessionStorage.setItem("user", userid);
        alert("로그인 성공!");
        //로그인 성공시 홈경로로 보냄
        window.location.href = "http://localhost:3000";
      })
      .catch((err) => {
        console.error("UserApiService.loginOk error :", err);
        alert("이메일이나 비밀번호가 일치하지 않습니다. \n 다시 입력해주세요!");
        setEmail("");
        setPassword("");
      });
  };

  const { from } = location.state || { from: { pathname: "/" } };
  if (authenticated) return <Redirect to={from} />;

  return (
    <div className="outer">
      <div className="inner">
        <h3 style={{ color: "white" }}>로그인</h3>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="이메일 주소"
            name="email"
            id="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="비밀번호"
            name="password"
            id="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-block"
          style={{ backgroundColor: "red", color: "white" }}
          onClick={handleLoginOk}
        >
          LOGIN
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        <p style={{ marginTop: 150 }}>
          {/* 페이스북로그인 요청 주소!  */}
          <a
            href="https://www.facebook.com/v2.11/dialog/oauth?client_id=770894283636482&redirect_uri=http://localhost:8090/user/auth/facebook"
            style={{ color: "#646564" }}
          >
            facebook으로 로그인 하기
          </a>
        </p>
        <div className="row">
          <p className="col-sm-6" style={{ fontSize: 13, color: "gray" }}>
            Netflix 회원이 아니신가요?
          </p>
          <h5
            className="col-sm-6"
            style={{ fontWeight: "bold", marginBottom: 100 }}
          >
            <a href="/join" style={{ color: "white" }}>
              지금 가입하세요
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Login;
