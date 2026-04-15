const Logo = ({ className = '', style = {} }) => (
  <svg 
    className={`talap-logo ${className}`} 
    style={style} 
    width="100%" 
    height="100%" 
    viewBox="0 0 31 35" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.35602 11.4486L0 8.34112V26.986L5.35602 29.7663V23.5514L15.7435 29.1121V22.8972L5.35602 17.3364V11.4486Z" fill="#113F71"></path>
    <path d="M10.3874 13.9019L5.84293 11.1215L15.7435 5.56075L10.8743 2.78037L15.7435 0L23.3717 4.17056L31 8.34112L26.1309 11.1215L20.7749 8.34112L10.3874 13.9019Z" fill="#113F71"></path>
    <path d="M25.8063 11.4486L20.7749 13.9019V26.6589L16.0681 29.1121V35L31 26.986V23.9603V20.9346L28.5654 22.243L26.1309 23.5514L25.8063 11.4486Z" fill="#113F71"></path>
  </svg>
);

export default Logo;
