import path = require ('path');

import chalk = require ('chalk');
import _ = require ('underscore');

import apiUtils = require ('../api-utils');
import htmlGenerator = require ('../html-api-generator/rendering');
import u = require ('../../../test-utils');


// Array of functions to test
var functionsToTest : Array<any> = []

// Functions of 'examples/browser/1/foo_1.js'
functionsToTest.push (
  {
    'functionName' : 'f_1_0',
    'parameters'   : {
      x: {
        type: 'Int'
      }
    },
    'nTestCases' : 4
  },
  {
    'functionName' : 'f_1_1',
    'parameters'   : {
      x: {
        type: 'Int',
        value: 10
      }
    },
    'nTestCases' : 4
  },
  {
    'functionName' : 'f_1_2',
    'parameters'   : {
      x: {
        type: 'Int',
        value: 10
      }
    },
    'nTestCases' : 3
  },
  {
    'functionName' : 'f_1_3',
    'parameters'   : {
      x: {
        type: 'Int',
        value: 10
      },
      y: {
        type: 'Int',
        value: 231
      },
      z: {
        type: 'Int',
        value: 23131
      }
    },
    'nTestCases' : 5
  },
  {
    'functionName' : 'f_1_4',
    'parameters'   : {
      a: {
        type: 'Int',
        value: 10
      },
      b: {
        type: 'Int',
        value: 231
      }
    },
    'nTestCases' : 6
  }
); // End of functions of 'examples/browser/1/foo_1.js'

// Functions of 'examples/browser/1/foo_2.js'
functionsToTest.push (
  {
    'functionName' : 'f_2_0',
    'parameters'   : {
      x: {
        type: 'Int',
        value: 0
      },
      y: {
        type: 'Int',
        value: 2
      }
    },
    'nTestCases' : 6
  },
  {
    'functionName' : 'f_2_1',
    'parameters'   : {
      x: {
        type: 'Int',
        value: 10
      }
    },
    'nTestCases' : 4
  },
  {
    'functionName' : 'f_2_2',
    'parameters'   : {
      x: {
        type: 'Int',
        value: 10
      }
    },
    'nTestCases' : 4
  },
  {
    'functionName' : 'f_2_3',
    'parameters'   : {
      x: {
        type: 'Int',
        value: 10
      },
      y: {
        type: 'Int',
        value: 231
      },
      z: {
        type: 'Int',
        value: 23131
      }
    },
    'nTestCases' : 5
  },
  {
    'functionName' : 'f_2_4',
    'parameters'   : {
      a: {
        type: 'Int',
        value: 10
      },
      b: {
        type: 'Int',
        value: 231
      }
    },
    'nTestCases' : 6
  }
); // End of functions of 'examples/browser/1/foo_2.js'

// Functions of 'examples/browser/1/foo_3.js'
functionsToTest.push (
  {
    'functionName' : 'f_3_0',
    'parameters'   : {
      x: {
        type: 'Int'
      },
      y: {
        type: 'Int'
      }
    },
    'nTestCases' : 2
  },
  {
    'functionName' : 'f_3_1',
    'parameters'   : {
      x: {
        type: 'Int'
      },
      y: {
        type: 'Int'
      }
    },
    'nTestCases' : 2
  },
  {
    'functionName' : 'f_3_2',
    'parameters'   : {
      x: {
        type: 'Int'
      },
      y: {
        type: 'Int'
      }
    },
    'nTestCases' : 2
  },
  {
    'functionName' : 'f_3_3',
    'parameters'   : {
      x: {
        type: 'Int'
      }
    },
    'nTestCases' : 2
  },
  {
    'functionName' : 'f_3_4',
    'parameters'   : {
      x: {
        type: 'Int'
      },
      y: {
        type: 'Int'
      }
    },
    'nTestCases' : 2
  }
); // End of functions of 'examples/browser/1/foo_3.js'

// Functions of 'examples/browser/1/foo_4.js'
functionsToTest.push (
  {
    'functionName' : 'f_4_0',
    'parameters'   : {
      x: {
        type: 'Int'
      },
      y: {
        type: 'Int'
      }
    },
    'nTestCases' : 9
  },
  {
    'functionName' : 'f_4_1',
    'parameters'   : {
      a: {
        type: 'Int'
      }
    },
    'nTestCases' : 2
  },
  {
    'functionName' : 'f_4_2',
    'parameters'   : {
      a: {
        type: 'Int',
        value: 10
      },
      b: {
        type: 'Int',
        value: 10
      }
    },
    'nTestCases' : 2
  },
  {
    'functionName' : 'f_4_3',
    'parameters'   : {
      a: {
        type: 'Int'
      },
      b: {
        type: 'Int'
      }
    },
    'nTestCases' : 2
  },
  {
    'functionName' : 'f_4_4',
    'parameters'   : {
      a: {
        type: 'Int'
      },
      b: {
        type: 'Int'
      }
    },
    'nTestCases' : 2
  }
); // End of functions of 'examples/browser/1/foo_4.js'

// Print some info
u.printInfo ('Testing application in examples/browser/1');
u.printInfo ('Number of functions to test : ' + functionsToTest.length);

// Execute all functions and store response object generated by leena
// inside 'leenaResponseObject'
var leenaResponseObject : Array<any> = [];

apiUtils.testFunction (0, functionsToTest, leenaResponseObject, function () {
  u.printSuccess ('All tests on "testFunction" passed');

  // Get sources of all functions and store every function's source
  // inside 'sourcesFunctions'
  var sourcesFunctions : Array<string> = [];

  apiUtils.getSourceFunction (0, functionsToTest, sourcesFunctions, function () {
    u.printSuccess ('All sources recovered');

    // Generate the HTML Page (path : build/test/api/browser-example-1/)
    var pathHTML : string = path.join (__dirname, 'test-1-application.html');
    var htmlCorrectRendering : boolean = htmlGenerator.renderingTests (
      pathHTML,
      'examples/browser/1',
      sourcesFunctions,
      leenaResponseObject
    );

    if (htmlCorrectRendering) {
      u.printSuccess ('Tests correctly written in "' + pathHTML + '"');
    } else {
      u.printError ('Unable to resume tests in "' + pathHTML + '"');
    }
  });
});