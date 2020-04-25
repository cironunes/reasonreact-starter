module Styles = {
  open Css;
  global("body", [fontFamily("sans-serif"->`custom)]);
};

ReactDOMRe.renderToElementWithId(<App />, "app");