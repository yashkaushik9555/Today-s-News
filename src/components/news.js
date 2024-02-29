// NewsItems.js
import React, { Component } from 'react';
import "./NewsItem.css";

export default class NewsItems extends Component {
  render() {
    let { title, description, imgurl, date,url } = this.props;
    return (
      <div className="news-card mx-2">
      <a href={url} className="news-card__card-link"></a>
      <img src={imgurl} alt="" className="news-card__image" />
      <div className="news-card__text-wrapper">
        <h2 className="news-card__title">{title || "No Title"}</h2>
        <div className="news-card__post-date"><strong>{date ? new Date(date).toUTCString() : "No Date"}</strong></div>
        <div className="news-card__details-wrapper">
          <p className="news-card__excerpt">{description || "No Description"}</p>
          <a href={url} className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
        </div>
      </div>
    </div>
    );
  }
}
