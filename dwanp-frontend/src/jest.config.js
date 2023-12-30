// jest.config.js
module.exports = {
    // ...
    moduleNameMapper: {
      "^@components/(.*)$": "<rootDir>/src/components/$1",
      "^@utils/(.*)$": "<rootDir>/src/utils/$1",
      // add more mappings as needed
    },
    // ...
  }; 