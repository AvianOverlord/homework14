import React from "react";
import API from "../util/API";
import Header from "../components/Header";
import Entry from "../components/Entry"

class Homepage extends React.Component{
    state = {
        employees: []
    }

    componentDidMount()
    {
        
    }

    render()
    {
        return(<>
            <Header></Header>
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.map( employee => (
                            <Entry
                                firstName = {employee.firstName}
                                lastName = {employee.lastName}
                                image = {employee.image}
                                phoneNumber = {employee.phoneNumber}
                                email = {employee.email}
                                birthday = {employee.birthday}
                            />
                        ))
                    }
                </tbody>
            </table>
        </>)
    }
}

export default Homepage;