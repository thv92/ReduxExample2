import React, { Component  } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    //Allows this to use the correct context
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    

  }

  // Want to avoid submit/enter to send to another HTML page since single page application
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
      </form>
    );
  }


}
