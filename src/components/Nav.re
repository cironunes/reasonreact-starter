type item = {
  url: string,
  label: string,
};

module Styles = {
  open Css;

  let container =
    style([
      selector("> *", [marginRight(12 |> px)]),
      selector("> *:last-child", [marginRight(zero)]),
    ]);
};

[@react.component]
let make = (~items) => {
  <div className=Styles.container>
    {items
     |> List.mapi((index, item) => {
          <a key={index->string_of_int} href={item.url}>
            item.label->React.string
          </a>
        })
     |> Array.of_list
     |> React.array}
  </div>;
};