import Head from 'next/head'
import Header from '../components/header';
import Footer from '../components/footer';

export default function Testimonial() {
    return(
        <>
            <Head>
                <title>Website Designing and Development Company | Web Riderz</title>
            </Head>
            <Header breadcum="Testimonials"/>
            <div className="testimonial_info">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="media">
                                <img src="images/testimonials-img1.png" alt="..."/>
                                <div className="media-body">
                                    <p>
                                        Great job from Harji.. he provided the logo as really wanted and provided reversions on time. Highly recommended A++++++++
                                    </p>
                                    <h6>JOHNNY B</h6>
                                    <span>BUSINESS OWNER</span>
                                </div>
                            </div>
                            <div className="media">
                                <img src="images/testimonials-img1.png" alt="..."/>
                                <div className="media-body">
                                    <p>
                                        Happy to work with Harjinder anytime. very reliable and quick service povider in UX designing.
                                    </p>
                                    <h6>FIONA REDLER</h6>
                                    <span>OWNER AT PROSPER</span>
                                </div>
                            </div>
                            <div className="media">
                                <img src="images/testimonials-img1.png" alt="..."/>
                                <div className="media-body">
                                    <p>
                                        We have used Robind for many contracts and are always very happy with his results and speed!
                                    </p>
                                    <h6>LEVI KOENIG</h6>
                                    <span>BUSINESS OWNER AT CLEANING PROS</span>
                                </div>
                            </div>
                            <div className="media">
                                <img src="images/testimonials-img1.png" alt="..."/>
                                <div className="media-body">
                                    <p>
                                        Harjinder is a great worker.. he really knows what he's doing and he delivers just in time. His revisions are done quickly for the logo and graphic designs. Highly recommended for Logo and Graphic Design.
                                    </p>
                                    <h6>JOHNNY B</h6>
                                    <span>BUSINESS OWNER</span>
                                </div>
                            </div>
                            <div className="media">
                                <img src="images/testimonials-img1.png" alt="..."/>
                                <div className="media-body">
                                    <p>
                                        Kiran was awesome - This is the 4th time I am working with him, and the quality of his work is great.   
                                    </p>
                                    <h6>SHIMON</h6>
                                    <span>BUSINESS OWNER</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}