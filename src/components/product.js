import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import ProductPage from './section-components/product-page';
import ProductCategoryPage from './section-components/product-category';
import Footer from './global-components/footer';

const BlogPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Products" subheader="pages"  />
        {/* <ProductPage /> */}
        <ProductCategoryPage />
        <Footer />
    </div>
}

export default BlogPage

