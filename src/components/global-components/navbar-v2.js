import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarV2 extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
        	<div>
        		<div className="dkt-sitebar-menu">
				  <div className="dkt-sitebar-menu">
				    <span className="dkt-sitebar-close" ><i className="fa fa-times" /></span>
				    <div className="dkt-details-inner">
				      <div className="logo go-top">
				        <Link to="/"><img src={publicUrl+"assets/img/logo-3.png"} alt="img" /></Link>
				      </div>
				      <p className="details">Donsectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. </p>
				      <div className="address-inner">
				        <h5>Address</h5>
				        <p>3538 Cambridge Place Laurel, MD 20707</p>
				      </div>
				      <div className="address-inner">
				        <h5>Phone</h5>
				        <p>410-565-2575</p>
				      </div>
				      <div className="address-inner mb-0">
				        <h5>Email</h5>
				        <p>JohnPMills@dmarket.com</p>
				      </div>
				    </div>
				    <div className="dkt-market-earn">
				      <div className="address-inner">
				        <h5>Market Earning</h5>
				        <p>online store with lots of digital product and exclusive Item</p>
				      </div>
				      <div className="row">
				        <div className="col-lg-6">
				          <div className="earn-inner">
				            <p>Item Sold</p>
				            <h5>12501</h5>
				          </div>
				        </div>
				        <div className="col-lg-6">
				          <div className="earn-inner">
				            <p>Total Earning</p>
				            <h5>25804</h5>
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>
	            <div className="navbar-area navbar-area-2 go-top">
				  <nav className="navbar navbar-expand-lg">
				    <div className="container nav-container">
				      <div className="responsive-mobile-menu">
				        <button className="menu toggle-btn d-block d-lg-none" data-target="#dkt_main_menu" aria-expanded="false" aria-label="Toggle navigation">
				          <span className="icon-left" />
				          <span className="icon-right" />
				        </button>
				      </div>
				      <div className="logo">
				        <Link className="main-logo" to="/"><img src={publicUrl+"assets/img/logo5.jpg"} alt="img" width="150px" height="100px" /></Link>
				      </div>
				      <div className="nav-right-part nav-right-part-mobile">
				        <a className="btn btn-base" href="#">Sign in</a>
				      </div>
				      <div className="collapse navbar-collapse" id="dkt_main_menu">
				        <ul className="navbar-nav menu-open">
				          {/* <li className="menu-item-has-children current-menu-item"> */}
				            {/* <a href="#">Home</a>
				            <ul className="sub-menu"> */}
				              {/* <li><Link to="/">Home 01</Link></li> */}
				              <li><Link to="/home-v2">Home</Link></li>
				            {/* </ul> */}
				          {/* </li> */}
						  <li className="menu-item-has-children current-menu-item">
				            <a href="#">Templates</a>
				            <ul className="sub-menu">
				              <li><Link to="/product">Product</Link></li>
				              <li><Link to="/product-details">Product Details</Link></li>
				              <li><Link to="/vendor">Vendor</Link></li>
				              <li><Link to="/category">Category</Link></li>
				              <li><Link to="/faq">Faq</Link></li>
				              <li><Link to="/policy">Refund Policy</Link></li>
				              <li><Link to="/error">404</Link></li>
				              <li><Link to="/sign-in">Sign In</Link></li>
				              <li><Link to="/sign-up">Sign Up</Link></li>
				            </ul>
				          </li>
						  <li className="menu-item-has-children current-menu-item">
				           <Link to="/blog">Learn</Link>
				            <ul className="sub-menu">
				              <li><Link to="/blog">Blog Standard</Link></li>
				              <li><Link to="/blog-details">Blog Details</Link></li>
				            </ul>
				          </li>
				          <li><Link to="/product">Pricing</Link></li>
				          <li><Link to="/contact">Contact</Link></li>
				        </ul>
				      </div>
				      <div className="nav-right-part nav-right-part-desktop">
				        <ul>
				          {/* <li><a href="#"><img src={publicUrl+"assets/img/icon/2m.png"} alt="icon" />0 Items</a></li> */}
				          {/* <div className="btn-wrap"> */}
			              <Link className="btn btn-bases" to="/product">Get Unlimited Downloads</Link>
			            {/* </div>    */}
						  <li><a className="search" href="#"><img src={publicUrl+"assets/img/icon/1b.png"} alt="icon" /></a></li>
				          {/* <li className="menu-bar dropdown-menu-btn"><i className="fa fa-bars" /></li> */}
				        </ul>
				      </div>
				    </div>
				  </nav>
				</div>
			</div>


        )
    }
}


export default NavbarV2