import { getTelexConfig } from "./config";

export async function sendDataToTelex(data: object) {
    const { webhook_url } = await getTelexConfig();
    if (!webhook_url) {
        console.error("Telex Webhook is not set!");
        return;
    }

    fetch(webhook_url, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then(console.log)
        .catch((error) => console.error("Failed to send data to Telex.", error));
}
