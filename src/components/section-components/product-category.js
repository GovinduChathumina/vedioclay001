import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductCategory extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <section className="blog-page-area pd-top-100 pd-bottom-100">
		{/* <div className="col-md-12" style={{textAlign:'left',right:'0'}}>
			<div className="form-area text-center" style={{width:'200px'}}>
			    <form>
			    <input type="text" className="form-control" /> */}
			    {/* <button type="submit" className="btn"><img src={publicUrl+"assets/img/icon/1.png"} alt="img" /></button> */}
			    {/* </form>
			    </div>
			</div> */}
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-8 order-lg-last go-top">
				  <div className="all-item-section go-top">        
			      <div className="item-isotope row">
			        <div className="item-sizer col-1" />
			        {/* gallery item start here */}
			        <div className="all-isotope-item col-lg-4 col-sm-6 cat-1 cat-3">
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
			              <img src={publicUrl+"assets/img/item/1.png"} alt="image" />
			            </a>
			            <a className="btn btn-white" href="#">Live Preview</a>
			          </div>
			          <div className="item-details">
			            <span className="price">After Effects</span>
			          </div>
			        </div>
			        <div className="all-isotope-item col-lg-4 col-sm-6 cat-2">
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
			              <img src={publicUrl+"assets/img/item/2.png"} alt="image" />
			            </a>
			            <a className="btn btn-white" href="#">Live Preview</a>
			          </div>
			          <div className="item-details">
			            <span className="price">After Effects</span>
			          </div>
			        </div>
			        <div className="all-isotope-item col-lg-4 col-sm-6 cat-3 cat-2">
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
			              <img src={publicUrl+"assets/img/item/3.png"} alt="image" />
			            </a>
			            <a className="btn btn-white" href="#">Live Preview</a>
			          </div>
			          <div className="item-details">
			            <span className="price">Premier pro</span>
			          </div>
			        </div>
			        <div className="all-isotope-item col-lg-4 col-sm-6 cat-3 cat-1">
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
			              <img src={publicUrl+"assets/img/item/4.png"} alt="image" />
			            </a>
			            <a className="btn btn-white" href="#">Live Preview</a>
			          </div>
			          <div className="item-details">
			            <span className="price">Premier pro</span>
			          </div>
			        </div>
			        <div className="all-isotope-item col-lg-4 col-sm-6 cat-2 cat-1">
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
			              <img src={publicUrl+"assets/img/item/5.png"} alt="image" />
			            </a>
			            <a className="btn btn-white" href="#">Live Preview</a>
			          </div>
			          <div className="item-details">
			            <span className="price">After Effects</span>
			          </div>
			        </div>
			        <div className="all-isotope-item col-lg-4 col-sm-6 cat-1 cat-2">
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
			              <img src={publicUrl+"assets/img/item/6.png"} alt="image" />
			            </a>
			            <a className="btn btn-white" href="#">Live Preview</a>
			          </div>
			          <div className="item-details">
			            <span className="price">Premier pro</span>
			          </div>
			        </div>
			      </div>
			    </div>
			        <div className="pagination-wrap text-center mt-2">
			          <ul className="pagination pagination-2">
			            <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-left" /></a></li>
			            <li className="page-item active"><a className="page-link" href="/products">01</a></li>
			            <li className="page-item"><a className="page-link" href="#">02</a></li>
			            <li className="page-item"><a className="page-link" href="#">03</a></li>
			            <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-right" /></a></li>
			          </ul>
			        </div>
			      </div>
			      <div className="col-lg-3 order-lg-first go-top">
			        <div className="sidebar-area">
			          <div className="widget widget-category widget-border">
						  
			            <h5 className="widget-title">Apps</h5>
						
			            <ul>
			              <li><input type="checkbox" style={{width:'20px',height:'20px'}} id="after_effects" name="after_effects" value="after_effects"/><Link to="/product" style={{paddingLeft:'15px'}}>After Effects</Link></li>
			              <li><input type="checkbox" style={{width:'20px',height:'20px'}} id="after_effects" name="after_effects" value="after_effects"/> <Link to="/product" style={{paddingLeft:'15px'}}>Premier Pro</Link></li>
			            </ul>
			          </div>
					  <div className="widget widget-category widget-border">
			            <h5 className="widget-title">Category</h5>
			            <ul>
			              <li><input type="checkbox" style={{width:'20px',height:'20px'}} id="logo" name="logo" value="logo"/><Link to="/product" style={{paddingLeft:'15px'}}>Logo</Link></li>
			              <li><input type="checkbox" style={{width:'20px',height:'20px'}} id="title" name="title" value="title"/><Link to="/product" style={{paddingLeft:'15px'}}>Titles</Link></li>
						  <li><input type="checkbox" style={{width:'20px',height:'20px'}} id="transition" name="transition" value="transition"/><Link to="/product" style={{paddingLeft:'15px'}}>Transitions</Link></li>
						  <li><input type="checkbox" style={{width:'20px',height:'20px'}} id="lower" name="lower" value="lower"/><Link to="/product" style={{paddingLeft:'15px'}}>Lower Thirds</Link></li>
						  <li><input type="checkbox" style={{width:'20px',height:'20px'}} id="element" name="element" value="element"/><Link to="/product" style={{paddingLeft:'15px'}}>Elements</Link></li>
						  <li><input type="checkbox" style={{width:'20px',height:'20px'}} id="background" name="background" value="background"/><Link to="/product" style={{paddingLeft:'15px'}}>Backgrounds</Link></li>
			            </ul>
			          </div>
					  <div className="widget widget-product-sorting widget-border">
			            <h5 className="widget-title">Resolution</h5>
			            <div className="slider-product-sorting" />
			            <div className="product-range-detail">
			              <button>Filter</button>
			              {/* <input className="float-right" type="text" id="amount" readOnly /> */}
			              {/* <label className="float-right" htmlFor="amount">resolution:</label> */}
			            </div>
			          </div>
			          {/* <div className="widget widget-product-sorting widget-border">
			            <h5 className="widget-title">Filter by price</h5>
			            <div className="slider-product-sorting" />
			            <div className="product-range-detail">
			              <button>Filter</button>
			              <input className="float-right" type="text" id="amount" readOnly />
			              <label className="float-right" htmlFor="amount">Price:</label>
			            </div>
			          </div> */}
			          {/* <div className="widget widget-news widget-border">
			            <h5 className="widget-title">Recent News</h5>
			            <div className="single-news-wrap media">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/widget/1.png"} alt="img" />
			              </div>
			              <div className="media-body">
			                <p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
			                <h6><Link to="/blog-details">Smashing Podcast Epis With Rach Andrewe</Link></h6>
			              </div>
			            </div>
			            <div className="single-news-wrap media">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/widget/2.png"} alt="img" />
			              </div>
			              <div className="media-body">
			                <p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
			                <h6><Link to="/blog-details">Responsive Web And Desktop Develope</Link></h6>
			              </div>
			            </div>
			            <div className="single-news-wrap media">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/widget/3.png"} alt="img" />
			              </div>
			              <div className="media-body">
			                <p className="date"><i className="far fa-calendar-alt" />25 Aug 2020</p>
			                <h6><Link to="/blog-details">Django Highlig Models Admin Harnessing</Link></h6>
			              </div>
			            </div>
			          </div> */}
			          {/* <div className="widget widget-tags widget-border">
			            <h5 className="widget-title">Popular Tags</h5>
			            <div className="tagcloud">
			              <Link to="/blog-details">Business</Link>
			              <Link to="/blog-details">Corporate</Link>
			              <Link to="/blog-details">HTML</Link>
			              <Link to="/blog-details">Finance</Link>
			              <Link to="/blog-details">Investment</Link>
			              <Link to="/blog-details">CSS</Link>
			              <Link to="/blog-details">Planing</Link>
			              <Link to="/blog-details">Creative</Link>`
			            </div>   
			          </div> */}
			        </div>
			      </div>
			    </div>
			  </div>
			</section>
 
        }
}

export default ProductCategory