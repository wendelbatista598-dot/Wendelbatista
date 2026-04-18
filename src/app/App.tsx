import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./routes";
import { RemoveNoIndex } from "./components/blog/RemoveNoIndex";

function App() {
  return (
    <HelmetProvider>
      <RemoveNoIndex />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;