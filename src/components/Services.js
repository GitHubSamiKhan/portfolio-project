import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode, faLaptopCode, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div className="services">
            <h1 className='py-5'>my services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className='icon' icon={faDesktop} size='2x' /></div>
                            <h3>web design</h3>
                            <p>I approach each project individually and always focus on the result.</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className='icon' icon={faFileCode} size='2x' /></div>
                            <h3>Web Development</h3>
                            <p>Your website will be build with an new proven technologies.</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className='icon' icon={faLaptopCode} size='2x' /></div>
                            <h3>Programmer</h3>
                            <p>As a seasoned programmer, I bring expertise in crafting robust and efficient solutions to complex problems.</p>

                        </div>
                    </div>
                    {/*  */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className='icon' icon={faPencilAlt} size='2x' /></div>
                            <h3>Figma designer</h3>
                            <p>With a creative flair and a meticulous attention to detail, I specialize in transforming ideas into visually stunning designs using Figma.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services;
