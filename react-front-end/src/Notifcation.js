import React, { Component } from 'react';

class Notification extends Component {
    render() {
        return (

            <div >
                <h4>{this.props.message}</h4>
            </div>


        );
    }
}


export default Notification;