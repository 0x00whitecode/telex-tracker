"use strict";
exports.__esModule = true;
exports.trackError = void 0;
var trackingHelper_1 = require("./trackingHelper");
function trackError(error) {
    (0, trackingHelper_1.sendDataToTelex)({
        event_name: "error",
        message: error.message,
        status: "failure",
        timestamp: new Date().toISOString()
    });
}
exports.trackError = trackError;
