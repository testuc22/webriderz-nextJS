import Link from 'next/link';
import { useState, useEffect } from 'react';
 
export default function Header(props) {
	const [isActive, setActive] = useState("hide");
	const [btnActive, setButton] = useState("show");
	const [scroll, setScroll] = useState('');
	const showMenu = () => {
		setActive("show");
		setButton("hide");
	};
	const hideMenu = () => {
		setActive("hide");
		setButton("show");
	};
	useEffect(() => {
		const onScroll = () => { 
			if (window.scrollY > 50) {
				setScroll('active')
			}else{
				setScroll('')
			}
		}
		document.addEventListener("scroll", onScroll)
		return () => {
			document.removeEventListener("scroll", onScroll)
		}
 
	}, [scroll, setScroll]);
	
	return(
		<>
			<div className={`header_section ${scroll}`}>
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="header_area">
							
								<div className="header_logo">
									<Link href="/">
									<a href="">
										<img src='/images/logo.png' className="white" alt="Website Logp" />
										<img src='/images/logo-original.png' className="black" alt="Website Logp" />
									</a>
									</Link>
								</div>
								<div className="header_menu">
									<ul>
										<li>
											<Link href="/company">
											<a>Company</a>
											</Link>
											<ul className="company">
												<li>
												<Link href="/team">
												<a>Team</a>
												</Link>
												</li>
												<li>
												<Link href="/career">
												<a>Career</a>
												</Link>
												</li>
												<li>
												<Link href="/testimonial">
												<a>Testimonials</a>
												</Link>
												</li>
											</ul>
										</li>
										<li>
											<Link href="/service">
											<a>Services</a>
											</Link>
											<div className="mega_menu">
												<div className="row">
													<div className="column">
														<h2>Design & UX</h2>
														<ul>
															<li>
																<Link href="/services/website-design">
																<a>Website Design</a>
																</Link>
															</li>
															<li>
																<Link href="/services/ui-ux-interface-design">
																<a>UI/UX Interface Design</a>
																</Link>
															</li>
															<li>
																<Link href="/services/mobile-app-design">
																<a>Mobile App Design</a>
																</Link>
															</li>
															<li>
																<Link href="/services/landing-page-design">
																<a>Landing Page Design</a>
																</Link>
															</li>
															<li>
																<Link href="/services/responsive-website-design">
																<a>Responsive Website Design</a>
																</Link>
															</li>
															<li>
																<Link href="/services/graphic-design">
																<a>Graphic Design</a>
																</Link>
															</li>
														</ul>
													</div>
													<div className="column">
														<h2>Web Development</h2>
														<ul>
															<li>
																<Link href="/services/shopify-development">
																<a>Shopify Development</a>
																</Link>
															</li>
															<li>
																<Link href="/services/custom-web-development">
																<a>Custom Web Development</a>
																</Link>
															</li>
															<li>
																<Link href="/services/e-commerce-development">
																<a>E-commerce Development</a>
																</Link>
															</li>
															<li>
																<Link href="/services/content-management-system">
																<a>Content Management System</a>
																</Link>
															</li>
															<li>
																<Link href="/services/php-development">
																<a>Php Development</a>
																</Link>
															</li>
															<li>
																<Link href="/services/web-portal-development">
																<a>Web Portal Development</a>
																</Link>
															</li>
															<li>
																<Link href="/services/saas-app-development">
																<a>Sass Application Development</a>
																</Link>
															</li>
														</ul>
													</div>
													<div className="column">
														<h2>Mobile Development</h2>
														<ul>
															<li>
																<Link href="/services/ios-development">
																<a>IOS Development</a>
																</Link>
															</li>
															<li>
																<Link href="/services/android-development">
																<a>Android Development</a>
																</Link>
															</li>
															<li>
																<Link href="/services/react-native">
																<a>React Native</a>
																</Link>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</li>
										<li>
											<Link href="/portfolio">
											<a>Portfolio</a>
											</Link>
										</li>
										<li>
											<Link href="/contact-us">
											<a>Contact Us</a>
											</Link>
										</li>
										<li>
											<a href="https://www.webriderz.com/blog/">Blog</a>
										</li>
										<li className="hire_us_btn">
											<a href="https://www.upwork.com/ag/webriderz/">Hire Us</a>
										</li>
									</ul>
								</div>
								<div className="mobile_menu">
									<div className="top-btn">
										<button className={`bar ${btnActive}`} onClick={showMenu} >
											<i className="fas fa-bars"></i>
										</button>
										<button className={`close ${isActive}`} onClick={hideMenu}>
											<i className="fas fa-times"></i>
										</button>
									</div>
									<div className={`responsive_menu ${isActive}`}>
										<ul>
											<li>
												<Link href="/">
												<a href="">Home</a>
												</Link>
											</li>
											<li>
												<a href="#" data-toggle="collapse" data-target="#company">
													Company <i className="fas fa-angle-down"></i>
												</a>
												<div id="company" className="collapse">
													<ul>
														<li>
															<Link href="/team">
															<a href="">Team</a>
															</Link>
														</li>
														<li>
															<Link href="/career">
															<a href="">Career</a>
															</Link>
														</li>
														<li>
															<Link href="/testimonial">
															<a href="">Testimonials</a>
															</Link>
														</li>
													</ul>
												</div>
											</li>
											<li>
												<a href="#" data-toggle="collapse" data-target="#services">
													Services <i className="fas fa-angle-down"></i>
												</a>
												<div id="services" className="collapse">
													<h4 data-toggle="collapse" data-target="#services1">
														Design & UX <i className="fas fa-angle-down"></i>
													</h4>
													<ul id="services1" className="collapse">
														<li>
															<Link href="/services/website-design">
															<a>Website Design</a>
															</Link>
														</li>
														<li>
															<Link href="/services/ui-ux-interface-design">
															<a>UI/UX Interface Design</a>
															</Link>
														</li>
														<li>
															<Link href="/services/mobile-app-design">
															<a>Mobile App Design</a>
															</Link>
														</li>
														<li>
															<Link href="/services/landing-page-design">
															<a>Landing Page Design</a>
															</Link>
														</li>
														<li>
															<Link href="/services/responsive-website-design">
															<a>Responsive Website Design</a>
															</Link>
														</li>
														<li>
															<Link href="/services/graphic-design">
															<a>Graphic Design</a>
															</Link>
														</li>
													</ul>
													<h4 data-toggle="collapse" data-target="#services2">
														Web Development <i className="fas fa-angle-down"></i>
													</h4>
													<ul id="services2" className="collapse">
														<li>
															<Link href="/services/shopify-development">
															<a>Shopify Development</a>
															</Link>
														</li>
														<li>
															<Link href="/services/custom-web-development">
															<a>Custom Web Development</a>
															</Link>
														</li>
														<li>
															<Link href="/services/e-commerce-development">
															<a>E-commerce Development</a>
															</Link>
														</li>
														<li>
															<Link href="/services/content-management-system">
															<a>Content Management System</a>
															</Link>
														</li>
														<li>
															<Link href="/services/php-development">
															<a>Php Development</a>
															</Link>
														</li>
														<li>
															<Link href="/services/web-portal-development">
															<a>Web Portal Development</a>
															</Link>
														</li>
														<li>
															<Link href="/services/saas-app-development">
															<a>Sass Application Development</a>
															</Link>
														</li>
													</ul>
													<h4 data-toggle="collapse" data-target="#services3">
														Mobile Development <i className="fas fa-angle-down"></i>
													</h4>
													<ul id="services3" className="collapse">
														<li>
															<Link href="/services/ios-development">
															<a>IOS Development</a>
															</Link>
														</li>
														<li>
															<Link href="/services/android-development">
															<a>Android Development</a>
															</Link>
														</li>
														<li>
															<Link href="/services/react-native">
															<a>React Native</a>
															</Link>
														</li>
													</ul>
												</div>
											</li>
											<li>
												<Link href="/portfolio">
												<a>Portfolio</a>
												</Link>
											</li>
											<li>
												<a href="https://www.webriderz.com/blog/">Blog</a>
											</li>
											<li>
												<Link href="/contact-us">
												<a>Contact us</a>
												</Link>
											</li>
											<li className="btn">
												<a href="https://www.upwork.com/ag/webriderz/">Hire Us</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="banner_section">
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="banner_area">
								<div className="content">
									<h1>
										{props.breadcum}
									</h1>
									<Link href="/portfolio">
									<a className="cta-yellow our-services">Our Portfolio</a>
									</Link>
								</div>
								<div className="disscuss_sec">
									<h3>Have you<br /> any project<br/> in your mind?</h3>
									<Link href="/contact-us">
									<a className="cta-yellow cta-transparent lets-discuss">
										let's Discuss <i className="fas fa-long-arrow-alt-right"></i>
									</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	);
}