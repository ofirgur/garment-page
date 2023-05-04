import * as React from "react";
import { render } from "@testing-library/react";

import Layout from "./index";

describe("Layout", () => {
  it("Should render correctly", () => {
    const { container } = render(<Layout />);
    expect(container).toMatchSnapshot();
  });
});
