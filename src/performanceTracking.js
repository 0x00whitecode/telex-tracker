"use strict";
exports.__esModule = true;
exports.trackPerformance = void 0;
var trackingHelper_1 = require("./trackingHelper");
function trackPerformance(event) {
    var startTime = performance.now();
    return function stopTracking() {
        var endTime = performance.now();
        (0, trackingHelper_1.sendDataToTelex)({
            event_name: "performance",
            message: "".concat(event, " took ").concat(endTime - startTime, "ms"),
            status: "success",
            timestamp: new Date().toISOString()
        });
    };
}
exports.trackPerformance = trackPerformance;
