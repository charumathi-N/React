import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Mainprice from "./Components/PriceComponent";
import "./Components/PriceComponent.css";
import { Row } from "react-bootstrap";

function TypesExample() {
  //datas to pass through props for cards
  const header1 = {
    Sub_type: "Free",
    Rate: "$0/month",
  };
  const header2 = {
    Sub_type: "Plus",
    Rate: "$9/month",
  };
  const header3 = {
    Sub_type: "Pro",
    Rate: "$49/month",
  };
  const body1 = [
    "✓Single user",
    "✓50GB storage",
    "✓Ultimated public project",
    "✓Community access",
    "✘Ultimated private project",
    "✘Dedicated phone support",
    "✘Free Subdomain",
    "✘Monthly status report",
  ];
  const body2 = [
    "✓5 user",
    "✓50GB storage",
    "✓Ultimated public project",
    "✓Community access",
    "✓Ultimated private project",
    "✓Dedicated phone support",
    "✓Free Subdomain",
    "✘Monthly status report",
  ];
  const body3 = [
    "✓unlimited user",
    "✓50GB storage",
    "✓Ultimated public project",
    "✓Community access",
    "✓Ultimated private project",
    "✓Dedicated phone support",
    "✓Free Subdomain",
    "✓Monthly status report",
  ];

  return (
    <div className="Main">
      <Mainprice objects={{ price: header1, content: body1 }} />
      <Mainprice objects={{ price: header2, content: body2 }} />
      <Mainprice objects={{ price: header3, content: body3 }} />
    </div>
  );
}

export default TypesExample;
