import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import "react-loading-skeleton/dist/skeleton.css";
import App from "./App";
import { AppProvider } from "./context/context";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <AppProvider>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </AppProvider>
);
