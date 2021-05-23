import React, { Component } from "react";
import API from "../utils/API";
import DataTable from "./DataTable";

export default class Data extends Component {
  state = {
    users: [],
    filteredUsers: [],
  };

  componentDidMount() {
    API.getUsers().then((res) => {
      const holdData = res.data.results.map((user) => {
        return user;
      });
      this.setState({
        users: holdData,
      });
      console.log(this.state.users);
    });
  }

  render() {
    return (
      <div className="container">
        <DataTable users={this.state.users} />
      </div>
    );
  }
}