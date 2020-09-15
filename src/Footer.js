import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
        2020 Tyler's Amazon Clone Project. This website is not for sales
        purposes. No rights reserved.
      </p>
      <p>
        Privacy <span dangerouslySetInnerHTML={{ __html: "&middot;" }} /> Terms{" "}
        <span dangerouslySetInnerHTML={{ __html: "&middot;" }} /> Sitemap{" "}
        <span dangerouslySetInnerHTML={{ __html: "&middot;" }} /> Company
        Details
      </p>
    </div>
  );
}

export default Footer;
