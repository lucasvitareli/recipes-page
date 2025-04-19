import React from 'react'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import HeroSection from './components/Hero';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import RecipeList from './components/RecipeList';
import AboutMe from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HeroSection />
      <RecipeList />
      <AboutMe />
      <Contact />
    </ThemeProvider>
  );
}

export default App
