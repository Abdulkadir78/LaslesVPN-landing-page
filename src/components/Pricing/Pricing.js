import { StyledPricing, CardContainer } from "../styled/Pricing.styled";
import freePlanImg from "../../assets/images/free-plan.svg";
import standardPlanImg from "../../assets/images/standard-plan.svg";
import premiumPlanImg from "../../assets/images/premium-plan.svg";
import PricingCard from "./PricingCard";

const plans = [
  {
    name: "free plan",
    image: freePlanImg,
    price: 0,
    benefits: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
  },
  {
    name: "standard plan",
    image: standardPlanImg,
    price: 9,
    benefits: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anywhere",
    ],
  },
  {
    name: "premium plan",
    image: premiumPlanImg,
    price: 12,
    benefits: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anywhere",
      "Get New Features",
    ],
  },
];

function Pricing() {
  return (
    <StyledPricing id="pricing">
      <h1>Choose Your Plan</h1>

      <p>
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </p>

      <CardContainer>
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} selected={index === 2} />
        ))}
      </CardContainer>
    </StyledPricing>
  );
}

export default Pricing;
