const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const configPath = "./src/config.ts";

rl.question("Enter your Telex Webhook URL: ", (webhook) => {
  const configContent = `
  export const telexConfig = {
    webhook_url: "${webhook}"
  };
  `;
  fs.writeFileSync(configPath, configContent);
  console.log("\n✅ Telex Webhook Configured! You can update it in src/config.ts.\n");
  rl.close();
});
