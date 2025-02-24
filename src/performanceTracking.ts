import { sendDataToTelex } from "./trackingHelper";

export function trackPerformance(event: string) {
    const startTime = performance.now();

    return function stopTracking() {
        const endTime = performance.now();
        sendDataToTelex({
            event_name: "performance",
            message: `${event} took ${endTime - startTime}ms`,
            status: "success",
            timestamp: new Date().toISOString(),
        });
    };
}
