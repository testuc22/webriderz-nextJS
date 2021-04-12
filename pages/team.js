import Head from 'next/head'
import Header from '../components/header';
import Footer from '../components/footer';

export default function Team() {
    return(
        <>
            <Head>
                <meta name="description" content="At the WebRiderz, We are website desgining and developer experts in different technologies, who become partners, friends, and advisers to clients worldwide." />
	            <title>Team of Web development experts</title>
            </Head>
            <Header breadcum="Team"/>
            <div className="leader_section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="title">
                                <h4>Our Leadership</h4>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-3">
                                    <div className="employee_inner">
                                        <h5>Harjinder Singh</h5>
                                        <h6>CEO & Co-Founder</h6>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="employee_inner border">
                                        <h5>Robind Kumar</h5>
                                        <h6>COO & Co-Founder</h6>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="employee_inner bg_color">
                                        <h5>Kiran Kumar</h5>
                                        <h6>CTO & Co-Founder</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team_section">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="title">
                                        <h2>
                                            A collective of dedicated talents set in motion
                                        </h2>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-3">
                                            <div className="team_inner">
                                                <h5>Harjinder Singh</h5>
                                                <p>Sr. UI/UX Designer</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <div className="team_inner bg_border">
                                                <h5>Robind Kumar</h5>
                                                <p>Sr. Frontend Developer</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <div className="team_inner bg_black">
                                                <h5>Kiran Kumar</h5>
                                                <p>Sr. Back-end Developer</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <div className="team_inner bg_grey">
                                                <h5>Gurleen Kaur</h5>
                                                <p>Sr. Back-end Developer</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <div className="team_inner bg_black">
                                                <h5>Harsh Bala</h5>
                                                <p>Sr. Web Developer</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <div className="team_inner">
                                                <h5>RamanPrit Singh</h5>
                                                <p>Sr. Frontend Developer</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <div className="team_inner bg_grey">
                                                <h5>Taranpreet Kaur</h5>
                                                <p>Human Resource Manager</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <div className="team_inner bg_border">
                                                <h5>Ratika Rani</h5>
                                                <p>Sr. Front-end Developer</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <div className="team_inner bg_grey">
                                                <h5>Gurwinder Singh</h5>
                                                <p>Php Developer</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <div className="team_inner bg_black">
                                                <h5>Talim Ansari</h5>
                                                <p>Frontend Developer</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <div className="team_inner bg_border">
                                                <h5>Sunny Verma</h5>
                                                <p>Front-end Developer</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <div className="team_inner">
                                                <h5>Taranpreet Kaur</h5>
                                                <p>Front-end Developer</p>
                                            </div>
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