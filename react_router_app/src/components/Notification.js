import React from "react";

const Notification = ({ message, onClose }) => {
    const notificationClass = `notification ${message.type}`;

    return (
        <div className={notificationClass}>
            {message.text}
            <button onClick={onClose} className="btn btn-cancel">Cancel</button>
        </div>
    )
}
export default Notification
