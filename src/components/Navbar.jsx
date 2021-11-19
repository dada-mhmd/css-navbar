import { useState } from "react";
import "../App.css";

import { Reorder } from "@material-ui/icons";
import { Search } from "@material-ui/icons";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div>
      <div className="navbar">
        <div className="left">
          <div className="links" id={showLinks ? "hidden" : ""}>
            <a href="/">Home</a>
            <a href="/feedback">Feedback</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
          </div>
          <button onClick={() => setShowLinks(!showLinks)}>
            <Reorder />
          </button>
        </div>
        <div className="right">
          <input type="text" placeholder="Search.." />
          <button>
            <Search />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
