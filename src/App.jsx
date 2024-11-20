import React from "react";
import "./App.css";

const pricingPlans = [
  {
    name: "FREE",
    price: "$0/month",
    features: [
      "Single User",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
    ],
    unavailableFeatures: [
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports",
    ],
  },
  {
    name: "PLUS",
    price: "$9/month",
    features: [
      "5 Users",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
    ],
    unavailableFeatures: ["Monthly Status Reports"],
  },
  {
    name: "PRO",
    price: "$49/month",
    features: [
      "Unlimited Users",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports",
    ],
    unavailableFeatures: [],
  },
];

const PricingCard = ({ plan }) => (
<div className="card">
  <h3>{plan.name}</h3>
  <h4>{plan.price}</h4>

    <ul>
      {plan.features.map((feature, index) => (
        <li key={index} className="available">
          ✔ {feature}
        </li>
      ))}
      {plan.unavailableFeatures.map((feature, index) => (
        <li key={index} className="unavailable">
          ✖ {feature}
        </li>
      ))}
    </ul>
    <button className="btn">BUTTON</button>
</div>

);

const App = () => (
  <div className="container">
    {pricingPlans.map((plan, index) => (
      <PricingCard key={index} plan={plan} />
    ))}
  </div>
);

export default App;
