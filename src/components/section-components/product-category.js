import React, { Component ,useState} from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import ProductDataService from "../../services/product.service"
class ProductCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chkAfterEffects: false,
			chkPremierPro:false,
		  	numberOfGuests: 2,
		  	tutorials: [],
			currentTutorial: null,
			currentIndex: -1,
			searchTitle: "",
			cat_name:""
		};
	
		this.handleInputChange = this.handleInputChange.bind(this);
	  }

	  setActiveTutorial(tutorial, index) {
		this.setState({
		  currentTutorial: tutorial,
		  currentIndex: index
		});
	  }
	
	  handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		var cat_id="";


		if(name=="after_effects"){
			cat_id="60106addf83a155344bf3edb";
			this.setState({
				cat_name:"After Effects"
			})
		}else if(name=="premier_pro"){
			cat_id="601073434b0146303c10d68f";
			this.setState({
				cat_name:"Premier Pro"
			})
		}else if(name=="logo"){
			cat_id="603426b71e83a23bd40c0f82";
			this.setState({
				cat_name:"Logo"
			})
		}else if(name=="title"){
			cat_id="603426ca1e83a23bd40c0f83";
			this.setState({
				cat_name:"Titles"
			})
		}else if(name=="transition"){
			cat_id="603426db1e83a23bd40c0f84";
			this.setState({
				cat_name:"Transition"
			})
		}else if(name=="lower"){
			cat_id="603426f91e83a23bd40c0f85";
			this.setState({
				cat_name:"Lower Thirds"
			})
		}else if(name=="element"){
			cat_id="603427031e83a23bd40c0f86";
			this.setState({
				cat_name:"Elements"
			})
		}else if(name=="background"){
			cat_id="6034270d1e83a23bd40c0f87";
			this.setState({
				cat_name:"Backgrounds"
			})
		}

		// alert(cat_id);
		ProductDataService.findByTitle(cat_id)
      .then(response => {
		
			this.tutorials= response.data.templates;
			console.log(this.tutorials._id);
			this.setState({
				tutorials: response.data.templates
			});

        console.log(this.tutorials);
      })
      .catch(e => {
        console.log(e);
      });
	
		this.setState({
		  [name]: value
		});
	  }

	 



    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
		const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;

    return  <section className="blog-page-area pd-top-100 pd-bottom-100">
		{/* <ul>{listItems}</ul> */}
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
			      <div className="col-lg-9 order-lg-last go-top">
				  <div className="all-item-section go-top">        
			      <div className="item-isotope row">
			        {/* gallery item start here */}
					{
						this.state.tutorials.map( item => {
							return (
							<div key={item.id} className="all-isotope-item col-lg-4 col-sm-6 cat-1 cat-2">
							{/* <div className="thumb"> */}
								<a className="gallery-fancybox" href="#">
								<video width="285" height="200" controls >
								<source src="../../public/assets/vedio/movie.mp4" type="video/mp4"/>
								</video>
								{/* <img src={publicUrl+"assets/img/item/1.png"} alt="image" /> */}
								</a>
								{/* <a className="btn btn-white" href="#">Live Preview</a> */}
								<div className="item-details">
								<span className="price">{this.state.cat_name}</span>
								<div>{item.name}</div>
								</div>
							{/* </div> */}
							{/* {item.photos.map(photo => {
								return(
									<div className="item-details">
										<span className="price">{item.name}</span>
									</div>
								)
							})} */}
							</div>
							)
						})
					}
			        
			        {/* <div className="all-isotope-item col-lg-4 col-sm-6 cat-1 cat-2">
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
			        </div> */}
			        {/* <div className="all-isotope-item col-lg-4 col-sm-6 cat-3 cat-1">
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
			              <img src={publicUrl+"assets/img/item/4.png"} alt="image" />
			            </a>
			            <a className="btn btn-white" href="#">Live Preview</a>
			          </div>
			          <div className="item-details">
			            <span className="price">Premier pro</span>
			          </div>
			        </div> */}
			        {/* <div className="all-isotope-item col-lg-4 col-sm-6 cat-2 cat-1">
			          <div className="thumb">
			            <a className="gallery-fancybox" href="#">
			              <img src={publicUrl+"assets/img/item/5.png"} alt="image" />
			            </a>
			            <a className="btn btn-white" href="#">Live Preview</a>
			          </div>
			          <div className="item-details">
			            <span className="price">Premier pro</span>
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
			        </div> */}
			      </div>
			    </div>
			        {/* <div className="pagination-wrap text-center mt-2">
			          <ul className="pagination pagination-2">
			            <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-left" /></a></li>
			            <li className="page-item active"><a className="page-link" href="/products">01</a></li>
			            <li className="page-item"><a className="page-link" href="#">02</a></li>
			            <li className="page-item"><a className="page-link" href="#">03</a></li>
			            <li className="page-item"><a className="page-link" href="#"><i className="la la-angle-right" /></a></li>
			          </ul>
			        </div> */}
			      </div>
			      <div className="col-lg-3 order-lg-first go-top">
			        <div className="sidebar-area">
			          <div className="widget widget-category widget-border">
						  
			            <h5 className="widget-title">Apps</h5>
						
			            <ul>
			              <li><input type="checkbox" checked={this.state.chkAfterEffects} onChange={this.handleInputChange} style={{width:'20px',height:'20px'}} id="after_effects" name="after_effects" value="after_effects"/><Link to="/product" style={{paddingLeft:'15px'}}>After Effects</Link></li>
			              <li><input type="checkbox" checked={this.state.chkPremierPro} onChange={this.handleInputChange} style={{width:'20px',height:'20px'}} id="premier_pro" name="premier_pro" value="premier_pro"/> <Link to="/product" style={{paddingLeft:'15px'}}>Premier Pro</Link></li>
			            </ul>
			          </div>
					  <div className="widget widget-category widget-border">
			            <h5 className="widget-title">Category</h5>
			            <ul>
			              <li><input type="checkbox" checked={this.state.chkPremierPro} onChange={this.handleInputChange} style={{width:'20px',height:'20px'}} id="logo" name="logo" value="logo"/><Link to="/product" style={{paddingLeft:'15px'}}>Logo</Link></li>
			              <li><input type="checkbox" checked={this.state.chkPremierPro} onChange={this.handleInputChange} style={{width:'20px',height:'20px'}} id="title" name="title" value="title"/><Link to="/product" style={{paddingLeft:'15px'}}>Titles</Link></li>
						  <li><input type="checkbox" checked={this.state.chkPremierPro} onChange={this.handleInputChange} style={{width:'20px',height:'20px'}} id="transition" name="transition" value="transition"/><Link to="/product" style={{paddingLeft:'15px'}}>Transitions</Link></li>
						  <li><input type="checkbox" checked={this.state.chkPremierPro} onChange={this.handleInputChange} style={{width:'20px',height:'20px'}} id="lower" name="lower" value="lower"/><Link to="/product" style={{paddingLeft:'15px'}}>Lower Thirds</Link></li>
						  <li><input type="checkbox" checked={this.state.chkPremierPro} onChange={this.handleInputChange} style={{width:'20px',height:'20px'}} id="element" name="element" value="element"/><Link to="/product" style={{paddingLeft:'15px'}}>Elements</Link></li>
						  <li><input type="checkbox" checked={this.state.chkPremierPro} onChange={this.handleInputChange} style={{width:'20px',height:'20px'}} id="background" name="background" value="background"/><Link to="/product" style={{paddingLeft:'15px'}}>Backgrounds</Link></li>
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