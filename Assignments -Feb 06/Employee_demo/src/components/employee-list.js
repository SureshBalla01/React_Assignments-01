import React from 'react';
import { connect } from 'react-redux';
import { employeeGetAll } from '../actions/employeeActions';

class EmployeeList extends React.Component {

    componentDidMount() {
        this.props.dispatch(employeeGetAll);
    }

    render() {
        console.log(this.props);
        return <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h2>Employee List</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Age</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
                { this.props.employees && this.props.employees.map((item, index) => <tr key={index}><td>{index + 1}</td><td>{item.name}</td><td>{item.age}</td><td>{item.department}</td></tr>)}
            </tbody>
          </table>
        </div>
        </main>
    }
}

function mapStateToProps(state) {
    console.log(state);
    const { employees } = state;
    return {
        employees
    }
}

export default connect(mapStateToProps)(EmployeeList);