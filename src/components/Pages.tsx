import { useContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import { pages } from "../pages";
import { AppContext } from "./AppContext";
import { Page } from "./Page";
import Calendar from "./Calendar";

function Pages() {
  const location = useLocation();
  const appContext = useContext(AppContext);

  if (appContext) {
    return (
      <PageTransition
        preset={appContext.preset}
        transitionKey={location.pathname}
        enterAnimation={appContext.enterAnimation || ""}
        exitAnimation={appContext.exitAnimation || ""}
      >
        <Routes location={location}>
          {pages.map((page, index) => {
            return (
              <Route
                key={index}
                path={`/day/${page.day}`}
                element={<Page page={page} />}
              />
            );
          })}
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </PageTransition>
    );
  }

  return null;
}

export { Pages };
