import React from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { useState, useEffect } from 'react'


function Discount() {

const [products, setProducts] = useState([{}])
const [price, setPrice] = useState(0)
const [_id,setID] = useState("")
useEffect(() => {
	Axios.get('http://localhost:3001/getAllProducts').then((response) => {
		setProducts(response.data)
	})
  }, [])


const priceChange = (id) => {
	//setPrice(document.getElementById(id).value)
	Axios.post('http://localhost:3001/updatePrice', {
		newPrice: price,
		id: id
	}).then((response) => {

	})
}

  //  const priceChange = () => {
// 	const price = Number(document.getElementById("priceEdit").value)
// 	console.log(price)
// 	document.getElementById("price").value = price
// 	Axios.put('http://localhost:3001/updatePrice', {
// 	  newPrice: price,
// 	  id: id
// 	}).then(() => {
// 	  alert('success')
// 	})
//   }

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
					<li >
							<Link class="nav-link" to="/">Home</Link>
						</li>
						<li class="nav-item active"><Link class="nav-link" to="/discountpage">Discounts & Sale</Link></li>
						<li><Link class="nav-link" to="/PendingOrders">Pending Orders</Link></li>
						<li><Link class="nav-link" to="/AllOrders">Order History</Link></li>
					</ul>

				</div>
			</div>
				
		</nav>
	
			<div class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1 data-testid="page-title" >Discounts & Sale</h1>
							</div>
						</div>
						<div class="col-lg-7">
							
						</div>
					</div>
				</div>
			</div>

		

		<div class="untree_co-section product-section before-footer-section">
		    <div data-testid="data div" class="container">
		      	<div class="row">

					{products.map((Product) => {

						return(
						<div class="col-12 col-md-4 col-lg-3 mb-5">
							<a class="product-item" href="#">
								<img src={Product.selectedImage} class="img-fluid product-thumbnail"/>
								<h3 class="product-title">{Product.Name}</h3>
								<strong id = "price" class="product-price">{Product.Price} Rs</strong>

								<span>
								<form>
      <label>Edit price   
        <input type="number" onChange ={(event)=>{
			setPrice(event.target.value)
		}}/>
      </label> <button onClick={()=>{
		if(price>Product.Price){
			alert("New price must be less than the original price")
		}
		else if(price<0){
			alert("New Price must be positive")
		}
		else{
		priceChange(Product._id)}}}>save</button>

    </form>
								</span>
							</a>
						</div>);
						})}
					

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
export default Discount