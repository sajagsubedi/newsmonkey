import React, { Component } from "react";
import Header from "./Components/Header.js";
import News from "./Components/News.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

class App extends Component {
  apiKey =  process.env.REACT_APP_NEWS_API
  
  country = "in";
  pageSize = 5;
  category = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            height={3}
            color="#3B82F6"
            progress={this.state.progress}
          />
          <Header category={this.category} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="/"
                  country={this.country}
                  category="general"
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                />
              }
            ></Route>
            {this.category.map((elem) => {
              return (
                <Route
                  exact
                  path={`/${elem}`}
                  element={
                    <News
                      key={elem}
                      country={this.country}
                      apiKey={this.apiKey}
                      category={elem}
                      pageSize={this.pageSize}
                      setProgress={this.setProgress}
                    />
                  }
                ></Route>
              );
            })}
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
