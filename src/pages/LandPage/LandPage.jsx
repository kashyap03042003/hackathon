import React from 'react';
import { Link } from 'react-router-dom';
import './LandPage.css'; // Import styles from CSS module file

export default function LandingPage() {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>VNIT STUDENT ACTIVITY PORTAL</title>
            <body className='body-landpage'>
            <div className="container-landpage"> {/* Use styles container class */}
                <div className="left-landpage"> {/* Use styles left class */}
                    <h1>VNIT Student Activity Portal</h1>
                    <p>
                        Expand your horizons beyond textbooks; join a club and discover the
                        real-world applications of your knowledge.
                    </p>
                    <Link to='/login'>
                        <button className="btn-landpage">LOGIN</button> {/* Use styles btn class */}
                    </Link>
                </div>
                <div className="right-landpage"> {/* Use styles right class */}
                    <img src="../public/images/image.jpeg" alt="" />
                </div>
            </div>
            </body>
        </>
    );
}
