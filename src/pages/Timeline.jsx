import React from 'react';
// Import Link from react-router-dom so pages navigate smoothly without hard reloading
import { Link } from 'react-router-dom';

function Timeline() {
  return (
    <div className="timeline-container">
      <h1 className="Title-middle">The Timeline</h1>

      <div className="timeline-content">
            {/* Hitbox links updated to match App.jsx route casing */}
            <div className="hitbox">
                  <Link to="/gallery/origin" className="box-origin"></Link>
                  <Link to="/gallery/pyramids" className="box-pyramids"></Link>
                  <Link to="/gallery/pharaohs" className="box-pharaohs"></Link>
                  <Link to="/gallery/legacy" className="box-legacy"></Link>
            </div>

            <div className="horizontal-line"></div>

            {/* Added absolute leading slashes to images */}
            <div className="timeline-images">
                  <img className="origin" src="/origin.png" alt="Origin"/>
                  <img className="pyramids" src="/pyramids.png" alt="Pyramids" />
                  <img className="pharaohs" src="/pharaohs.png" alt="Pharaohs"/>
                  <img className="legacy" src="/legacy.png" alt="Legacy"/>
            </div>

            <div className="timeline-texts">
                  <p className="origin-text">Origin</p>
                  <p className="pyramids-text">Pyramids</p>
                  <p className="pharaohs-text">Pharaohs</p>
                  <p className="legacy-text">Legacy</p>
            </div>
      </div>

      <div className="timeline-content-vertical">
            <div className="vertical-line"></div>
            <table className="table" style={{ borderCollapse: 'collapse', width: '100%' }}>
                  <tbody>
                  <tr>
                        <td><Link to="/gallery/origin"><img className="tableimg" src="/origin.png" alt="Origin" /></Link></td>
                        <td><Link to="/gallery/origin"><p>Origin</p></Link></td>
                  </tr>
                  <tr>
                        <td><Link to="/gallery/pyramids"><img className="tableimg" src="/pyramids.png" alt="Pyramids" /></Link></td>
                        <td><Link to="/gallery/pyramids"><p>Pyramids</p></Link></td>
                  </tr>
                  <tr>
                        <td><Link to="/gallery/pharaohs"><img className="tableimg" src="/pharaohs.png" alt="Pharaohs" /></Link></td>
                        <td><Link to="/gallery/pharaohs"><p>Pharaohs</p></Link></td>
                  </tr>
                  <tr>
                        <td><Link to="/gallery/legacy"><img className="tableimg" src="/legacy.png" alt="Legacy" /></Link></td>
                        <td><Link to="/gallery/legacy"><p>Legacy</p></Link></td>
                  </tr>
                  </tbody>
            </table>
      </div>

      <div className="Glow"></div>

      <div className='notebox1'><p className='note1'>Use desktop for better experience.</p></div>
    </div>
  );
}

export default Timeline;