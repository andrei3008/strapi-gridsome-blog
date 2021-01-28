<template>
<header class="ax-header haeder-default light-logo-version header-transparent axil-header-sticky">
	<div class="header-wrapper">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-3 col-md-6 col-sm-6 col-8 header-left">
              <g-link to="/">{{ $static.strapi.global.Logo }}</g-link>
							<div class="logo">
                
									<img src="http://localhost:1337/uploads/logo_1b12330a93.png" alt="visual studio"
										style="width: 200px;"></div>
						</div>
						<div class="col-lg-9 col-md-6 col-sm-6 col-4 header-right">
							<div class="mainmenu-wrapepr">
								<!-- Start Mainmanu Nav -->
								<nav class="mainmenu-nav d-none d-lg-block">
									<ul class="mainmenu">
										<li><g-link to="/">Acasa</g-link></li>
										<li class="has-dropdown"><g-link to="/Servicii">Servicii</g-link>
											<ul class="axil-submenu">
												<li><a href="web-design-and-development/index.html">Web design și development</a></li>
												<li><a href="e-commerce-web-design/index.html">Magazin Online E-commerce</a></li>
												<li><a href="wordpress-custom-website/index.html">Custom Wordpress Website</a></li>
												<li><a href="digital-marketing/index.html">Marketing Digital </a></li>
												<li><a href="website-redesign/index.html">Website Redesign</a></li>
												<li><a href="app-development/index.html">App Development</a></li>
											</ul>
										</li>
										<li><g-link to="/despre">Despre noi</g-link></li>
										<li><g-link to="/portofoliu">Portofoliu</g-link></li>
										<li><g-link to="/blog">Blog</g-link></li>
										<li><g-link to="/contact">Contact</g-link></li>
									</ul>
								</nav> <!-- End Mainmanu Nav -->
								<div class="axil-header-extra d-flex align-items-center">
									<!-- Start Hamburger -->
									<div class="ax-hamburger ml--40 ml_sm--10 d-none d-lg-block"> <a
											class="axil-menuToggle ax-hamburger-trigger" id="side-nav-toggler" href="#">
											<span></span> <span></span> <span></span> </a></div> <!-- End Hamburger -->
									<!-- Start Menu Bar  -->
									<div
										class="ax-menubar popup-navigation-activation d-block d-lg-none ml_sm--20 ml_md--20">
										<div> <i></i></div>
									</div> <!-- End Menu Bar  -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

      <div class="popup-mobile-manu">
			<div class="inner">
				<div class="mobileheader">
					<div class="logo"> <a href="index.html"> <img
								src="http://localhost:1337/uploads/logo_1b12330a93.png" alt="visual studio"
								style="width: 135px;"> </a></div> <a class="close-menu" href="#"></a>
				</div>
				<div class="menu-item">
					<ul class="mainmenu-item">
						<li><a href="index.html">Acasă</a></li>
						<li class="has-children"><a href="services/index.html">Servicii</a>
							<ul class="submenu">
								<li><a href="web-design-and-development/index.html">Web design și development</a></li>
								<li><a href="e-commerce-web-design/index.html">Magazin Online E-commerce</a></li>
								<li><a href="wordpress-custom-website/index.html">Custom Wordpress Website</a></li>
								<li><a href="digital-marketing/index.html">Marketing Digital </a></li>
								<li><a href="website-redesign/index.html">Website Redesign</a></li>
								<li><a href="app-development/index.html">App Development</a></li>
							</ul>
						</li>
						<li><a href="about-us/index.html">Despre Noi</a></li>
						<li><a href="our-projects/index.html">Portofoliu</a></li>
						<li><a href="blog/index.html">Blog</a></li>
						<li><a href="contact/index.html">Contact</a></li>
					</ul>
				</div>
			</div>
</div> <!-- End Popup Mobile Menu -->
		<div class="side-nav">
			<div class="side-nav-inner">
				<!-- Start Side Content  -->
				<div class="side-nav-content">
					<div class="row ">
						<!-- Start Right Bar  -->
						<div class="col-lg-12 col-xl-12 col-12">
							<div class="axil-contact-info-inner">
								<!-- Start Single Address  -->
								<div class="axil-contact-info">
									<address class="address"> <span class="title">Punctul de lucru</span>
										<p>k-412 Golf Vista <br> Crossing Republik 201016<br> India</p>
									</address>
									<address class="address"> <span class="title">We're Available 24/ 7. Call
											Now.</span>
										<p><a class="tel" href="tel:0770561719"><i class="fas fa-phone"></i>+40 770 561 719</a></p>
									</address>
								</div> <!-- End Single Address  -->
								<!-- Start Single Address  -->
								<div class="axil-contact-info">
									<h5 class="title">Urmărește-ne și pe</h5>
									<div class="contact-social-share d-flex align-items-center">
										<ul class="social-share style-rounded">
											<li><a href="https://www.facebook.com/Nwey-Design-100376458575881"
													target="_blank"><i class="fab fa-facebook-f"></i></a></li>
											<li><a href="https://twitter.com/nweydesign" target="_blank"><i
														class="fab fa-twitter"></i></a></li>
											<li><a href="https://www.linkedin.com/company/nwey-design/"
													target="_blank"><i class="fab fa-linkedin"></i></a></li>
											<li><a href="https://www.pinterest.com/nweydesign/" target="_blank"><i
														class="fab fa-pinterest"></i></a></li>
											<li><a href="https://www.instagram.com/nweydesign/" target="_blank"><i
														class="fab fa-instagram"></i></a></li>
										</ul>
									</div>
								</div> <!-- End Single Address  -->
							</div>
						</div> <!-- End Right Bar  -->
					</div>
				</div> <!-- End Side Content  -->
				<!-- End of .side-nav-inner -->
				<div class="close-sidenav" id="close-sidenav"> <button class="close-button"><i
							class="fal fa-times"></i></button></div>
			</div>
		</div> <!-- End Sidebar Area  -->
    
    
    </header> <!-- Start Header -->

</template>

<static-query>
query {
  strapi {
    categories {
      id
      name
      slug
    }
    global {
      siteName
      
    }
  }
}
</static-query>
