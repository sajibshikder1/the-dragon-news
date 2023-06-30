import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categorise, setCategorise] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategorise(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>All Category</h2>
      <div className="ps-4">
        {categorise.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`} className="text-black text-decoration-none">{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
