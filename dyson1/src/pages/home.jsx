import React from 'react';
import Header from '../sections/header/Header';
import Promo from '../sections/promo/Promo';
import Sections from '../sections/categories/categories';
import Experts from '../sections/experts/experts';
import Advantages from '../sections/advantages/advantages';
import SpecialOffers from '../sections/special_offers/special_offers';
import Reviews from '../sections/reviews/reviews';
import FAQ from '../sections/FAQ/FAQ';
import News from '../sections/news/news';
import ContactSubscription from '../sections/contact_subscription/ContactSubscription';
import Footer from '../sections/footer/Footer';
import CategoryProductSection from '../sections/category_product_section/CategoryProductSection';

const Home = () => {
    return (
        <div className="App">
            <Promo />
            <Sections />
            <Experts />
            <Advantages />
            <SpecialOffers />
            <Reviews />
            <FAQ />
            <News />
            <ContactSubscription />
        </div>
    );
};

export default Home;
