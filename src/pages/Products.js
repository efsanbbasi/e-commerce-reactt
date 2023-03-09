import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "../components/Category";
import { useGetSingleProductQuery } from "../store/features/product/productSlice";
const Products = () => {
  const [searchProduct,setSeractProduct] =useState("")
    const {data: singleProduct, 
      isLoading, 
      error, 
      isError} = useGetSingleProductQuery(searchProduct);
  return (
    <section className="section-01">
      <div className="c-wrapper">
        <div className="left-side">
          <Category />
        </div>

        <div className="right-side">
          <div className="filtering-operations">
            <div className="search">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#FF4E50" stroke="none">
                  <path d="M2415 4789 c-243 -32 -492 -166 -637 -346 -110 -136 -159 -226 -213 -386 -51 -152 -64 -247 -66 -474 l-1 -198 98 -87 c55 -48 102 -87 107 -88 4 0 7 119 7 264 l0 264 638 211 637 210 213 -212 212 -212 0 -262 c0 -145 2 -263 5 -263 3 0 50 39 105 87 l100 86 0 206 c0 365 -50 566 -186 743 -80 103 -230 197 -376 235 l-70 18 -54 108 -54 107 -198 -1 c-108 -1 -228 -6 -267 -10z" fill="#FF4E50"></path>
                  <path d="M2085 3298 c-37 -20 -55 -52 -55 -96 0 -35 6 -49 29 -73 86 -85 225 26 161 129 -29 48 -89 66 -135 40z" fill="#FF4E50"></path>
                  <path d="M2944 3300 c-34 -13 -64 -59 -64 -97 0 -47 54 -103 99 -103 66 0 111 44 111 111 0 22 -10 41 -34 65 -35 35 -68 42 -112 24z" fill="#FF4E50"></path>
                  <path d="M1805 2880 c-348 -54 -620 -301 -711 -645 -25 -97 -25 -302 0 -400 21 -82 81 -214 125 -279 17 -24 31 -49 31 -54 0 -21 171 -170 241 -210 74 -41 122 -58 246 -86 34 -8 66 -17 72 -21 6 -3 11 -31 11 -61 l0 -54 105 0 105 0 0 60 c0 55 2 60 22 60 44 0 155 33 236 70 73 35 87 38 130 31 79 -12 281 -5 350 13 200 52 351 164 451 334 43 72 87 193 78 215 -3 7 -38 23 -79 35 -135 39 -124 40 -143 -17 -21 -63 -99 -184 -151 -233 -84 -78 -229 -144 -304 -136 l-31 3 26 35 c48 64 107 193 131 288 89 352 -61 729 -368 926 -161 102 -393 153 -573 126z m293 -184 c123 -33 264 -122 340 -214 59 -71 92 -128 125 -217 25 -68 31 -98 35 -200 3 -91 0 -136 -12 -185 -110 -435 -572 -649 -976 -452 -113 55 -243 187 -299 303 -138 287 -74 607 164 821 82 73 215 137 328 158 67 12 227 4 295 -14z" fill="#FF4E50"></path>
                </g>
              </svg>
              
              <input placeholder="Ürün Ara..."
              type="text"
              value={searchProduct}
              onChange={(e) => setSeractProduct(e.target.value)}></input>
               
            </div>
          </div>
          <div className="product-container">
          {
            isLoading && 
            <div className="c-item-01">
              Loading
            </div>
          }
          {
            isError && 
            <div className="c-item-02">
              {error}
            </div>
          }
       
          {
            singleProduct && singleProduct.products.map((item) =>(
              <div key={item.id} className="c-item-03">
                <Link className="c-item-03-A" to="/productDetails">
                  <img className="c-item-03-B" src={item.thumbnail} alt={item.title}></img>
                  <h4 className="c-item-03-C">{item.title}</h4>
                  <p className="c-item-03-D">{item.description}</p>
                  <div className="c-item-03-E">
                    <span>Price: {item.price}</span>
                    <span>Rating: {item.rating}</span>
                    <span>Discount: {item.discountPercentage}</span>
                  </div>
                </Link>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
