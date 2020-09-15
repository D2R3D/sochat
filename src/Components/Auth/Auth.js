import React, { Component } from 'react'
import {updateUser} from '../../ducks/reducer'
import axios from 'axios'
import {connect} from 'react-redux'


class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleChange = (prop, val) => {
        this.setState({
            [prop]: val
        });
    };

    register = () => {
        axios.post('/api/auth/register', this.state)
        .then(res => {
            this.props.registerUser(res.data);
            this.props.history.push('/dashboard')
        })
    };

    render() {
        return (
            <div>

            <input placeholder='Register'></input>
                <button>Register</button>
            <input placeholder="Login"></input>
                <button>Login</button>


            </div>
        )
    }

}



const mapDispatchToProps = dispatch => {
    return  {
        updateUser
    };
};

export default connect(mapDispatchToProps)(Auth);