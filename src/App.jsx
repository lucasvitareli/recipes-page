import React from 'react'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import HeroSection from './components/Hero';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HeroSection />
      <SearchBar />
    </ThemeProvider>
  );
}

export default App
