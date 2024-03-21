import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const form = useRef(null);


    const serviceID = 'service_ID';
    const templateID = 'template_ID'
    const userID = 'S3gKy66jL6aGZw5Wb';

    const onSubmit = (formData, e) => {
        e.preventDefault();
        sendEmail(serviceID, templateID, formData, userID);
        reset(); // Reset form after submission
    };



    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(response => {
                // console.log('Email sent successfully:', response);
                setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
            })
            .catch(error => {
                // console.error('Error sending email:', error);
                setSuccessMessage("Oops! Something went wrong. Please try again later.");
            });
    };


    return (
        <div className="contacts">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Please fill out the form and describe your project needs, and I'll contact you as soon as possible.</p>
                <span className="success-message mt-3">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} ref={form}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME */}
                            <div className="text-center">
                                <input
                                    type='text'
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder='Name'
                                    {...register('name', {
                                        required: 'Please enter your name!',

                                        maxLength: { value: 20, message: 'Please enter a name with fewer than 20 characters.' }
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className='error-message'>{errors.name && errors.name.message}</span>
                            {/* PHONE */}
                            <div className="text-center">
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Phone Number'
                                    {...register('phone', {
                                        required: 'Please add your phone number!'
                                    })}

                                />
                                <div className="line"></div>
                            </div>
                            <span className='error-message'>{errors.phone && errors.phone.message}</span>

                            {/* EMAIL */}

                            <div className="text-center">
                                <input
                                    type='email'
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    placeholder='Email'
                                    {...register('email', {
                                        required: 'Please enter your email!',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className='error-message'>{errors.email && errors.email.message}</span>
                            {/* SUBJECT */}
                            <div className="text-center">
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Subject'
                                    {...register('subject', {
                                        required: 'OOPS, you forgot to add the subject!',
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className='error-message'>{errors.subject && errors.subject.message}</span>
                        </div>

                        <div className="col-md-6 col-xs-12">
                            {/* DESCRIPTION */}

                            <div className="text-center">
                                <textarea
                                    className='form-control'
                                    placeholder='Please describe your project...'
                                    {...register('description', {
                                        required: 'Please describe your project needs!',
                                    })}

                                ></textarea>
                                <div className="line"></div>

                            </div>
                            <span className='error-message'>{errors.description && errors.description.message}</span>

                            <button className="btn-main-offer contact-btn" type='submit'>Contact Me</button>
                        </div>
                    </div>
                </form>
            </div>
            {/* {successMessage && <div className="text-center mt-3">{successMessage}</div>} */}
        </div>
    );
};

export default Contacts;
