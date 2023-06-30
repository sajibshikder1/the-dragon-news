import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGofore, FaGithub, FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png';

const RightNav = () => {
  return (
    <div>
      <h4 className="mb-4">Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        {" "}
        <FaGofore /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        {" "}
        <FaGithub /> Login with Github
      </Button>
      <div className="mt-4">
        <h4>Find Us on</h4>
        <ListGroup>
          <ListGroup.Item disabled><FaFacebookF/> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter/> Twiiter</ListGroup.Item>
          <ListGroup.Item><FaInstagram/> Instragram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
