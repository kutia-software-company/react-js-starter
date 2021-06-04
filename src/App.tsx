import React from "react";

import { UIContextProvider } from "./lib/context/UIContext/UIContextProvider";
import { AuthContextProvider } from "./lib/context/AuthContext/AuthContextProvider";
import { ConfirmationContextProvider } from "./lib/context/ConfirmationContext/ConfirmationContextProvider";

//Partials
import { Header } from "./partials/Header/Header";
import { Footer } from "./partials/Footer/Footer";
import { Routes } from "./routes/Routes";

//Styles
import "./App.scss";

function App() {
  return (
    <div className="App container">
      <AuthContextProvider>
        <UIContextProvider>
          <ConfirmationContextProvider>
            <Header />
            <Routes />
            <Footer />
          </ConfirmationContextProvider>
        </UIContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
