import React from 'react';
import './Header.css';
import moment from 'moment'

const HeaderTitle = () => {
     return (
         <div className="header--title">
            <h2>Lambda School <span>@Lambdaschool {moment().format('LL')}</span> </h2>
         </div>
     )
}

export default HeaderTitle;