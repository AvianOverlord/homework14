import React from "react";
import API from "../util/API";
import Header from "../components/Header";

class Homepage extends React.Component{
    state = {

    }

    componentDidMount()
    {
        
    }

    render()
    {
        return(<>
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
                            <Entry/>
                        ))
                    }
                </tbody>
            </table>
        </>)
    }
}

export default Homepage;