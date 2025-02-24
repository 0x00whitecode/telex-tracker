"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.trackComponentLifecycle = void 0;
var react_1 = require("react");
var trackingHelper_1 = require("./trackingHelper");
function trackComponentLifecycle(WrappedComponent, componentName) {
    return /** @class */ (function (_super) {
        __extends(TrackedComponent, _super);
        function TrackedComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TrackedComponent.prototype.componentDidMount = function () {
            (0, trackingHelper_1.sendDataToTelex)({
                event_name: "component_mounted",
                message: "".concat(componentName, " mounted"),
                status: "success",
                timestamp: new Date().toISOString()
            });
        };
        TrackedComponent.prototype.componentWillUnmount = function () {
            (0, trackingHelper_1.sendDataToTelex)({
                event_name: "component_unmounted",
                message: "".concat(componentName, " unmounted"),
                status: "success",
                timestamp: new Date().toISOString()
            });
        };
        TrackedComponent.prototype.render = function () {
            return __assign({}, this.props) /  > ;
        };
        return TrackedComponent;
    }(react_1.Component));
}
exports.trackComponentLifecycle = trackComponentLifecycle;
