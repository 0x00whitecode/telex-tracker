import AsyncStorage from '@react-native-async-storage/async-storage';

export interface TelexConfig {
    webhook_url: string;
}

let defaultConfig: TelexConfig = {
    webhook_url: "",
};

// Set webhook dynamically
export async function setTelexConfig(newConfig: Partial<TelexConfig>) {
    const updatedConfig = { ...defaultConfig, ...newConfig };
    await AsyncStorage.setItem('TelexConfig', JSON.stringify(updatedConfig));
}

// Get current webhook
export async function getTelexConfig(): Promise<TelexConfig> {
    const storedConfig = await AsyncStorage.getItem('TelexConfig');
    return storedConfig ? JSON.parse(storedConfig) : defaultConfig;
}
