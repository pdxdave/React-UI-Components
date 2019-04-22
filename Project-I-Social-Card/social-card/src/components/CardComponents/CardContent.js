import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="card--content">
            <p className="card--content-title">Get started with React</p>
            <p className="card--content-description">
              React makes it painless to create interactive UIs.  Design simle views for each state in your application.
            </p>
            <p className="card--content-react">reactjs.org</p>
        </div>
    )
}

export default CardContent;