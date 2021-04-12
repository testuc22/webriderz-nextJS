import Link from 'next/link';

const Footer = () => (
	<div className="footer_section">
		<div className="container">
			<div className="row">
				<div className="col-xl-12">
					<div className="footer_top">
						<div className="title">
							<h4>LETS MAKE SOMETHING GREAT</h4>
							<Link href="/contact-us">
							<a> Contact us</a>
							</Link>
						</div>
						<div className="icon">
							<ul>
								<li>
									<a href="https://www.facebook.com/webriderzindia/">
									<i className="fab fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a href="https://twitter.com/Webriderz">
									<i className="fab fa-twitter"></i>
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/web_riderz/">
									<i className="fab fa-instagram"></i>
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/company/webriderz/">
									<i className="fab fa-linkedin-in"></i>
									</a>
								</li>
								<li>
									<a href="https://www.behance.net/webriderz">
									<i className="fab fa-behance"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="footer_area">
						<div className="row">
							<div className="col-xl-8">
								<div className="row">
									<div className="col-xl-3">
										<div className="footer_items">
											<ul>
												<li>
													<Link href="/company">
													<a>Company</a>
													</Link>	
												</li>
												<li>
													<Link href="/service">
													<a>Services</a>
													</Link>
												</li>
												<li>
													<Link href="/portfolio">
													<a>Portfolio</a>
													</Link>
												</li>
												<li>
													<Link href="/team">
													<a>Team</a>
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
												<li><a href="https://www.webriderz.com/sitemap">sitemap</a></li>
											</ul>
										</div>
									</div>
									<div className="col-xl-3">
										<div className="footer_items">
											<h6>Call US On</h6>
											<a>0161-5028632</a>
										</div>
									</div>
									<div className="col-xl-3">
										<div className="footer_items">
											<h6>Address</h6>
											<p>Cabin No 111-113, 2nd Floor, Kashish Complex, New Grain Market, Gill Road Ludhiana.</p>
										</div>
									</div>
									<div className="col-xl-3">
										<div className="footer_items">
											<h6>Email</h6>
											<a>info@webriderz.com</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-4">
								<div className="footer_items">
									<a className="footer_logo">
										<img src='/images/footer-logo.png' alt="..."/>
									</a>
								</div>
								<div className="good_firmz">
									<a href="https://www.goodfirms.co/company/webriderz">
									<img src="/images/good-firmz.svg" alt="..."/>
									</a>
								</div>
							</div>
						</div> 
					</div>
					<div className="copy_right">
						<p>
							&copy; 2021 WebRiderz. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);
export default Footer;