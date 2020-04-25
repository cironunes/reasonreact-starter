module Styles = {
  open Css;
  let label = style([display(block)]);
};

[@react.component]
let make = () =>
  <Hero>
    <h1> "Sign Up"->React.string </h1>
    <form>
      <div>
        <label className=Styles.label> "Name"->React.string </label>
        <input type_="text" />
      </div>
      <div>
        <label className=Styles.label> "Email"->React.string </label>
        <input type_="text" />
      </div>
      <button> "Sign Up"->React.string </button>
    </form>
  </Hero>;