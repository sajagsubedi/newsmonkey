import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, source, publishedAt } = this.props;
    return (
      <div className="shadow-2xl rounded-2xl w-auto mx-3 my-3 md:my-4 md:mx-4 ">
        <figure className="w-full">
          <div
            style={{
              position: "absolute",
              zIndex: "-1",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <span className="py-1 px-1 text-sm bg-blue-500 text-white rounded ">
              {source}
            </span>
          </div>

          <img
            className="rounded-2xl"
            alt="..."
            src={imageUrl}
            style={{ position: "relative", zIndex: "-3" }}
          />
        </figure>
        <div className="body  w-full px-2 py-3">
          <div className="my-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p class="text-gray-500">{publishedAt}</p>
            <p>{description}</p>
          </div>
          <a
            className="px-1 py-1 my-2 mx-2 rounded bg-blue-600 text-white"
            href={url}
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}
export default NewsItem;
