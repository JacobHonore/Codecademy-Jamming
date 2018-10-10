import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleNameChange = this.handleTermChange.bind(this);
  }
  handleTermChange(event) {
    this.setState({
      term: event.target.value
    });
  }
  search() {
    this.props.onSearch(this.state.term);
  }
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
