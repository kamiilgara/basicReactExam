import React from "react";
import {
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import { ListGroup, ListGroupItem } from "react-bootstrap";

function SocialMediaObjects({iconsColor}) {
  return (
    <div className="social">
      <ListGroup className="list-group-horizontal">
        <ListGroupItem>
          <a className="social-a" style={iconsColor} href='https://az-az.facebook.com'>
            <FacebookFilled />
          </a>
        </ListGroupItem>
        <ListGroupItem>
          <a className="social-a" style={iconsColor} href={"https://www.instagram.com/"}>
            <InstagramOutlined />
          </a>
        </ListGroupItem>
        <ListGroupItem>
          <a className="social-a" style={iconsColor} href={"https://twitter.com/"}>
            <TwitterOutlined />
          </a>
        </ListGroupItem>
        <ListGroupItem>
          <a className="social-a" style={iconsColor} href={"https://www.youtube.com/"}>
            <YoutubeFilled />
          </a>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default SocialMediaObjects;
