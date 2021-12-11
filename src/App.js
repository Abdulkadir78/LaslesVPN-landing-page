import { ThemeProvider } from "styled-components";

import Container from "./components/styled/Container.styled";
import GlobalStyles from "./components/styled/GlobalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer";

const theme = {
  colors: {
    primary: "#F53838",
    text: "#0B132A",
    textGrey: "#4F5665",
    footer: "#F8F8F8",
    primaryShadow: "rgba(245, 56, 56, 0.35)",
  },
  breakpoints: {
    xs: "601px",
    maxXs: "600px",
    sm: "769px",
    maxSm: "768px",
    md: "961px",
    maxMd: "960px",
    lg: "1201px",
    maxLg: "1200px",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Navbar />
      <Container>
        <Hero />
        <Pricing />
      </Container>

      <Testimonials />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
