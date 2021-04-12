import Head from 'next/head'
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';

export default function Home() {
	const content = "We design & develop digital products for your business that are changing the world.";
	return (
		<>
			<Head>
				<meta name="title" content="Best Website Designing, Development Company in New York, USA - Webriderz"/>
				<meta name="description" content="Webriderz is an award-winning website designing and web development company in USA that offers mobile development, web design, web development, UX and UI services. Contact now for pocket-friendly services." />
				<meta name="keywords" content="web development, web programming, web design, web consulting, Web service, USA, Website consultant, Branding, Wordpress, UI, UX Designing, Laravel, YII, Shopify, Squarespace, PHP" />
				<meta name="author" content="Web Riderz" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
				<meta name="google-site-verification" content="lRIfbqVCSgGaEG0fztclPzdPvlqGpL7D_IUbwF4UUOc" />
				<title>Best Website Designing, Development Company in New York, USA - Webriderz</title>
			</Head>
			<Header breadcum={content}/>
				<div className="about_info">
					<div className="container">
						<div className="row">
							<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
								<div className="left_side">
									<img src='/images/hp-img1.png' alt="...."/>
								</div>
							</div>
							<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
								<div className="right_side">
									<h2>
										Hello!<br />
										we're <span>creative
										agency in Branding, Web, App & Marketing</span> projects
									</h2>
								</div>
							</div>
						</div>
					</div>  
				</div>
				<div className="what-we-do">
					<div className="container">
						<div className="row">
							<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
								<div className="title">
									<h4>What We Do</h4>
								</div>
							</div>
							<div className="row">
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
									<div className="one_fourth">
										<div className="img_area">
											<img src="images/hp-img2.png" alt="..."/>
										</div>
										<div className="content_area">
											<h5>Design & UX</h5>
											<p>
												Remember, your brand speaks for your idealistic image. Thinking of building a strong brand identity? We are your go-to strategic branding experts.
											</p>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
									<div className="one_fourth">
										<div className="img_area">
											<img src="images/hp-img3.png" alt="..."/>
										</div>
										<div className="content_area">
											<h5>Web Development</h5>
											<p>
												Let us take you into a deeper experience of leadership in the digital age. We design well-developed website that sell.
											</p>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
									<div className="one_fourth">
										<div className="img_area">
											<img src="images/hp-img4.png" alt="..."/>
										</div>
										<div className="content_area">
											<h5>Mobile Development</h5>
											<p>
												Mobile apps are a mainstream in the lives of people. Our tech savvy team creates successful, faultless and user-friendly apps for our clients
											</p>
										</div>
									</div>
								</div>
								<div className="col-xl-12">
									<div className="btn_area">
										<Link href="/service">
										<a className="service_btn">View All Services</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="carousel_section" className="carousel slide" data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active one">
							<div className="title">
								<h2>We Believe in Clean <br/> & Quality Work</h2>
							</div>
							<div className="container">
								<img src="images/slide-img1.png" alt="slide-1" />
							</div>
						</div>
						<div className="carousel-item two">
							<div className="title">
								<h2>We Believe in Clean <br/> & Quality Work</h2>
							</div>
							<div className="container">
								<img src="images/slide-img2.png" alt="slide-2" />
							</div>
						</div>
						<div className="carousel-item three">
							<div className="title">
								<h2>We Believe in Clean <br/> & Quality Work</h2>
							</div>
							<div className="container">
								<img src="images/slide-img3.png" alt="slide-3" />
							</div>
						</div>
						<div className="carousel-item four">
							<div className="title">
								<h2>We Believe in Clean <br/> & Quality Work</h2>
							</div>
							<div className="container">
								<img src="images/slide-img4.png" alt="slide-4" />
							</div>
						</div>
					</div>
					<a className="carousel-control-prev" href="#carousel_section" data-slide="prev">
						<span className="carousel-control-prev-icon"></span>
					</a>
					<a className="carousel-control-next" href="#carousel_section" data-slide="next">
						<span className="carousel-control-next-icon"></span>
					</a>
				</div>
				<div className="let_get_started">
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								<div className="content_area">
									<h4>Start A Project</h4>
									<h5>Want to Work With Us</h5>
									<h2>Let's Get Started</h2>
									<a>
										<i className ="fas fa-arrow-right"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="our_studio">
					<div className="container">
						<div className="row no-gutters">
							<div className="col-xl-8 col-lg-8 col-md-6 col-12">
								<div className="left_side">
									<img src="images/hp-img6.jpg" alt="..."/>
								</div>
							</div>
							<div className="col-xl-4 col-lg-8 col-md-6 col-12">
								<div className="right_side">
									<h4>Our Studio</h4>
									<p>Get to Know us</p>
									<a>Read More</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="stats_section">
					<div className="container">
						<div className="row">
							<div className="col-xl-6 col-12">
								<div className="left_side">
									<div className="media">
										<img src="images/hp-img7.png" alt="..."/>
										<span>03</span>
										<div className="media-body">
											<h5>Years In <br />Business</h5>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-6 col-12">
								<div className="left_side">
									<div className="media">
										<img src="images/hp-img8.png" alt="..."/>
										<span>15</span>
										<div className="media-body">
											<h5>Team<br />Members</h5>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3">
								<div className="stat_bottom">
									<img src="images/hp-img9.png" alt="..."/>
									<span>60+</span>
									<p>HAPPY CLIENTS</p>
								</div>
							</div>
							<div className="col-xl-3">
								<div className="stat_bottom">
									<img src="images/hp-img10.png" alt="..."/>
									<span>1000+</span>
									<p>SUCCESSFUL PROJECTS</p>
								</div>
							</div>
							<div className="col-xl-3">
								<div className="stat_bottom">
									<img src="images/hp-img11.png" alt="..."/>
									<span>500+</span>
									<p>DEVELOPED WEBSITES</p>
								</div>
							</div>
							<div className="col-xl-3">
								<div className="stat_bottom">
									<img src="images/hp-img11.png" alt="..."/>
									<span>100%</span>
									<p>QUALITY WORK</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="testimonial_section">
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								<div className="title">
									<p>
										World class clients that trust us with their safety
									</p>
									<h5>
										1000+ customers across the globe
									</h5>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-xl-4">
								<div className="test_inner">
									<img src="images/hp-img13.png" alt=""/>
									<div className="content">
										<p>
											Happy to work with Harjinder anytime. very reliable and quick service povider in UX designing.
										</p>
									</div>
									<h6>
										Fiona Redler
									</h6>
									<span>
										Business Owner
									</span>
								</div>
							</div>
							<div className="col-xl-4">
								<div className="test_inner">
									<img src="images/hp-img16.png" alt=""/>
									<div className="content">
										<p>
											We have used Robind for many contracts and are always very happy with his results and speed!
										</p>
									</div>
									<h6>
										LEVI KOENIG
									</h6>
									<span>
										Business Owner
									</span>
								</div>
							</div>
							<div className="col-xl-4">
								<div className="test_inner">
									<img src="images/hp-img15.png" alt=""/>
									<div className="content">
										<p>
											Kiran was awesome - This is the 4th time I am working with him, and the quality of his work is great.
										</p>
									</div>
									<h6>
										SHIMON
									</h6>
									<span>
										Business Owner
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			<Footer />
		</>
	);
}
