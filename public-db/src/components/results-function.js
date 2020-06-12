import API from "../utilities/api-employees";
import React, { Component } from "react"
import SearchForm from "./search-function"
import TableHeader from "./table-header";


class Results extends Component {
    state = {
        search: "",
        employees: [],
        employeeSort: [],
        order: ""

    };
    componentDidMount() {
        API.getUsers().then(res => this.setState({
            employees: res.data.results,
            employeeSort: res.data.results
        })).catch(err => console.log(err))
    }

    sortByName = () => {
        const filtereds = this.state.employeeSort;
        if (this.state.order === "ascending") {
            const sortFunction = filtereds.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            console.log(sortFunction)

            this.setState({
                employeeSort: sortFunction,
                order: "descending"
            })
        } else {

            const sortFunction = filtereds.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)

            this.setState({
                employeeSort: sortFunction,
                order: "ascending"
            })

        }
    }
    render() {
        return (
            <div>
                <SearchForm
                    employee={this.state.employees}
                    handleSearch={this.handleSearch}
                    handleInputChange={this.handleInputChange} />
                <TableHeader results={this.state.employeeSort}
                    sortByName={this.sortByName}
                />
            </div >
        )
    }
    handleInputChange = event => {

        const employees = this.state.employees;
        const UserInput = event.target.value;
        const employeeSort = employees.filter(employee => employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
        )
        this.setState({
            employeeSort,
        });
    };
    employeeSearch = () => {
        API.getUsers()
            .then(res => this.setState({
                employeeSort: res.data.results,
                employees: res.data.results
            }))
            .catch(err => console.log(err))
    }
    handleSearch = event => {
        event.preventDefault();
        const { employees, search } = this.state;
        const employeeSort = employees.filter(employee => employee.name.first.toLowerCase().includes(search.toLowerCase()));

        this.setState({
            employeeSort
        });
    }
}

export default Results