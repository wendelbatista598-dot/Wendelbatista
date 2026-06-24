import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { BlogPage } from "./pages/BlogPage";
import { ArticlePage } from "./pages/ArticlePage";
import { FinancesPage } from "./pages/FinancesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/blog",
    Component: BlogPage,
  },
  {
    path: "/blog/:slug",
    Component: ArticlePage,
  },
  {
    path: "/financas",
    Component: FinancesPage,
  },
]);
