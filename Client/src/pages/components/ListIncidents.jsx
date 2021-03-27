import React from 'react';
import '../css/userMenu.css';
/* import { Card, Columns, Content, Heading } from 'react-bulma-components'; */
import { Container,Card, Icon, Image  } from 'semantic-ui-react';
function ListIncidents({ incidents }) {
    
    console.log("llegamos a LoadIncidents con ",incidents);

/*                                 <Container>
                                    <Card >
                                        <Card.Content>
                                            <Card.Header>{user}</Card.Header>
                                            <Card.Meta>Fecha: {date}</Card.Meta>    
                                            <Card.Meta>Elemento: {element}</Card.Meta> 
                                            <Card.Meta>Incidencia: {incidentType}</Card.Meta>     
                                            <Card.Meta>Estado: {state}</Card.Meta>
                                            <Card.Content extra>
                                                <Card.Description>
                                                        {description}
                                                </Card.Description>
                                            </Card.Content>
                                        </Card.Content>
                                    </Card>
                                </Container> */

    return (


            <>
                    {
                        incidents.map(({_id, user, element, date, description, incidentType, state,imgUrl, address}) => (

                            <div className="ruben" key={_id}>
                                <div className="sonGallery" style={{backgroundImage: `url(${imgUrl})`}} ></div>    
                                <div className="content">

                                    <div role="list" class="ui list">
                                        <div role="listitem" class="item">
                                            <i aria-hidden="true" class="user circle outline icon"></i>
                                            <div class="content">Nombre</div>
                                        </div>
                                        <div role="listitem" class="item">
                                                    <i aria-hidden="true" class="marker icon"></i>
                                        <div class="content">{address}</div>
                                        </div>
                                        <div role="listitem" class="item">
                                            <i aria-hidden="true" class="mail icon"></i>
                                            <div class="content">
                                                <a href="">{user}</a>
                                            </div>
                                        </div>
                                        <div role="listitem" class="item">
                                            <i aria-hidden="true" class="calendar alternate icon"></i>
                                            <div class="content"><p>{date}</p></div>
                                        </div>
                                        <div role="listitem" class="item">
                                            <i aria-hidden="true" class="bullhorn icon"></i>
                                            <div class="content">Elemento: {element}</div>
                                        </div>
                                        <div role="listitem" class="item">
                                            <i aria-hidden="true" class="bug icon"></i>
                                            <div class="content"><p>Incidencia: {incidentType}</p></div>
                                        </div>
                                        <div role="listitem" class="item">
                                            <i aria-hidden="true" class="thermometer quarter icon"></i>
                                            <div class="content"><p>Estado: {state}</p></div>
                                        </div>
                                        <div role="listitem" class="item">
                                            <i aria-hidden="true" class="keyboard icon"></i>
                                            <div class="content"><p>Descripcion: {description}</p></div>
                                        </div>
                                    </div>
                                    
                                </div>    
                            </div>
                                
                                

                         ))

                    }
                 
        </>
     
    )
    
}  

export default ListIncidents


