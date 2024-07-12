import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/signinpage" />
  },
  {
    path: 'signinpage',
    element: <SignInPage />
  }
]);

function App() {
  return (
    <div className="main-class">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
