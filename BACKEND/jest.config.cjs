/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/tests"],
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.js"],
  moduleFileExtensions: ["js", "mjs", "cjs", "json"],
  transform: {},
  verbose: true,
  testMatch: ["**/?(*.)+(spec|test).[jt]s"],
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/**/index.js"
  ],
  coverageDirectory: "coverage"
};
