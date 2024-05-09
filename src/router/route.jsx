import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {routeItem} from "./item";

export const RootRouter = () => {
  return (
    <Router>
      <Routes>
        {routeItem.map((item) => (
          <Route key={item.id} path={item.path} element={item.route} />
        ))}
      </Routes>
    </Router>
  );
};
