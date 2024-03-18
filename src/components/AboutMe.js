import React from 'react'
import author from '../me.jpg'

const AboutMe = () => {
    return (

        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className='profile-img' src={author} alt="Author.." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className='about-heading'>about me</h1>
                    Hello and Greetings! I am Muhammad Sami Khan, a web developer fueled by curiosity and a Bachelor's in Computer Science. My journey into the digital world began with a passion for problem-solving and a knack for turning ideas into reality through code.

                    Beyond the screen, I find joy in the simplicity of jogging, where each step clears my mind and invigorates my spirit. Additionally, my love for Pashto tapy music runs deep, offering a cultural connection and a source of inspiration in moments of reflection.

                    In my pursuit of excellence, I strive to blend creativity with technical prowess, crafting digital experiences that resonate with users and leave a lasting impact. Each project I undertake is a testament to my dedication to continuous learning and innovation.

                    As I navigate the ever-evolving landscape of technology, I am grateful for the opportunities to collaborate, learn, and grow. Together, let us embark on a journey of discovery and achievement, shaping the future one line of code at a time.

                    Warm regards,
                    Muhammad Sami Khan
                </div>
            </div>

        </div>
    )
}

export default AboutMe;
