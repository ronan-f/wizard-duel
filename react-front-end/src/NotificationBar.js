import React, { Component } from 'react';
import './styles/notificationBar.css';

import Notification from "./Notifcation.js";


class NotificationBar extends Component {
    render() {
        console.log('nav bar', this.props.notifications)
        const notificationArray = this.props.notifications.map(msg => {
            return(
                <div>
                    <Notification
                        message={msg}
                    />
                </div>
            )
        })
        return(
            <div className='notificationBar'>
                {notificationArray}
            </div>
        )

    }

}


export default NotificationBar;