"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.getTelexConfig = exports.setTelexConfig = exports.sendDataToTelex = exports.trackComponentLifecycle = exports.trackPerformance = exports.trackError = void 0;
var errorTracking_1 = require("./errorTracking");
__createBinding(exports, errorTracking_1, "trackError");
var performanceTracking_1 = require("./performanceTracking");
__createBinding(exports, performanceTracking_1, "trackPerformance");
var componentTracking_1 = require("./componentTracking");
__createBinding(exports, componentTracking_1, "trackComponentLifecycle");
var trackingHelper_1 = require("./trackingHelper");
__createBinding(exports, trackingHelper_1, "sendDataToTelex");
var config_1 = require("./config");
__createBinding(exports, config_1, "setTelexConfig");
__createBinding(exports, config_1, "getTelexConfig");
