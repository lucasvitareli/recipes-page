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

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
    // Get the current location from React Router
    const location = useLocation();
    // Scroll to the #recipes section if it's the current location
    useEffect(() => {
        if (location.hash === "#recipes") {
            const recipesSection = document.querySelector("#recipes")
            if (recipesSection) {
                recipesSection.scrollIntoView({ behavior: "smooth" })
            }
        }
    }, [location])

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