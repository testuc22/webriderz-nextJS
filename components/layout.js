import Link from 'next/link';

const Layout = props => (
	<div className="service_detail_section">
		<div className="container">
			<div className="row">
				<div className="col-xl-12">
					<div className="service_detail_area">
						<div className="row">
							<div className="col-xl-3">
								<div className="service-detail-sidebar">
									<div className="design">
										<h4>Design & UX</h4>
										<ul>
											<li className={props.title === 'Website Design' ? 'active' : null}>
												<Link href="/services/website-design"><a>Website Design</a></Link>
											</li>
											<li className={props.title === 'UI/UX Interface Design' ? 'active' : null}>
												<Link href="/services/ui-ux-interface-design"><a>UI/UX Interface Design</a></Link>
											</li>
											<li className={props.title === 'Mobile App Design' ? 'active' : null}>
												<Link href="/services/mobile-app-design"><a>Mobile App Design</a></Link>
											</li>
											<li className={props.title === 'Landing Page Design' ? 'active' : null}> 
												<Link href="/services/landing-page-design"><a>Landing Page Design</a></Link>
											</li>
											<li className={props.title === 'Responsive Website Design' ? 'active' : null}>
												<Link href="/services/responsive-website-design"><a>Responsive Website Design</a></Link>
											</li>
											<li className={props.title === 'Graphic Design' ? 'active' : null}>
												<Link href="/services/graphic-design"><a>Graphic Design</a></Link>
											</li>
										</ul>
									</div>
									<div className="design">
										<h4>Web Development</h4>
										<ul>
											<li className={props.title === 'Shopify Development' ? 'active' : null}>
												<Link href="/services/shopify-development"><a>Shopify Development</a></Link>
											</li>
											<li className={props.title === 'Custom Web Development' ? 'active' : null}>
												<Link href="/services/custom-web-development"><a>Custom Web Application</a></Link>
											</li>
											<li className={props.title === 'E-commerce Development' ? 'active' : null}>
												<Link href="/services/e-commerce-development"><a>E-Commerce Development</a></Link>
											</li>
											<li className={props.title === 'Content Management System' ? 'active' : null}>
												<Link href="/services/content-management-system"><a>Content Management System</a></Link>
											</li>
											<li className={props.title === 'Php Development' ? 'active' : null}>
												<Link href="/services/php-development"><a>PHP Development</a></Link>
											</li>
											<li className={props.title === 'Web Portal Development' ? 'active' : null}>
												<Link href="/services/web-portal-development"><a>Web Portal Development</a></Link>
											</li>
											<li className={props.title === 'Saas App Development' ? 'active' : null}>
												<Link href="/services/saas-app-development"><a>Saas Application Development</a></Link>
											</li>
										</ul>
									</div>
									<div className="design">
										<h4>Mobile Development</h4>
										<ul>
											<li className={props.title === 'Ios Development' ? 'active' : null}>
												<Link href="/services/ios-development"><a>IOS Development</a></Link>
											</li>
											<li className={props.title === 'Android Development' ? 'active' : null}>
												<Link href="/services/android-development"><a>Android Development</a></Link>
											</li>
											<li className={props.title === 'React Native' ? 'active' : null}>
												<Link href="/services/react-native"><a>React Native</a></Link>
											</li>
										</ul>
									</div>
								</div>		
							</div>
							{props.children}	
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>	
);

export default Layout;