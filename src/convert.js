const fs = require('fs');
const { parseString } = require('xml2js');

fs.readFile('test-results/test-results.xml', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading test-results.xml:', err);
    return;
  }

  parseString(data, (err, result) => {
    if (err) {
      console.error('Error parsing XML:', err);
      return;
    }

    // Check if there are multiple test suites or just one
    const testSuites = Array.isArray(result.testsuites.testsuite)
      ? result.testsuites.testsuite
      : [result.testsuites.testsuite];

    const testResults = testSuites.map((suite) => {
      return {
        suiteName: suite.$.name,
        tests: suite.$.tests,
        failures: suite.$.failures,
        time: suite.$.time,
      };
    });

    const tableRows = testResults.map(
      (result) =>
        `<tr><td>${result.suiteName}</td><td>${result.tests}</td><td>${result.failures}</td><td>${result.time}</td></tr>`
    );
    const table = `<table border="1"><tr><th>Test Suite</th><th>Tests</th><th>Failures</th><th>Time</th></tr>${tableRows.join(
      ''
    )}</table>`;

    const htmlContent = `<html><head><title>Test Results</title></head><body>${table}</body></html>`;
    fs.writeFile('test-results/table.html', htmlContent, (err) => {
      if (err) {
        console.error('Error writing table.html:', err);
        return;
      }
      console.log('Table generated and saved as table.html');
    });
  });
});
