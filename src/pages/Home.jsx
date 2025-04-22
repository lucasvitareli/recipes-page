import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/Hero';
import RecipeList from '../components/RecipeList';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import AboutMe from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Membership from '../components/Membership';

function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <RecipeList />
            <Membership />
            <AboutMe />
            <Contact />
            <Footer />
        </>
    )
}

export default Home