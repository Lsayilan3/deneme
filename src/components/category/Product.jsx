// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Product = () => {
//   const [spots, setSpots] = useState([]);

//   const getProducts = async () => {
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
//     getProducts();
//   }, []);

//   return (
//     <div>
//       <h2>Product List</h2>
//       <div>
//         {spots.map((spot) => (
//           <div key={spot.spotId}>{spot.title}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;

// Product.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Category from "./Category";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

function Product() {
  const [spots, setSpots] = useState([]);
  const { categoryId } = useParams();

  useEffect(
    () => {
      // Eğer kategori ID'si mevcut ise, sadece o kategoriye ait ürünleri getir
      if (categoryId) {
        axios
          .get(
            `https://api.kapadokyadavet.com/api/spots/getlist?categoryId=${categoryId}`
          )
          .then((response) => {
            setSpots(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      // Eğer kategori ID'si mevcut değil ise, bütün ürünleri getir
      else {
        axios
          .get("https://api.kapadokyadavet.com/api/spots/getall")
          .then((response) => {
            setSpots(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    [categoryId],
    [spots]
  );

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <Category />
          </Grid>
          <Grid xs={5}>
            <ul>
              {spots.map((spot) => (
                <li key={spots.spotId}>{spot.title}</li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Product;
