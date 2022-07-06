import {Navbar} from 'react-bootstrap'

export function NavBar () {
        return( 
         <Navbar bg="dark" variant="dark">
        <div className='navContent'>
            <p>
             <a>home</a>  |  <a>profile</a>  |  <a>settings</a>
            </p>
        </div>
     </Navbar>
           
        )
    }

