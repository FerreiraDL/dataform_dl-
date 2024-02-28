const ga4 = require("dataform-ga4-sessions");

// Define your config
const config = {
    dataset: "test_philippe",
    incrementalTableName: "events_20240205",
};

// Declare GA4 source tables
ga4.declareSources(config);
// Create sessions object
const sessions = new ga4.Session(config);
// Publish session table
sessions.publish();
// Publish session assertions
sessions.publishAssertions();

// Create event factory object
const ef = new ga4.EventFactory(config);
// Create all recommended form tracking events
let events = ef.createEcommerceEvents();
// Publish events
events.forEach((event) => event.publish());
