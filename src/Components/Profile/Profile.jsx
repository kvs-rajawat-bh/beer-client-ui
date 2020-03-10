import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Profile extends Component{
    render()
    {
        return(
            <div>
                Welcome <Link to="/login">{this.props.match.params.name}</Link>
            </div>
        )
    }
}


// export class Brief extends Component{

//     render()
//     {
//         return(
            
//         )
//     }

// }





export default Profile