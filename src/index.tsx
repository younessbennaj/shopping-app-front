import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// We use the ChakraProvider to wrap our component tree and provide all chakra ui feautres
import { ChakraProvider } from "@chakra-ui/react";

//In development mode, we use MSWJS to provide mock data for api calls
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
