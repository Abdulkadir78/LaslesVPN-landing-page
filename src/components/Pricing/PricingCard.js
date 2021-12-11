import { Card, CardTitle } from "../styled/Pricing.styled";
import Button from "../styled/Button.styled";

function PricingCard({ plan, selected }) {
  return (
    <Card selected={selected}>
      <img src={plan.image} alt="Plan" />
      <CardTitle>{plan.name}</CardTitle>

      <ul>
        {plan.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>

      <h3>{plan.price === 0 ? "Free" : `$${plan.price} / mo`}</h3>

      <Button outlined style={{ width: "60%", alignSelf: "center" }}>
        Select
      </Button>
    </Card>
  );
}

export default PricingCard;
