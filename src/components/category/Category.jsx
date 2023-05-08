// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Category = () => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const getCategories = async () => {
//     try {
//       const response = await axios.get(
//         "https://api.kapadokyadavet.com/api/spotCategoryies/getall"
//       );
//       setCategories(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getCategoryById = async (categoryId) => {
//     try {
//       const response = await axios.get(
//         `https://api.kapadokyadavet.com/api/spotCategoryies/getbyid/${categoryId}`
//       );
//       setSelectedCategory(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getProducts = async (categoryId) => {
//     try {
//       const response = await axios.get(
//         "https://api.kapadokyadavet.com/api/spots/getlist?categoryId=" + categoryId
//       );
//       setSpots(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const [spots, setSpots] = useState([]);
//   useEffect(() => {
//     if (selectedCategory) {
//       getProducts(selectedCategory.categoryId);
//     }
//   }, [selectedCategory]);

//   const getProductss = async () => {
//     try {
//       const response = await axios.get(
//         "https://api.kapadokyadavet.com/api/spots/getall"
//       );
//       setSpots(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getCategories();
//     getProductss();
//   }, []);

//   return (
//     <div>
//       <h2>Category List</h2>
//       <div>
//       <div  onClick={() => getProductss()}>Tüm Ürünler</div>
//         {categories.map((category) => (
//           <div
//             key={category.categoryId}
//             onClick={() => getProducts(category.categoryId)}
//           >
//             {category.categoryName}
//           </div>
//         ))}
//       </div>
//       <h2>Product List1</h2>
//       <div>
//         {spots.map((spot) => (
//           <div key={spot.spotId}>{spot.title}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Category;

// Category.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.kapadokyadavet.com/api/spotCategoryies/getall")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ul>
        <li>
          <Link to={`/category`}>Tüm Ürünler</Link>
        </li>
        {categories.map((category) => (
          <li key={category.categoryId}>
            <Link to={`/category/${category.categoryId}`}>
              {category.categoryName}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Category;
