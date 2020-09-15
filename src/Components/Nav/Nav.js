import React from 'react'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'



function Nav(props) {
    if(props.location.pathname !== '/') {
        return (
            <div>

                <Link to='/dashboard'> <button>Home</button></Link>
                <Link to ='/post/:postid'><button>New Post</button></Link>
                <Link to ='/'><button>Logout</button></Link>

                Test should see on all pages
            </div>
        )} else {
            return null
        };
}

function mapStateToProps(state) {
    return state
}

export default withRouter(connect(mapStateToProps)(Nav));