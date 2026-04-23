import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToHash from "./components/ScrollToHash.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Tilapia from "./pages/products/Tilapia.tsx";
import Trout from "./pages/products/Trout.tsx";
import Catfish from "./pages/products/Catfish.tsx";
import Abalone from "./pages/products/Abalone.tsx";
import Koi from "./pages/products/Koi.tsx";
import Pigeon from "./pages/products/Pigeon.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/tilapia" element={<Tilapia />} />
          <Route path="/products/trout" element={<Trout />} />
          <Route path="/products/catfish" element={<Catfish />} />
          <Route path="/products/abalone" element={<Abalone />} />
          <Route path="/products/koi" element={<Koi />} />
          <Route path="/products/pigeon" element={<Pigeon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
