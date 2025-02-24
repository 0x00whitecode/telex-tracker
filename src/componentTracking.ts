import React, { Component, ComponentType } from "react";
import { sendDataToTelex } from "./trackingHelper";

export function trackComponentLifecycle<P extends object>(
    WrappedComponent: ComponentType<P>,
    componentName: string
) {
    return class TrackedComponent extends Component<P> {
        componentDidMount() {
            sendDataToTelex({
                event_name: "component_mounted",
                message: `${componentName} mounted`,
                status: "success",
                timestamp: new Date().toISOString(),
            });
        }

        componentWillUnmount() {
            sendDataToTelex({
                event_name: "component_unmounted",
                message: `${componentName} unmounted`,
                status: "success",
                timestamp: new Date().toISOString(),
            });
        }

        render() {
            return <WrappedComponent {...this.props as P} />;
        }
    };
}
