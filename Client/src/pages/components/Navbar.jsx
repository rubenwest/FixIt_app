import React from 'react'
import { Container } from 'semantic-ui-react';

const Navbar = () => {
    return (
          <Container>
                <div className="ui menu m-10">
                    <a className="item">Home</a>
                    <a className="item">About Us</a>
                    <a className="item">Upcoming Events</a>
                </div>
           </Container>

    )
}

export default Navbar
