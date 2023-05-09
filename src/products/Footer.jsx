import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div style={{paddingTop:'20rem'}}>
    <footer style={styles.footer}>
    <div style={styles.container}>
    <div style={styles.column}>
    <h3>About Us</h3>
    <p>We are a company dedicated to...</p>
    </div>
        <div style={styles.column}>
          <h3>Contact</h3>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div style={styles.column}>
        <h3>Follow Us</h3>
          <div style={styles.socialIcons}>
            <a href="https://www.facebook.com" ><FaFacebook className='ms-3'/><i className="fab fa-facebook"></i></a>
            <a href="https://www.twitter.com"><FaTwitter className='ms-3'/><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com"><FaInstagram className='ms-3'/><i className="fab fa-instagram"></i></a>
            </div>
            </div>
            </div>
            </footer>
            </div>
            );
        };
        
        const styles = {
            footer: {
    backgroundColor: '#f1f1f1',
    padding: '20px 0',
},
container: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '960px',
    margin: '0 auto',
},
column: {
    flexBasis: '30%',
  },
  socialIcons: {
    display: 'flex',
    
  },
};

export default Footer;
