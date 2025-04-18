import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProfilePage from "./pages/ProfilePage";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage></LoginPage>,
    },
    {
      path: "/signup",
      element:<SignupPage></SignupPage>
    },
    {
      path: "/",
      element:<HomePage></HomePage>
    },
    {
      path: "/cart",
      element:<CartPage></CartPage>
    },
    {
      path: "/profile",
      element:<ProfilePage></ProfilePage>
    },
    {
      path: "/product/:id",
      element:<ProductDetailPage></ProductDetailPage>
    },
    {
      path: "/*",
      element: <NotFoundPage></NotFoundPage>,
    },
  ]);

  return (
    <div className="App">
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
