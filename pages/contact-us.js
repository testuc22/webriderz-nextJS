import Head from 'next/head'
import { useForm } from "react-hook-form";
import Header from '../components/header';
import Footer from '../components/footer';
import { useState } from 'react';
import axios from 'axios';

const API_PATH = 'http://localhost/api/contact/mail.php';
export default function ContactUs() {
    const src = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13697.821488023219!2d75.8557443!3d30.8739198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1d2424541bf6f0c4!2sWebRiderz!5e0!3m2!1sen!2sin!4v1617182472518!5m2!1sen!2sin'; 
    const [mailSent, setMailSent] = useState(false)
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data, e) => {
        console.log(data);
        var formData = new FormData();
        formData.append('data', JSON.stringify(data));
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: formData
        })
        .then(result => {
            setMailSent(result.data.type);
            e.target.reset();
            setTimeout(
                function() {
                    window.location.reload();
                },
                2000
            );
        });
    }
    return(
        <>
            <Head>
                <title>Contact WebRiderz - Website Design & Development Company</title>
                <meta name="title" content="Web Riderz | Contact WebRiderz - Website Design & Development Company"/>
                <meta name="description" content="Contact us for free assesment and services in web development and designing at info@webriderz.com " />
                <meta name="keywords" content="web development, web programming, web design, web consulting, Web service, USA, Website consultant, Branding, Wordpress, UI, UX Designing, Laravel, YII, Shopify, Squarespace, PHP" />
                <meta name="author" content="Web Riderz" />
            </Head>
            <Header breadcum="Contact Us"/>
            <div className="contact_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="contact_area">
                                    <div className="row">
                                        <div className="col-xl-9">
                                            <div className="left_side">
                                                <div className="contact_top">
                                                    <h3>Contact Us</h3>
                                                    <span>Let’s discuss recommendation solution for your project</span>
                                                    <ul>
                                                        <li>
                                                            <img src="images/contact-img1.png" alt="..."/>
                                                            <h5>Phone</h5>
                                                            <p>0161-5028632 <br/>+919780361196</p>
                                                        </li>
                                                        <li>
                                                            <img src="images/contact-img2.png" alt="..."/>
                                                            <h5>Phone</h5>
                                                            <p>0161-5028632 <br /> +919780361196</p>
                                                        </li>
                                                        <li>
                                                            <img src="images/contact-img3.png" alt="..."/>
                                                            <h5>Phone</h5>
                                                            <p>0161-5028632 <br />+919780361196</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {mailSent === 'success' ? (<label className="success">Thank you for contcting us.</label>) : ""}
                                                <div className="contact-form">
                                                    <h3>Get in Touch</h3>
                                                    <form onSubmit={handleSubmit(onSubmit)} action="#" method="post" autoComplete="off">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    {errors.name && <p className="error">Required*</p>}
                                                                    <input 
                                                                        {...register('name', {required:true})}
                                                                        type="text"
                                                                        name="name" 
                                                                        className="form-control" 
                                                                        placeholder="Name"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    {errors.email?.type === "required" && <p className="error">Required*</p>}
                                                                    { errors.email?.type === "pattern" && <p className="error">Invalid Email</p> }
                                                                    <input 
                                                                        {...register('email', {required:true, pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,}})}
                                                                        type="email"
                                                                        name="email" 
                                                                        className="form-control" 
                                                                        placeholder="Email"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    {errors.phone?.type === "required" && <p className="error">Required*</p>}
                                                                    {errors.phone?.type === "pattern" && <p className="error">Invalid Number (10 Digit Required)</p>}
                                                                    <div className="form-group">
                                                                        <input 
                                                                            {...register('phone', {required:true, pattern:{value:/^[0-9]{10}$/i,}})}
                                                                            type="text" 
                                                                            name="phone" 
                                                                            className="form-control" 
                                                                            placeholder="Phone Number" 
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    {errors.subject && <p className="error">Required*</p>}
                                                                    <input 
                                                                        {...register('subject', {required:true})}
                                                                        type="text"
                                                                        name="subject" 
                                                                        className="form-control" 
                                                                        placeholder="Subject"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    {errors.msg && <p className="error">Required*</p>}
                                                                    <textarea 
                                                                        {...register('msg', {required:true})}
                                                                        name="msg" 
                                                                        className="form-control" 
                                                                        cols="30" rows="5" 
                                                                        placeholder="Message"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-xl-12">
                                                                <div className="form-group">
                                                                    <button>submit</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <div className="social-icon">
                                                <ul>
                                                    <li className="facebook">
                                                        <a href="https://www.facebook.com/webriderzindia/">
                                                            <i className="fab fa-facebook-f"></i>
                                                        </a>
                                                    </li>
                                                    <li className="linkedin">
                                                        <a href="https://www.linkedin.com/company/webriderz/">
                                                            <i className="fab fa-linkedin-in"></i>
                                                        </a>
                                                    </li>
                                                    <li className="instagram">
                                                        <a href="https://www.instagram.com/web_riderz/">
                                                            <i className="fab fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li className="behance">
                                                        <a href="https://www.behance.net/webriderz">
                                                            <i className="fab fa-behance"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map_section">
                    <iframe title="location" src={src}></iframe>
                </div>
            <Footer />
        </>
    );
}