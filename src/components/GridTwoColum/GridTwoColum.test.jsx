import { GridTwoColum } from ".";
import { renderTheme } from "../../styles/render-theme";

import mock from "./mock";

describe("<GridTwoColumn />", () => {
  it("should render two column grid", () => {
    const { container } = renderTheme(<GridTwoColum {...mock} />);
    expect(container).toMatchSnapshot();
  });
});