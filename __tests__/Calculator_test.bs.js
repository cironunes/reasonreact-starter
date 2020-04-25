'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Calculator$ReasonreactStarter = require("../src/Calculator/Calculator.bs.js");

Jest.describe("Calculator", (function (param) {
        Jest.test("should add three numbers", (function (param) {
                return Jest.Expect.toBe(8, Jest.Expect.expect(Calculator$ReasonreactStarter.sum(/* :: */[
                                    2,
                                    /* :: */[
                                      3,
                                      /* :: */[
                                        3,
                                        /* [] */0
                                      ]
                                    ]
                                  ])));
              }));
        return Jest.test("should add four numbers", (function (param) {
                      return Jest.Expect.toBe(9, Jest.Expect.expect(Calculator$ReasonreactStarter.sum(/* :: */[
                                          2,
                                          /* :: */[
                                            3,
                                            /* :: */[
                                              3,
                                              /* :: */[
                                                1,
                                                /* [] */0
                                              ]
                                            ]
                                          ]
                                        ])));
                    }));
      }));

/*  Not a pure module */
