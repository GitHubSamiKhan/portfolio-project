import React from 'react';
import netflix from '../images/netflix.png';
import cityGuide from '../images/city-guide-app.png'
import portfolio from '../images/portfolio.png'
import taskManager from '../images/task-manager.png'
//FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
//REACT POPUPBOX IMPORTS 
// import { PopupboxManager, PopupboxContainer } from 'react-popupbox';

const Portfolio = () => {



    return (
        <div className="portfolio-wrapper">
            <h1 className='text-uppercase text-center py-5'>portfolio</h1>
            <div className="container-por">
                <div className="portfolio-image-box" >
                    <img className='portfolio-image' src={netflix} alt="Netflix Clone Project..." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>
                {/*  */}
                <div className="portfolio-image-box">
                    <img className='portfolio-image' src={cityGuide} alt="City Guide Project..." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>
                {/*  */}
                <div className="portfolio-image-box">
                    <img className='portfolio-image' src={portfolio} alt="Portfolio React and Material UI Project..." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>
                {/*  */}
                <div className="portfolio-image-box">
                    <img className='portfolio-image' src={taskManager} alt="Task Manager React and Redux Project..." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                </div>
                {/*  */}
            </div>

        </div>
    )
}

export default Portfolio;


