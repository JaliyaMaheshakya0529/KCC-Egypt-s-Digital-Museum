import { Link, useLocation } from 'react-router-dom';

function BackButton() {
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <>
      <div className="nav-btn">
        {/* FIXED: Path changed from /public/home.png to /home.png */}
        <Link to="/" className="Home-btn">
          <img className='Home-img' src="/home.png" alt="Home" /> Home
        </Link>
      </div>
    </>
  );
}

export default BackButton;