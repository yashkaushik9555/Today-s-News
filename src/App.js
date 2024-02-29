import './App.css';
import NavBar from './components/NavBar';
import News from "./components/news"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pagesize=8
  apiKey="9d1b5f9865ad417f85d8226fc97586e7"
  state={
    progress:0
  }
  setProgress = (progress) => {
    this.setState({ progress });
  }
  
  render() {
    return (
     
      <BrowserRouter>
       <div className="container1">
        <NavBar/>
         </div>
         <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
      <div className="container">
        <Routes>
          <Route exact  path="/home" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="top-headlines" pagesize={this.pagesize} country={this.props.country} category={'general'}/>}/>
          <Route exact path="/business" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key= 'business' pagesize={this.pagesize} country={this.props.country} category={'business'}/>}/>
          <Route exact path="/entertainment" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' pagesize={this.pagesize} country={this.props.country} category={'entertainment'}/>}/>
          <Route exact path="/general" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pagesize={this.pagesize} country={this.props.country} category={'general'}/>}/>
          <Route exact path="/health" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pagesize={this.pagesize} country={this.props.country} category={'health'}/>}/>
          <Route exact path="/science" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pagesize={this.pagesize} country={this.props.country} category={'science'}/>}/>
          <Route exact path="/sports" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pagesize={this.pagesize} country={this.props.country} category={'sports'}/>}/>
          <Route exact path="/technology" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pagesize={this.pagesize} country={this.props.country} category={'technology'}/>}/>

        </Routes>
      </div>
    </BrowserRouter>
       

      
    )
  }
}

