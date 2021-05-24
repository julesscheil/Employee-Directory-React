import React, {
    Component
} from 'react';
import API from '../utils/API';
import SearchForm from '../components/SearchBox';
import SearchResults from '../components/SearchBox';

class Home extends Component {
    state = {
        search: "",
        employees: [],
        results: [],
        error: "",
    };


componentDidMount() {
    API.getEmployees()
        .then((data) => {
            const sorted = data.data.results.sort(function (a, b) {
                if (a.name.first < b.name.first) {
                    return -1;
                }
                if (a.name.first > b.name.first) {
                    return 1;
                }
                return 0;
            })
            this.setState({
                employees: sorted,
                results: sorted
            })
        }).catch((err) => console.log(err));
};


handleInputChange = (event) => {
    this.setState({search:event.target.value});
    const filtered = this.state.results.filter(employee => {
        return employee.name.first.toLowerCase().indexOf(event.target.value)!==-1
    })
    this.setState({employees:filtered})
};

render() {
    return (
        <div>
            <div>
                <SearchForm handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} employees={this.state.employees} />
                <SearchResults results={this.state.employees} />
            </div>
        </div>
    )
}
}

export default Home;