import React from 'react';
import Item from '../sections/item_main/item_main';
import ProductDetailsTabs from '../components/product_details_tabs/product_details_tabs';
import FAQ from '../sections/FAQ/FAQ';
import SimilarItems from '../sections/similar_items/SimilarItems';
import DysonAd from '../sections/dyson_ad/dyson_ad';

const Product = () => {
    return (
        <div className="App">
            <Item/>
            <ProductDetailsTabs/>
            <FAQ/>
            <DysonAd/>
            <SimilarItems/>
        </div>
    );
};

export default Product;
