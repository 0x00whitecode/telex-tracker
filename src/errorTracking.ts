import { sendDataToTelex } from "./trackingHelper";

export function trackError(error: Error) {
    sendDataToTelex({
        event_name: "error",
        message: error.message,
        status: "failure",
        timestamp: new Date().toISOString(),
    });
}
