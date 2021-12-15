import React from 'react'
// import Popup from 'reactjs-popup'

const NavItems = () => {
    return (
        <ul className="nav-items">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Login
            {/* <Popup trigger={<button> <h3 className="add-task-button">+Add task</h3></button>} position="right center">
                Login here
            </Popup> */}
            </li>
        </ul>
        
    )
}

export default NavItems

// import React from 'react';
// import { Link } from 'react-router-dom';

// class NavItems extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>Please choose a repository from the list below.</p>
//                 <ul>
//                     <li><Link to="/react">React</Link></li>
//                 </ul>
//             </div>
//         );
//     }
// }

// export default NavItems;