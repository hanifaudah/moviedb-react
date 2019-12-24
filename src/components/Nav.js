import React, { Component } from 'react'

export class Nav extends Component {

    state = {
        query:""
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.changeQuery(this.state.query);
        this.setState({query:""});
    }
    
    onChange = (e) => this.setState({query: e.target.value});
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-light bg-light">
                    <h3>MovieDB</h3>
                    <form onSubmit={this.onSubmit} className="form-inline">
                        <input value={this.state.query} onChange={this.onChange} id="search" className="form-control mr-sm-2" type="search" placeholder="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </React.Fragment>
        )
    }
}

export default Nav
