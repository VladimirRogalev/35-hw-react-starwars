import React, {Component} from 'react';
import data from "bootstrap/js/src/dom/data.js";
import Form from "./Form.jsx";

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // name: '',
            planets: []
        };

    }

    componentDidMount() {
        fetch('https://sw-info-api.herokuapp.com/v1/planets/')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    planets: data
                });
            })
            .catch(e => {
                console.log(e.message);
            });
    }

    render() {
        //TODO create form (bootstrap)
        // TODO * add list planets
        return (<div className="container mt-5">
            <Form planets={this.state.planets}/>

        </div>);
    }
}


export default Contacts;