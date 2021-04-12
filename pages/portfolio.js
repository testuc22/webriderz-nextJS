import Head from 'next/head'
import Header from '../components/header';
import Footer from '../components/footer';

export default function Portfolio() {
    return(
        <>
            <Head>
                <title>Website Design & Mobile Apps Portfolio - Webriderz</title>
                <meta name="title" content="Website Design & Mobile Apps Portfolio - Webriderz"/>
                <meta name="description" content="We are delivering best quality work in web and mobile development. You can have a quick look on our portfolio.
                    "/>
                <meta name="keywords" content="Explore our UX/UI website design, mobile apps portfolio that we have worked on. Check out our work."/>
                <meta name="author" content="Web Riderz"/>
            </Head>
            <Header breadcum="Portfolio"/>
            <div className="portfolio_section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="portfolio_area">
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-wordpress" role="tab" aria-controls="pills-home" aria-selected="true">Wordpress</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-codeigniter" role="tab" aria-controls="pills-profile" aria-selected="false">Codeigniter</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-angular" role="tab" aria-controls="pills-contact" aria-selected="false">Angular</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-squarespace" role="tab" aria-controls="pills-contact" aria-selected="false">SQUARESPACE </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-shopify" role="tab" aria-controls="pills-contact" aria-selected="false">Shopify</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-laravel" role="tab" aria-controls="pills-contact" aria-selected="false">Laravel</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-yii" role="tab" aria-controls="pills-contact" aria-selected="false">Yii</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-wordpress" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <div className="row">
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/printing2.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Axiom Printing</h5>
                                                        <p>Printing Company</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/dentist-and-co.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Dentist & Co</h5>
                                                        <p>Dental Clinic</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/prime-home-health-care.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Prime Home Health Care</h5>
                                                        <p>Home Health Care</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-codeigniter" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        <div className="row">
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/printing2.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Axiom Printing</h5>
                                                        <p>Printing Company</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/dentist-and-co.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Dentist & Co</h5>
                                                        <p>Dental Clinic</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/prime-home-health-care.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Prime Home Health Care</h5>
                                                        <p>Home Health Care</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-angular" role="tabpanel" aria-labelledby="pills-contact-tab">
                                        <div className="row">
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/printing2.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Axiom Printing</h5>
                                                        <p>Printing Company</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/dentist-and-co.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Dentist & Co</h5>
                                                        <p>Dental Clinic</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/prime-home-health-care.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Prime Home Health Care</h5>
                                                        <p>Home Health Care</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-squarespace" role="tabpanel" aria-labelledby="pills-contact-tab">
                                        <div className="row">
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/printing2.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Axiom Printing</h5>
                                                        <p>Printing Company</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/dentist-and-co.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Dentist & Co</h5>
                                                        <p>Dental Clinic</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/prime-home-health-care.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Prime Home Health Care</h5>
                                                        <p>Home Health Care</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-shopify" role="tabpanel" aria-labelledby="pills-contact-tab">
                                        <div className="row">
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/printing2.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Axiom Printing</h5>
                                                        <p>Printing Company</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/dentist-and-co.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Dentist & Co</h5>
                                                        <p>Dental Clinic</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/prime-home-health-care.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Prime Home Health Care</h5>
                                                        <p>Home Health Care</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-laravel" role="tabpanel" aria-labelledby="pills-contact-tab">
                                        <div className="row">
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/printing2.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Axiom Printing</h5>
                                                        <p>Printing Company</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/dentist-and-co.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Dentist & Co</h5>
                                                        <p>Dental Clinic</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/prime-home-health-care.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Prime Home Health Care</h5>
                                                        <p>Home Health Care</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-yii" role="tabpanel" aria-labelledby="pills-contact-tab">
                                        <div className="row">
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/printing2.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Axiom Printing</h5>
                                                        <p>Printing Company</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/dentist-and-co.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Dentist & Co</h5>
                                                        <p>Dental Clinic</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                            <div className="col-xl-4">
                                                <a href="http://axiomdesigns.com/" target="_blank" rel="noopener noreferrer">
                                                <div className="img_area">
                                                    <img src="https://www.webriderz.com/images/prime-home-health-care.png" alt=""/>
                                                    <div className="link">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Prime Home Health Care</h5>
                                                        <p>Home Health Care</p>
                                                    </div>
                                                </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}