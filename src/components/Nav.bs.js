'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

var container = Curry._1(Css.style, /* :: */[
      Css.selector("> *", /* :: */[
            Css.marginRight(Css.px(12)),
            /* [] */0
          ]),
      /* :: */[
        Css.selector("> *:last-child", /* :: */[
              Css.marginRight(Css.zero),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var Styles = {
  container: container
};

function Nav(Props) {
  var items = Props.items;
  return React.createElement("div", {
              className: container
            }, $$Array.of_list(List.mapi((function (index, item) {
                        return React.createElement("a", {
                                    key: String(index),
                                    href: item.url
                                  }, item.label);
                      }), items)));
}

var make = Nav;

exports.Styles = Styles;
exports.make = make;
/* container Not a pure module */
