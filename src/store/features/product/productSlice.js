import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com/"}),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getAllCategory: builder.query({
      query: () => "products" + "/categories"
    }),
    getSingleProduct: builder.query({
      query: (product) => "products/search?q=" + product
    }),
    selectedCategory: builder.query({
      query: (categories) => "products/category/" + categories
    })
  }),
});
export const {useGetAllProductsQuery, useGetAllCategoryQuery, useGetSingleProductQuery,useSelectedCategoryQuery} = productsApi;
