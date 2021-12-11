import heroIllustration from "../assets/images/hero-illustration.svg";
import { StyledHero, TextContent, Cta } from "./styled/Hero.styled";

function Hero() {
  return (
    <StyledHero>
      <TextContent>
        <h1>
          Want anything to be easy with
          <span> LaslesVPN.</span>
        </h1>

        <p>
          Provide a network for all your needs with ease and fun using
          <span> LaslesVPN </span> discover interesting features from us.
        </p>

        <Cta>Get Started</Cta>
      </TextContent>

      <img src={heroIllustration} alt="Man enjoying Lasles VPN" />
    </StyledHero>
  );
}

export default Hero;
