import * as React from "react";
import { Router } from "react-router-dom";

import Theme from "../Theme";
import Layout from "../Layout";

interface AppProps {
  history: any;
}

export default (props: AppProps) => {
  const { history } = props;
  console.log("container injects history: ", history);

  return (
    <Theme>
      <Router history={history}>
        <Layout />
      </Router>
    </Theme>
  );
};
