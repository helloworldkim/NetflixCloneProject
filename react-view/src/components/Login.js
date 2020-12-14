/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import '../styles/Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className='outer'>
                <div className='inner'>
                    <form>
                        <h3 style={{color:'white'}}>로그인</h3>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="이메일 주소" />
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="비밀번호" />
                        </div>
                        <button type="submit" className="btn btn-lg btn-block" style={{backgroundColor: 'red', color:'white'}}>LOGIN</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                        <p style={{marginTop: 150}}><a href="https://www.facebook.com/" style={{color: '#646564'}}>facebook으로 로그인 하기</a></p>
                        <div className='row'>
                        <p className='col-sm-6' style={{fontSize:13, color:'gray'}}>Netflix 회원이 아니신가요?</p>
                        <h5 className='col-sm-6' style={{fontWeight:'bold', marginBottom:100}}><a href="/join" style={{color:'white'}}>지금 가입하세요</a></h5>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}