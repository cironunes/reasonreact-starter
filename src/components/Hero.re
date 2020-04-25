module Styles = {
  open Css;

  let container =
    style([backgroundColor(hex("f3f3f3")), padding(px(24))]);
};

[@react.component]
let make = (~children) => {
  <div className=Styles.container> children </div>;
};