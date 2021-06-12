import React from "react";

function PricingItem(props) {
 return (
  <div className="col-lg-4">
   <div className="mb-5 card mb-lg-0">
    <div className="card-body">
     <h5 className="text-center card-title text-muted text-uppercase">
      {props.title}
     </h5>
     <h6 className="text-center card-price">
      ${props.pricing}
      <span className="period">/month</span>
     </h6>
     <hr />
     <ul className="fa-ul">
      {props.contents.map((content) => (
       <li>{content}</li>
      ))}
     </ul>
     <a href="#" className="btn btn-block btn-primary text-uppercase">
      Button
     </a>
    </div>
   </div>
  </div>
 );
}

const Pricing = () => {
 return (
  <div>
   <section className="py-5 pricing">
    <div className="container">
     <div className="row">
      <PricingItem
       title="Free"
       pricing="0"
       contents={["Single User", "2GB Storage", "Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"]}
      ></PricingItem>
      <PricingItem
       title="paid"
       pricing="10"
       contents={["Minimum 5 User", "5GB Storage", "Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"]}
      ></PricingItem>
      <PricingItem
       title="paid"
       pricing="20"
       contents={["20 User", "15GB Storage", "Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomains", "Monthly Status Reports"]}
      ></PricingItem>
     </div>
    </div>
   </section>
  </div>
 );
};

export default Pricing;
