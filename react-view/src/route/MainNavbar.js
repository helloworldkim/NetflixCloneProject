import React, { Component } from 'react';
import '../styles/App.css';
import * as Icon from 'react-bootstrap-icons';

class MainNavbar extends Component {
    render() {

        return (
            <div className="mainNavbar">
                <nav className="navbar">
                    <ul className="nav justify-content-start">
                        {/* <!-- Brand --> */}
                        <a className="navbar-brand" href="/" style={{ color: 'red', fontFamily: "fantasy", fontSize: 25, }}>NETFLIX</a>

                        <li className="nav-item">
                            <a className="nav-link" href="/" style={{ color: 'white' }}>홈</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/movie" style={{ color: 'white' }}>영화</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/newContent" style={{ color: 'white' }}>NEW! 요즘 대세 콘텐츠</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/myContent" style={{ color: 'white' }}>내가 찜한 콘텐츠</a>
                        </li>
                    </ul>
                    <ul className="nav justify-content-end">
                        <form className="form-inline" action="">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-success" type="submit"><Icon.Search/></button>
                        </form>
                        <li className="nav-item">
                            <a className="nav-link" href='/login' onClick={this.LoginPage} style={{ color: 'white' }}>로그인</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default MainNavbar;