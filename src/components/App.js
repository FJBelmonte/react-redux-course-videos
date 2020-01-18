import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

export default class App extends React.Component {
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCSudZnyj_xPwOlEjSBcbxd_udKIfKcsDo",
        q: term
      }
    });
    console.log(response.data);
  };

  render() {
    return (
      <div className='ui-container'>
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}
