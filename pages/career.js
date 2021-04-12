import Head from 'next/head'
import { useForm } from "react-hook-form";
import Header from '../components/header';
import Footer from '../components/footer';
import { useState } from 'react';
import axios from 'axios';

const API_PATH = 'http://localhost/api/contact/';
export default function Career() {
    const [invalidImage, setInvalidImage] = useState("");
    const [imageSize, setImageSize] = useState("");
    const [image, setImage] = useState(null);
    const [mailSent, setMailSent] = useState(false)
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data, e) => {
        //console.log(data)
        var formData = new FormData();
        formData.append('data', JSON.stringify(data));
        formData.append('file', image);
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
            console.log(result);
        });
    }
    const onChangeFile = (e) => {
        const imageFile = e.target.files[0];
        if (!imageFile.name.match(/\.(pdf|doc)$/)) {
            setInvalidImage('Only Pdf or Docs file Allowed');
            return false;
        }
        if(imageFile.size > 20000) {
            setImageSize('Uploaded File Too Large');
            return false;
        }
        setImage(imageFile);
    };
    return(
        <>
            <Head>
                <meta name="description" content="WebRiderz has fantastic career opportunities for Web Application Developers, Designers, Custom Software Developers and SEO experts." />
	            <title>We are hiring web experts | WebRiderz</title>
            </Head>
            <Header breadcum="Career"/>
            <div className="career_info">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="info_area">
                                <h3>
                                    Join our Hands for moving towards success together
                                </h3>
                                <p>
                                    Working in WebRiderz is not just a job, it’s a platform where we not only gives you job task but also provide you opportunity to shows your tech skills and also helps you to enhance your skills. So if you are looking forward to join such amazing work place then our company WebRiderz is best for you. We always look for such passionate, creative minds (person) who want to best in their field. We really welcome such employees those who believe in team work & ready to move towards success by holding hands of each other.
                                </p>
                                <h4>
                                    BENEFITS
                                </h4>
                                <ul>
                                    <li>Energetic and Friendly work environment,</li>
                                    <li>Opportunity to work on real coding projects,</li>
                                    <li>Amazing and innovative team,</li>
                                    <li>Employee recognition programs,</li>
                                    <li>Team Building experiences.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recruitment_info">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="content_area">
                                        <h2>
                                            We are looking for tech artists for these positions
                                        </h2>
                                        <div className="job_position">
                                            <div className="desc">
                                                <h4>PHP DEVELOPER</h4>
                                                <span>Location:Ludhiana</span>
                                                <p>
                                                    We are in search of PHP Developer who is willing to work in friendly environment and having a great enthusiasm for coding and problem solving.
                                                </p>
                                                <a href="//" data-toggle="collapse" data-target="#output">Read More</a>
                                                <div id="output" className="collapse">
                                                    <h5>Responsibilities and Duties</h5>
                                                    <ul>
                                                        <li>Strong fundamentals in CorePHP is a must.</li>
                                                        <li>Strong fundamentals in OOPS, MySQL, Jquery, Ajax.</li>
                                                        <li>Strong knowledge of CMSs Like Shopify, Wordpress.</li>
                                                        <li>Strong knowledge of PHP web frameworks like Laravel, Cake PHP, Yii, Codeigniter.</li>
                                                        <li>Basic understanding of front-end technologies, such as JavaScript, HTML5, and CSS3</li>
                                                        <li>Proficient understanding of code versioning tools, such as Git.</li>
                                                        <li>Write - clean-, well-designed code</li>
                                                        <li>Experience in common third-party APIs (Google, Facebook etc)</li>
                                                        <li>Be part of diverse, high-energy teams focused on complete project life-cycle.</li>
                                                        <li>Good communication (written and spoken English) skills are desired.</li>
                                                        <li>Coordination skills to work in a team</li>
                                                        <li>Willing to learn new skills and never give up attitude</li>
                                                        <li>Problem solving &amp; logical skills,</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="apply_btn">
                                            <button data-toggle="modal" data-target="#myModal">Apply</button>
                                            </div>
                                        </div>
                                        <div className="job_position">
                                            <div className="desc">
                                                <h4>BUSINESS DEVELOPMENT EXECUTIVE</h4>
                                                <span>Location:Ludhiana</span>
                                                <span>Experience: 1 year to 4 years</span>
                                                <span>Education: Graduate</span>
                                                <span>: Excellent communication skills</span>
                                                <a href="//" data-toggle="collapse" data-target="#output2">Read More</a>
                                                <div id="output2" className="collapse">
                                                    <h5>Responsibilities and Duties</h5>
                                                    <ul>
                                                        <li>Expert in generate leads</li>
                                                        <li>Sound knowledge on online freelancing portal like Upwork, freelancer, Elance etc.</li>
                                                        <li>Expert in generating new business through LinkedIn, references, etc</li>
                                                        <li>Writing proposals, bidding for the website and interacting with international clients.</li>
                                                        <li>A candidate should have excellent communication skills and written skills.</li>
                                                        <li>Up to date with industry leading software and technologies.</li>
                                                        <li>Ability to work independently. Good communication skills, A positive attitude.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="apply_btn">
                                                <button  data-toggle="modal" data-target="#myModal">Apply</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-body">
                    <div>
                    {mailSent === 'success' ? (<label className="success">Thank you for contcting us.</label>) : ""}
                    </div>
                        <h4>Send Us Your Resume</h4> 
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <form onSubmit={handleSubmit(onSubmit)} id="resumeForm" action="#" method="POST" encType="multipart/form-data" autoComplete="off">
                            <div className="row">
                                <div className="col-6">
                                    {errors.name && <p className="error">Name is required.</p>}
                                    <div className="form-group">
                                        <input
                                            {...register('name', {required:true})} 
                                            type="text"
                                            name="name" 
                                            className="form-control" 
                                            placeholder="Your Name" 
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    {errors.email?.type === "required"  && <p className="error">Email Required.</p>}
                                    { errors.email?.type === "pattern" && <p className="error">Invalid Email</p> }
                                    <div className="form-group">
                                        <input 
                                            {...register('email', {required:true, pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,}})}
                                            type="email" 
                                            name="email" 
                                            className="form-control" 
                                            placeholder="Your Email" 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    {errors.phone?.type === "required" && <p className="error">Phone Number Required.</p>}
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
                                <div className="col-6">
                                    <div className="form-group">
                                    {errors.qualification && <p className="error">Required.</p>}
                                    <select 
                                        {...register('qualification', {required:true})}
                                        name="qualification" 
                                        className="form-control" 
                                    >
                                        <option value="">Select Qualification</option>
                                        <option value="Graduate">Graduate</option>
                                        <option value="Post Graduate">Post Graduate</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                    {errors.experience && <p className="error">Required.</p>}
                                    <select 
                                        {...register('experience', {required:true})}
                                        name="experience" 
                                        className="form-control" 
                                    > 
                                        <option value="">Select Experience</option>
                                        <option value="fresher">Fresher</option>
                                        <option value="1 year">1 Year</option>
                                        <option value="2 year">2 Year</option>
                                        <option value="3+ year">3+ Year</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                    {errors.position && <p className="error">Required.</p>}
                                    <select 
                                        {...register('position', {required:true})}
                                        name="position" 
                                        className="form-control" 
                                    >
                                        <option value="">Select Position</option>
                                        <option value="Web Developer">Web Developer</option>
                                        <option value="Frontend Developer">Frontend Developer</option>
                                        <option value="Backend Developer">Backend Developer</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    {errors.c_ctc?.type === "required" && <p className="error">Current CTC is required.</p>}
                                    {errors.c_ctc?.type === "pattern" && <p className="error">Text Not Allowed(Only Numeric)</p>}
                                    <div className="form-group">
                                        <input 
                                            {...register('c_ctc', {required:true, pattern:{value:/^(0|[1-9][0-9]*)$/i,}})}
                                            type="text" 
                                            name="c_ctc" 
                                            className="form-control" 
                                            placeholder="Current CTC" 
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    {errors.e_ctc?.type === "required"  && <p className="error">Expected CTC Is required.</p>}
                                    {errors.e_ctc?.type === "pattern" && <p className="error">Text Not Allowed(Only Numeric)</p>}
                                    <div className="form-group">
                                        <input 
                                            {...register('e_ctc', {required:true, pattern:{value:/^(0|[1-9][0-9]*)$/i,}})}
                                            type="text" 
                                            name="e_ctc" 
                                            className="form-control" 
                                            placeholder="Expected CTC" 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                    <div className="col-12">
                                        {errors.msg && <p className="error">Message is required.</p>} 
                                        <div className="form-group">
                                            <textarea 
                                                {...register('msg', {required:true})}
                                                name="msg"
                                                rows="5"
                                                className="form-control" 
                                                placeholder="Your Message"
                                            >

                                            </textarea>
                                        </div>
                                    </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                    <div className="form-group">
                                    <label>
                                        <span>
                                            <i className="fas fa-cloud-upload-alt"></i> Upload Resume
                                        </span>
                                        {errors.picture && <p className="file_error">Required</p>}
                                        {invalidImage && <p className="file_error">{invalidImage}</p>}
                                        {imageSize && <p className="file_error">{imageSize}</p>}
                                        <input 
                                            {...register('picture', {required:true})}
                                            type="file" 
                                            id="file" 
                                            name="picture"
                                            className="form-control-file" 
                                            onChange={onChangeFile}
                                        />
                                    </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-submit">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}