[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  let navItems: list(Nav.item) = [
    {url: "/", label: "Home"},
    {url: "/signup", label: "Sign up"},
  ];

  <div>
    <Nav items=navItems />
    {switch (url.path) {
     | [] => Pages.home
     | ["signup"] => Pages.signUp
     | _ => Pages.notFound
     }}
  </div>;
};