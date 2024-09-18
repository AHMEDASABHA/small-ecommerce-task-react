import { createBrowserRouter } from "react-router-dom";
import HomePageContainer from "./components/pages/products/home_container";
import AuthLayout from "./components/pages/auth/auth_layout";
import Login from "./components/pages/auth/login";
import RegisterForm from "./components/pages/auth/register";
import ProductsPage from "./components/pages/products/products_page";
import ProductsList from "./components/pages/products/products_list";
import { loadCategoryProducts } from "./utils/products_utils/loadCategory";
import { loadSingleProduct } from "./utils/products_utils/singleProductLoader";
import ProductDetails from "./components/pages/products/product_details";
import HomePage from "./components/pages/homePage";
import NotFound from "./components/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageContainer />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "details/:id",
        element: <ProductDetails />,
        loader: ({ params }) => loadSingleProduct(params.id),
      },
      {
        path: "products",
        element: <ProductsPage />,
        children: [
          {
            index: true,
            element: <ProductsList />,
            loader: () => loadCategoryProducts("electronics"),
          },
          {
            path: "jewelery",
            element: <ProductsList />,
            loader: () => loadCategoryProducts("jewelery"),
          },
          {
            path: "men's clothing",
            element: <ProductsList />,
            loader: () => loadCategoryProducts("men's clothing"),
          },
          {
            path: "women's clothing",
            element: <ProductsList />,
            loader: () => loadCategoryProducts("women's clothing"),
          },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <RegisterForm />,
          },
        ],
      },
    ],
  },
]);
