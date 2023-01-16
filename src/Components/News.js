import React, { Component } from "react";
import NewsItem from "./NewsItem.js";
import Spinner from "./Spinner.js";
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  updateNews = async () => {
    this.props.setProgress(5);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(15);
    this.setState({ loading: true });
    this.props.setProgress(30);
    let data = await fetch(url);
    this.props.setProgress(65);
    let parsedData = await data.json();
    this.props.setProgress(85);
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);
  };
  async componentDidMount() {
    this.updateNews();
  }
  date = (dt) => {
    let d = new Date(dt);
    return Number.parseInt(new Date().getHours()) - Number.parseInt(d.getHours())+"hours ago";
  };
  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      page: this.state.page + 1,
    });
  };

  render() {
    return (
      <div className="container w-full  mx-auto">
        <h1 className="text-4xl my-5 mx-auto text-center font-extrabold">
          NewsMonkey-<span className="text-indigo-600">Top headliness</span>
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className=" grid grid-gap-3  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {this.state.articles.map((element) => {
              return (
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  key={element.url}
                  url={element.url}
                  source={element.source.name}
                  publishedAt={this.date(element.publishedAt)}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
export default News;
