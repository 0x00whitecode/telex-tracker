import { trackPerformance, trackError, trackComponentLifecycle, setTelexConfig } from "telex-tracker";

// Set webhook dynamically
setTelexConfig({ webhook_url: "https://your-telex-webhook.com" });

// Track Performance
const fetchData = async () => {
    const stopTracking = trackPerformance("fetchData");
    await fetch("https://api.example.com/data");
    stopTracking();
};

// Track Error
try {
    throw new Error("Something went wrong!");
} catch (error) {
    trackError(error);
}
