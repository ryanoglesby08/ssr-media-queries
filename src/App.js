import React from "react";

import Media from "react-media";

const App = () => (
  <div>
    <p>Observe the flash of content below.</p>

    <Media query="(max-width: 599px)" defaultMatches={true} render={() => <p>The document is <strong>less than</strong> 600px wide.</p>} />

    <Media query="(min-width: 600px)" defaultMatches={false} render={() => <p>The document is <strong>at least</strong> 600px wide.</p>} />
  </div>
);

export default App;
