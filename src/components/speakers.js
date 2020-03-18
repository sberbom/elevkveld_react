import React from 'react';
import { Card} from "react-bootstrap";
import '../style/speakers.css'

function Speakers(props) {
        return(
          <div className="speakers-container">
            <Card className="card">
              <Card.Img variant="top" src={props.speaker1_img} />
              <Card.Body>
                <Card.Title>{props.speaker1}</Card.Title>
                <Card.Text>
                  {props.speaker1_info}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Img variant="top" src={props.speaker2_img} />
              <Card.Body>
                <Card.Title>{props.speaker2}</Card.Title>
                <Card.Text>
                  {props.speaker2_info}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )
}

export default Speakers;