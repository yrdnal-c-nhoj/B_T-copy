import React from 'react';

function Copyright() {
    const currentYear = new Date().getFullYear();

    return (
        <p className='copyright'>
            *More Art Faster All The Time For Everyone
            <br></br>
            &copy; {currentYear} Cubist Heart Laboratories. All rights reserved.
        </p>
    );
}

export default Copyright;

