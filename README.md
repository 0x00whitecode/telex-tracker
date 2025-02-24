

---

# **react native APM - using Telex ** 📡  
### **Performance & Error Tracking for React Native with Telex Webhook**  

🚀 **Telex Tracker** is a lightweight tracking library for **React Native**, enabling **performance monitoring** and **error tracking** via **Telex Webhooks**. This package dynamically allows users to insert their webhook during installation and update it anytime!  

---

## **📦 Installation**  

Run the command below to install the package:  
```sh
npm install telex-tracker
```

🔹 After installation, it will prompt you to enter your **Telex Webhook URL**.  

### **Example Prompt (Postinstall Script)**
```
Enter your Telex Webhook URL: https://your-telex-webhook.com
✅ Telex Webhook Configured! You can change it in telexConfig.js.
```
📌 **Your webhook is saved in `telexConfig.js`** for easy updates.

---

## **🛠️ Usage in React Native**  

### **1️⃣ Import and Set Your Webhook**  
You can **set** and **update** the webhook dynamically in your app:  

```ts
import { setTelexConfig, getTelexConfig, trackError, trackPerformance } from "telex-tracker";

// Set webhook dynamically (if not set during install)
setTelexConfig({ webhook_url: "https://your-telex-webhook.com" });

// Get current configuration
getTelexConfig().then(config => console.log("Current Config:", config));
```

---

### **2️⃣ Track Performance** ⏳  
Monitor app load time and execution speed in **React Native**:
```ts
import { trackPerformance } from "telex-tracker";

// Example: Track function execution time
const fetchData = async () => {
    const stopTracking = trackPerformance("fetchData");
    await fetch("https://api.example.com/data");
    stopTracking();
};
```

---

### **3️⃣ Track Errors** 🚨  
Automatically capture and send app **crashes & errors** to your Telex webhook:
```ts
import { trackError } from "telex-tracker";

// Example: Capture an error
try {
    throw new Error("Something went wrong!");
} catch (error) {
    trackError(error);
}
```

---

## **📌 How to Update Webhook**
Your webhook is stored in **`telexConfig.js`**. If you need to change it:  
1. Open `telexConfig.js`
2. Modify the URL like this:
```js
module.exports = { webhook_url: "https://new-webhook-url.com" };
```
OR update it dynamically in your code:
```ts
setTelexConfig({ webhook_url: "https://new-webhook-url.com" });
```

---

## **🖥️ Screenshots**  

### **Getting Telex Webhook *  
To obtain your **Telex webhook**, follow these steps:  
1. Open **telex**  
2. Search for **Telex channel and create a channel **  
3. Type `/getWebhook`  
4. Copy the generated **webhook URL** and use it in `setTelexConfig()`

📸 **Example Screenshot:**  
![Telex Webhook Setup](https://your-image-link.com/example.png)

---

## **💡 Features**
✅ **Real-time error reporting** via **Telex Webhooks**  
✅ **Track app performance** with custom profiling  
✅ **Easy webhook setup** via `setTelexConfig()`  
✅ **Auto setup on install** for seamless configuration  

---

## **📜 License**
This package is licensed under the **MIT License**.  

---

## **💬 Support**
For questions, issues, or contributions, feel free to open an **issue** or submit a **pull request** on GitHub. 🚀  

🔗 **GitHub Repo:** [Telex Tracker](https://github.com/0x00whitecode/telex-tracker)