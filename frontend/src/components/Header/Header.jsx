import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2> Order your favourti food here </h2>
        <p>
          Explore a variety of delicious dishes and indulge in the flavors you
          love. From mouthwatering appetizers to satisfying main courses and
          decadent desserts, our menu has something for everyone. Whether you're
          craving comfort food classics or eager to try exciting new flavors,
          we've got you covered. Treat yourself to a culinary adventure and
          order your favorite food now!
        </p>

        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
