import React, { useState } from "react";
import countriesList from "./countries";

function Oauth(props) {
  const [view, setView] = useState("numview");

  return (
    <div className="oauth-view rel">
      <h1 className="s18 fontb">Sign in</h1>
      <h1 className="s18 fontb">
        Enter your Mobile number for a one time auth code
      </h1>

      <select className="iput s15 fontb">
        {countriesList.map((e) => {
          return <option value={e.Iso}>{e.name}</option>;
        })}
      </select>
    </div>
  );
}

export default Oauth;
