import React from "react";
import axios from "axios";
import Search from "../search/search";
import Card from "../card/card";
import "../css/style.css";

class Zip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: [],
      search: "",
      booleanSearch: false,
    };
  }
  componentDidUpdate() {
    let zip = this.state.search.toUpperCase().trim();
    const url = `https://ctp-zip-api.herokuapp.com/zip/${zip}`;
    try {
      axios.get(url).then((response) => {
        const res = response.data;
        this.setState({ zip: res, booleanSearch: true });
      });
    } catch (error) {
      console.log(error);
    }
  }
  onChangeHandler = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    let displayShow = null;
    displayShow = this.state.booleanSearch
      ? this.state.zip.map((item) => {
          return (
            <div className="display" key={item.RecordNumber}>
              <Card
                state={item.State}
                location={item.City}
                population={item.EstimatedPopulation}
                wages={item.TotalWages}
              />
            </div>
          );
        })
      : null;
    return (
      <React.Fragment>
        <div className="settings">
          <div className="tittleContainer">
            <p>City Name by Zip Code</p>
          </div>
          <div className="searchContainer">
            <Search
              value={this.state.search}
              change={this.onChangeHandler}
              placeholder="Enter Zip Code"
            />
          </div>
          <div className="flexDisplay">{displayShow}</div>
        </div>
      </React.Fragment>
    );
  }
}
export default Zip;
