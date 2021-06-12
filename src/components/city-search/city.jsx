import React from "react";
import Search from "../search/search";
import axios from "axios";
import Card from "../card/card";
import "../css/style.css";

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: [],
      search: "",
      searchBoolean: false,
    };
  }
  componentDidUpdate() {
    let city = this.state.search.toUpperCase().trim();
    const url = `https://ctp-zip-api.herokuapp.com/city/${city}`;
    try {
      axios.get(url).then((response) => {
        const res = response.data;
        this.setState({ city: res, searchBoolean: true });
      });
    } catch (error) {
      console.log(error);
    }
  }

  onChangeHandler = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    let displayCity = null;
    displayCity = this.state.searchBoolean
      ? this.state.city.map((item, index) => {
          return (
            <div className="display" key={index}>
              <Card city={true} zip={item} />
            </div>
          );
        })
      : null;

    return (
      <React.Fragment>
        <div className="settings">
          <div className="tittleContainer">
            <p>Zip Code</p>
          </div>
          <div className="searchContainer">
            <Search
              value={this.state.search}
              change={this.onChangeHandler}
              placeholder="Enter City"
            />
          </div>
          <div className="flexDisplay">{displayCity}</div>
        </div>
      </React.Fragment>
    );
  }
}
export default City;
