import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import { App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const PageLayout = styled.div`
  max-width: 100vw;
  background-color: skyblue;
  display: flex;
  justify-content: center;
`;

root.render(
  <React.StrictMode>
    <PageLayout>
      <App />
    </PageLayout>
  </React.StrictMode>
);
