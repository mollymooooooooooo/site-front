import React from 'react';
import Experts from '../sections/experts/experts';
import Advantages from '../sections/advantages/advantages';
import Reviews from '../sections/reviews/reviews';
import FAQ from '../sections/FAQ/FAQ';
import News from '../sections/news/news';
import ContactSubscription from '../sections/contact_subscription/ContactSubscription';
import CategoryProductSection from '../sections/category_product_section/CategoryProductSection';

const Hairdryers = () => {
    return (
        <div className="App">
            <CategoryProductSection/>
            <Experts />
            <Advantages />
            <Reviews />
            <FAQ />
            <News />
            <ContactSubscription />
        </div>
    );
};

export default Hairdryers;
