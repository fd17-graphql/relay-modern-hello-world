/**
 * this.props.claims(partner.partnerNumber)
 */

import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '0'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.props.setClaims(event.target.value);
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.setClaims(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    min. claims sum:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
            </form>
        );
    }
}

export default NameForm;

