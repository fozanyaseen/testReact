import React from 'react'
import { Link } from 'react-router-dom'

export default function VendorHome() {
  return (

    <React.Fragment>
		<nav data-testid = "nav" class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

			<div class="container">
				<a class="navbar-brand" href="index.html">Armoire<span>.</span></a>

				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarsFurni">
					<ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
						<li class="nav-item active">
							<Link class="nav-link" to="/">Home</Link>
						</li>
						<li><Link class="nav-link" to="/discountpage">Discounts & Sale</Link></li>
						<li><Link class="nav-link" to="/PendingOrders">Pending Orders</Link></li>
						<li><Link class="nav-link" to="/AllOrders">Order History</Link></li>

					</ul>

				</div>
			</div>
				
		</nav>
		
			<div id="home"class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div data-testid = "page-description" class="intro-excerpt">
								<h1>Armoire Online<span clsas="d-block"> Admin Panel</span></h1>
								<p class="mb-4">Welcome to the administrative panel for Armoire's online marketplace. Choose any of the options below or scroll down to continue with administrative tasks.</p>
								<p><a href="#tools" class="btn btn-secondary me-2">Business Tools</a><a to="/AllOrders" class="btn btn-white-outline">Order History</a></p>
							</div>
						</div>
						<div class="col-lg-7">
							<div class="hero-img-wrap">
								<img src="assets/images/couch.png" class="img-fluid"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		
		<div data-testid = "tools" id = "tools" class="product-section">
			<div class="container">
				<div class="row">
					<div  class="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2  class="mb-4 section-title">Business Tools for Armoire</h2>
						<p class="mb-4">The main dashboard for business tools. Mantain product catalog, adjust the pricing and discounts, and view pending orders from this section.</p>
						<p><a href="#home" class="btn">Back</a></p>
					</div> 
			
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="cart.html">
							<img src="assets/images/product catalog.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Product Catalog</h3>
							<span class="icon-cross">
								<img src="assets/images/cross.svg" class="img-fluid"/>
							</span>
						</a>
					</div> 
				
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<Link to='/discountpage' class="product-item" >
							<img src="assets/images/sales.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Sales and Discounts</h3>
							<span class="icon-cross">
								<img src="assets/images/cross.svg" class="img-fluid"/>
							</span>
						</Link>
					</div>
			
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<Link class="product-item" to="/PendingOrders">
							<img src="assets/images/pending.png" class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Pending Orders</h3>
							<span class="icon-cross">
								<img src="assets/images/cross.svg" class="img-fluid"/>
							</span>
						</Link>
					</div>

				</div>
			</div>
		</div>
	
		
		<footer class="footer-section">
			<div class="container relative">

				<div class="sofa-img">
					<img src="assets/images/sofa.png" alt="Image" class="img-fluid"/>
				</div>

				<div class="row">
					<div class="col-lg-8">
						<div class="subscription-form">
							<h3 class="d-flex align-items-center"><span class="me-1"><img src="assets/images/envelope-outline.svg" alt="Image" class="img-fluid"/></span><span>Subscribe to Newsletter</span></h3>

							<form action="#" class="row g-3">
								<div class="col-auto">
									<input type="text" class="form-control" placeholder="Enter your name"/>
								</div>
								<div class="col-auto">
									<input type="email" class="form-control" placeholder="Enter your email"/>
								</div>
								<div class="col-auto">
									<button class="btn btn-primary">
										<span class="fa fa-paper-plane"></span>
									</button>
								</div>
							</form>

						</div>
					</div>
				</div>

				<div class="row g-5 mb-5">
					<div class="col-lg-4">
						<div class="mb-4 footer-logo-wrap"><a href="#" class="footer-logo">Armoire<span>.</span></a></div>
						<p class="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

						<ul class="list-unstyled custom-social">
							<li><a href="#"><span class="fa fa-brands fa-facebook-f"></span></a></li>
							<li><a href="#"><span class="fa fa-brands fa-twitter"></span></a></li>
							<li><a href="#"><span class="fa fa-brands fa-instagram"></span></a></li>
							<li><a href="#"><span class="fa fa-brands fa-linkedin"></span></a></li>
						</ul>
					</div>

					<div class="col-lg-8">
						<div class="row links-wrap">
							<div class="col-6 col-sm-6 col-md-3">
								<ul class="list-unstyled">
									<li><a href="#">About us</a></li>
									<li><a href="#">Services</a></li>
									<li><a href="#">Blog</a></li>
									<li><a href="#">Contact us</a></li>
								</ul>
							</div>

							<div class="col-6 col-sm-6 col-md-3">
								<ul class="list-unstyled">
									<li><a href="#">Support</a></li>
									<li><a href="#">Knowledge base</a></li>
									<li><a href="#">Live chat</a></li>
								</ul>
							</div>

							<div class="col-6 col-sm-6 col-md-3">
								<ul class="list-unstyled">
									<li><a href="#">Jobs</a></li>
									<li><a href="#">Our team</a></li>
									<li><a href="#">Leadership</a></li>
									<li><a href="#">Privacy Policy</a></li>
								</ul>
							</div>

							<div class="col-6 col-sm-6 col-md-3">
								<ul class="list-unstyled">
									<li><a href="#">Nordic Chair</a></li>
									<li><a href="#">Kruzo Aero</a></li>
									<li><a href="#">Ergonomic Chair</a></li>
								</ul>
							</div>
						</div>
					</div>

				</div>

				<div class="border-top copyright">
					<div class="row pt-4">
						<div class="col-lg-6">
							<p class="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> 
                            </p>
						</div>

						<div class="col-lg-6 text-center text-lg-end">
							<ul class="list-unstyled d-inline-flex ms-auto">
								<li class="me-4"><a href="#">Terms &amp; Conditions</a></li>
								<li><a href="#">Privacy Policy</a></li>
							</ul>
						</div>

					</div>
				</div>

			</div>
		</footer>


		<script src="js/bootstrap.bundle.min.js"></script>
		<script src="js/tiny-slider.js"></script>
		<script src="js/custom.js"></script>
    </React.Fragment>
  )
}
