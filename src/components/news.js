import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Swal from 'sweetalert2';
import Spinner from './spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pagesize: 8,
    category: 'everything'
  };

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  };

  articles = [
    {
      status: 'ok',
      totalResults: 70,
      articles: [
        {
          source: {
            id: null,
            name: 'Moneycontrol'
          },
          author: 'Moneycontrol News',
          title:
            "Byju's founder Byju Raveendran, investors responsible for edtech firm's downturn: UpGrad's Ronnie... - Moneycontrol",
          description:
            'Screwvala also said that investors and board members now need to exercise their fiduciary responsibility, ask the right questions and protect their investments.',
          url:
            'https://www.moneycontrol.com/news/technology/byjus-founder-byju-raveendran-investors-responsible-for-edtech-firms-downturn-upgrads-ronnie-screwvala-12266941.html',
          urlToImage:
            'https://images.moneycontrol.com/static-mcnews/this.props.pagesize21/07/Ronnie-Screwvala-770x433.jpg',
          publishedAt: '2024-02-14T07:03:57Z',
          content:
            "Byju Raveendran, the founder and CEO of embattled edtech giant Byju's, along with around 51 investors, are collectively responsible for the company's downturn, according to serial entrepreneur and in… [+73 chars]"
        },
        // Other articles...
      ]
    }
  ];

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - Today News`;
  }

  componentDidMount() {
    this.props.setProgress(10);
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({page:this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.props.setProgress(30);
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedata = await data.json();
    this.props.setProgress(80);
    this.setState(() => ({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults,
      
    }));
    this.props.setProgress(100);
  };

  // handlePreviousClick = async () => {
  //   if (this.state.page === 1) {
  //     this.showAlert2();
  //   } else {
  //     this.setState({ loading: true });
  //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9d1b5f9865ad417f85d8226fc97586e7&page=${
  //       this.state.page - 1
  //     }&pageSize=${this.props.pagesize}`;
  //     const data = await fetch(url);
  //     const parsedata = await data.json();
  //     this.setState((prevState) => ({
  //       page: prevState.page - 1,
  //       articles: parsedata.articles,
  //       loading: false
  //     }));
  //   }
  // };

  // showAlert2 = () => {
  //   Swal.fire({
  //     title: 'Oh!',
  //     text: 'Sorry, No Previous',
  //     icon: 'success',
  //     confirmButtonColor: '#3085d6',
  //     confirmButtonText: 'OK'
  //   });
  // };

  // handleNextClick = async () => {
  //   if (this.state.page * this.props.pagesize >= this.state.totalResults) {
  //     this.showAlert();
  //   } else {
  //     this.fetchData();
  //   }
  // };

  // showAlert = () => {
  //   Swal.fire({
  //     title: 'Oh!',
  //     text: 'Sorry, This is the last page',
  //     icon: 'success',
  //     confirmButtonColor: '#3085d6',
  //     confirmButtonText: 'OK'
  //   });
  // };

  render() {
    return (
      <div className="headline my-3">
        <h2>Today's News: Top Headlines about {this.capitalizeFirstLetter(this.props.category)}</h2>
        {this.state.loading && Spinner}
        <div className="container">
          <InfiniteScroll
            dataLength={this.state.articles.length} // This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={<Spinner />}
          >
            <>
            <div className="container">
            <div className="row">
            {this.state.articles.map((element, index) => (
  <div key={index} className="col-md-3">
    <NewsItems
      title={element?.title?.slice(0, 45) || ' '}
      description={element.description ? element.description : 'error '}
      imgurl={element.urlToImage ? element.urlToImage : 'Image not found '}
      date={element.publishedAt ? element.publishedAt : ' '}
      url={element.url ? element.url : 'Nothing to Read More '}
    />
  </div>
))}
            </div>
            </div>
            </>
          </InfiniteScroll>
          
        </div>
        
      </div>
    );
  }
}
