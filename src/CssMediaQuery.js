import React from "react";

const Media = ({ size, children }) => (
  <div className={size}>
    {children}
  </div>
)

const CssMediaQuery = () => (
  <div>
    <p>Observe NO flash of content below..</p>

    <Media size="small">
      <p>The document is <strong>less than</strong> 600px wide.</p>
    </Media>

    <Media size="large">
      <p>The document is <strong>at least</strong> 600px wide.</p>
    </Media>
  </div>
);

export default CssMediaQuery;
