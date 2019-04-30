import React, { Component } from 'react';
import './styles/notificationBar.css';

import Notification from "./Notifcation.js";


class NotificationBar extends Component {
    render() {
        const notificationArray = this.props.notifications.map(msg => {
            return(
                <div>
                    <Notification
                        message={msg}
                        key={Math.random() * 10000000}
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