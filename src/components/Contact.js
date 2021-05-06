import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_R9O8jm0aH1sN16s33lkGJ";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID, 
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset()
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
    
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
              setSuccessMessage("Form sent successfully! I'll contact you ASAP.");
          }).catch(err => console.error(`Something went wrong ${err}`));
        }
      

    return (
        <div id="contact" className="contact">
            <div className="text-center">
                <h1>contact me</h1>
                <p>Please fill out the form below, describing your project needs, 
                    and I'll respond as soon as possible!</p>
                    <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* NAME INPUT */}
                        <div className="text-center">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            placeholderColor="white"
                            name="name"
                            ref={
                                register({
                                    required: "Please enter your name",
                                    maxLength: {
                                        value: 20,
                                        message: "Please enter a name with fewer than 20 characters"
                                    }
                                })
                            }
                            />
                            <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>
                         
                         {/* phone INPUT */}
                         <div className="text-center">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone"
                            ref={
                                register({
                                    required: "Please enter your phone number",
                                    })
                                }
                            />
                            <div className="line"></div>
                         </div>
                         <span className="error-message">
                                {errors.phone && errors.phone.message}
                            </span>
                         
                         {/* email INPUT */}
                         <div className="text-center">
                            <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                            name="email"
                            ref={
                                register({
                                    required: "Please provide your email address",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email"
                                    }
                                    })
                                }
                            />
                            <div className="line"></div>
                         </div>
                         <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                        
                         {/* subject INPUT */}
                         <div className="text-center">
                            <input
                            id="subject"
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject"
                            ref={
                                register({
                                    required: "Whoops! Looks like you forgot your message subject",
                                    })
                                }
                            />
                            <div className="line"></div>
                         </div>
                         <span className="error-message">
                                {errors.subject && errors.subject.message}
                            </span>
                        
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* DESCRIPTION */}
                        <textarea
                        id="description"
                        type="text"
                        className="form-control"
                        placeholder="Please give a brief description of your project and/or ideas"
                        name="description"
                        ref={
                            register({
                                required: "Please give a short description of your intended correspondence",
                                })
                            }
                        ></textarea>
                        <div className="line"></div>
                        <span className="error-message">
                                {errors.description && errors.description.message}
                            </span>
                        <button className="btn-main-offer contact-btn">contact me</button>
                        
                    </div>
                    
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;
