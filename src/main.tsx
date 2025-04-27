import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import "./index.css";
// Ensure the environment variable is correctly imported
const PUBLISHABLE_KEY =
  "pk_test_ZW5hYmxlZC1mbGVhLTgxLmNsZXJrLmFjY291bnRzLmRldiQ";

if (!PUBLISHABLE_KEY) {
  console.error(
    "Missing Clerk Publishable Key. Please add VITE_CLERK_PUBLISHABLE_KEY to your environment variables."
  );
  throw new Error(
    "Missing Clerk Publishable Key. Please go to Lovable project settings and add the Publishable Key from your Clerk dashboard."
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
