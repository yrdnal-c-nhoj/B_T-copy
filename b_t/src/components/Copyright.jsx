
import './Copyright.css'

function Copyright() {
    const currentYear = new Date().getFullYear();

    return (
        <p className='copyright'>

            &copy; {currentYear} Cubist Heart Laboratories. All rights reserved.
            <br></br>
            *MORE ART FASTER FOR EVERYBODY ALL THE TIME&nbsp;

        </p>
    );
}

export default Copyright;

