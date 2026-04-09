import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/Books";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import BookDetails from "../pages/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/bookDetails/:bookId",
        Component: BookDetails,
        loader: ()=>fetch("/booksData.json")
      }
    ],
    errorElement: <ErrorPage/>
  },

])