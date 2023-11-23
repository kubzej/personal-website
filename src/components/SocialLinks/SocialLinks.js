import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className='social-links'>
      <a href='mailto:jmares.mail@gmail.com' className='icon'>
        <FontAwesomeIcon icon={faEnvelope} size='2x' />
      </a>
      <a
        href='https://www.linkedin.com/in/jakub-mares/'
        target='_blank'
        rel='noopener noreferrer'
        className='icon'
      >
        <FontAwesomeIcon icon={faLinkedin} size='2x' />
      </a>
    </div>
  );
};

export default SocialLinks;
