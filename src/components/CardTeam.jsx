import React from 'react';
import '../css/Card.css';

function CardView({ profileimage, profilename, sociallinkdin, socialtwitter, socialgithub }) {
  return (
    <div className="cardview">
      <img
        className="profile"
        src={profileimage}
        alt="profileimage"
      />
      <h4>{profilename}</h4>
      <p>
        <a href={sociallinkdin} target="_blank" className="linkedin1" rel="noreferrer">
          <i className="fa-brands fa-linkedin" />
        </a>
        <a href={socialtwitter} target="_blank" className="twitter1" rel="noreferrer">
          <i className="fa-brands fa-twitter" />
        </a>
        <a href={socialgithub} target="_blank" className="github" rel="noreferrer">
          <i className="fa-brands fa-github" />
        </a>
      </p>
    </div>
  );
}
export default CardView;
