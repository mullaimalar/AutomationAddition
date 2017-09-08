$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Addition.feature");
formatter.feature({
  "line": 1,
  "name": "Addition",
  "description": "As a user\r\nI want to add two numbers using free online sum calculator\r\nSo that I don\u0027t need to calculate myself",
  "id": "addition",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Add two numbers \"\u003cnum1\u003e\" \u0026 \"\u003cnum2\u003e\"",
  "description": "",
  "id": "addition;add-two-numbers-\"\u003cnum1\u003e\"-\u0026-\"\u003cnum2\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "the user perform the request to add \"\u003cnum1\u003e\" \u0026 \"\u003cnum2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the sum of \"\u003cnum1\u003e\" \u0026 \"\u003cnum2\u003e\" is \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "addition;add-two-numbers-\"\u003cnum1\u003e\"-\u0026-\"\u003cnum2\u003e\";",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "result"
      ],
      "line": 13,
      "id": "addition;add-two-numbers-\"\u003cnum1\u003e\"-\u0026-\"\u003cnum2\u003e\";;1"
    },
    {
      "cells": [
        "9",
        "9",
        "18.0"
      ],
      "line": 14,
      "id": "addition;add-two-numbers-\"\u003cnum1\u003e\"-\u0026-\"\u003cnum2\u003e\";;2"
    },
    {
      "cells": [
        "2",
        "2",
        "4.0"
      ],
      "line": 15,
      "id": "addition;add-two-numbers-\"\u003cnum1\u003e\"-\u0026-\"\u003cnum2\u003e\";;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3785145225,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "navigate to miniwebtool sum calculator page",
  "keyword": "Given "
});
formatter.match({
  "location": "AdditionStepDefinition.navigate_to_miniwebtool_sum_calculator_page()"
});
formatter.result({
  "duration": 2959618271,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Add two numbers \"9\" \u0026 \"9\"",
  "description": "",
  "id": "addition;add-two-numbers-\"\u003cnum1\u003e\"-\u0026-\"\u003cnum2\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "the user perform the request to add \"9\" \u0026 \"9\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the sum of \"9\" \u0026 \"9\" is \"18.0\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 37
    },
    {
      "val": "9",
      "offset": 43
    }
  ],
  "location": "AdditionStepDefinition.the_user_perform_the_request_to_add(String,String)"
});
formatter.result({
  "duration": 2515024119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 12
    },
    {
      "val": "9",
      "offset": 18
    },
    {
      "val": "18.0",
      "offset": 25
    }
  ],
  "location": "AdditionStepDefinition.the_sum_of_is(String,String,String)"
});
formatter.result({
  "duration": 48209383,
  "status": "passed"
});
formatter.after({
  "duration": 673974637,
  "status": "passed"
});
formatter.before({
  "duration": 3014437830,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "navigate to miniwebtool sum calculator page",
  "keyword": "Given "
});
formatter.match({
  "location": "AdditionStepDefinition.navigate_to_miniwebtool_sum_calculator_page()"
});
formatter.result({
  "duration": 8568994715,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Add two numbers \"2\" \u0026 \"2\"",
  "description": "",
  "id": "addition;add-two-numbers-\"\u003cnum1\u003e\"-\u0026-\"\u003cnum2\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "the user perform the request to add \"2\" \u0026 \"2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the sum of \"2\" \u0026 \"2\" is \"4.0\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 37
    },
    {
      "val": "2",
      "offset": 43
    }
  ],
  "location": "AdditionStepDefinition.the_user_perform_the_request_to_add(String,String)"
});
formatter.result({
  "duration": 3256516524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    },
    {
      "val": "2",
      "offset": 18
    },
    {
      "val": "4.0",
      "offset": 25
    }
  ],
  "location": "AdditionStepDefinition.the_sum_of_is(String,String,String)"
});
formatter.result({
  "duration": 49465669,
  "status": "passed"
});
formatter.after({
  "duration": 614309860,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Add two invalid inputs \"\u003cinput1\u003e\" \u0026 \"\u003cinput2\u003e\"",
  "description": "",
  "id": "addition;add-two-invalid-inputs-\"\u003cinput1\u003e\"-\u0026-\"\u003cinput2\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "the user perform the request to add \"\u003cinput1\u003e\" \u0026 \"\u003cinput2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the sum of invalid inputs \"\u003cinput1\u003e\" \u0026 \"\u003cinput2\u003e\" is \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "addition;add-two-invalid-inputs-\"\u003cinput1\u003e\"-\u0026-\"\u003cinput2\u003e\";",
  "rows": [
    {
      "cells": [
        "input1",
        "input2",
        "result"
      ],
      "line": 21,
      "id": "addition;add-two-invalid-inputs-\"\u003cinput1\u003e\"-\u0026-\"\u003cinput2\u003e\";;1"
    },
    {
      "cells": [
        "a",
        "c",
        "Please enter all the numbers separated by comma, space or line break."
      ],
      "line": 22,
      "id": "addition;add-two-invalid-inputs-\"\u003cinput1\u003e\"-\u0026-\"\u003cinput2\u003e\";;2"
    },
    {
      "cells": [
        "@",
        "$",
        "Please enter all the numbers separated by comma, space or line break."
      ],
      "line": 23,
      "id": "addition;add-two-invalid-inputs-\"\u003cinput1\u003e\"-\u0026-\"\u003cinput2\u003e\";;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3028231642,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "navigate to miniwebtool sum calculator page",
  "keyword": "Given "
});
formatter.match({
  "location": "AdditionStepDefinition.navigate_to_miniwebtool_sum_calculator_page()"
});
formatter.result({
  "duration": 2955636129,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Add two invalid inputs \"a\" \u0026 \"c\"",
  "description": "",
  "id": "addition;add-two-invalid-inputs-\"\u003cinput1\u003e\"-\u0026-\"\u003cinput2\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "the user perform the request to add \"a\" \u0026 \"c\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the sum of invalid inputs \"a\" \u0026 \"c\" is \"Please enter all the numbers separated by comma, space or line break.\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 37
    },
    {
      "val": "c",
      "offset": 43
    }
  ],
  "location": "AdditionStepDefinition.the_user_perform_the_request_to_add(String,String)"
});
formatter.result({
  "duration": 3242239699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 27
    },
    {
      "val": "c",
      "offset": 33
    },
    {
      "val": "Please enter all the numbers separated by comma, space or line break.",
      "offset": 40
    }
  ],
  "location": "AdditionStepDefinition.the_sum_of_invalid_inputs_is(String,String,String)"
});
formatter.result({
  "duration": 41672975,
  "status": "passed"
});
formatter.after({
  "duration": 602227126,
  "status": "passed"
});
formatter.before({
  "duration": 3058204187,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "navigate to miniwebtool sum calculator page",
  "keyword": "Given "
});
formatter.match({
  "location": "AdditionStepDefinition.navigate_to_miniwebtool_sum_calculator_page()"
});
formatter.result({
  "duration": 2970597706,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Add two invalid inputs \"@\" \u0026 \"$\"",
  "description": "",
  "id": "addition;add-two-invalid-inputs-\"\u003cinput1\u003e\"-\u0026-\"\u003cinput2\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "the user perform the request to add \"@\" \u0026 \"$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the sum of invalid inputs \"@\" \u0026 \"$\" is \"Please enter all the numbers separated by comma, space or line break.\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "@",
      "offset": 37
    },
    {
      "val": "$",
      "offset": 43
    }
  ],
  "location": "AdditionStepDefinition.the_user_perform_the_request_to_add(String,String)"
});
formatter.result({
  "duration": 3162357919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@",
      "offset": 27
    },
    {
      "val": "$",
      "offset": 33
    },
    {
      "val": "Please enter all the numbers separated by comma, space or line break.",
      "offset": 40
    }
  ],
  "location": "AdditionStepDefinition.the_sum_of_invalid_inputs_is(String,String,String)"
});
formatter.result({
  "duration": 41434674,
  "status": "passed"
});
formatter.after({
  "duration": 602032765,
  "status": "passed"
});
});