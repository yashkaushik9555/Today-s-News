import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#eca7fc" }}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home"><b>TodayNews!</b></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/home"><b>Home</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business"><b>Business</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment"><b>Entertainment</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general"><b>General</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health"><b>Health</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science"><b>Science</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports"><b>Sports</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology"><b>Technology</b></Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-danger" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
