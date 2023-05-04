import * as React from "react";

import Layout from "../Layout";

interface AppProps {
  history: any;
}

export default (props: AppProps) => {
  const { history } = props;
  console.log("container injects history: ", history);

  return <Layout />;
};
