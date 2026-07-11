import AsyncStorage from '@react-native-async-storage/async-storage';
import { serverDataKey } from './constants';
import { StorageServer } from './types';

const storage = {
    getItem: async (key: string) => {
        try {
            return await AsyncStorage.getItem(key);
        } catch (error) {
            if (typeof window !== 'undefined' && window.localStorage) {
                return window.localStorage.getItem(key);
            }

            throw error;
        }
    },
    setItem: async (key: string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            if (typeof window !== 'undefined' && window.localStorage) {
                window.localStorage.setItem(key, value);
                return;
            }

            throw error;
        }
    }
};

const useStorageServerHook = () => {
    const getStorageServer = async () => {
        const storedValue = await storage.getItem(serverDataKey);

        if (!storedValue) {
            return {
                server: "",
                path: ""
            };
        }

        return JSON.parse(storedValue) as StorageServer;
    };

    const setStorageServer = async (server: string, path: string) => {
        const serverData: StorageServer = {
            server,
            path
        };

        await storage.setItem(serverDataKey, JSON.stringify(serverData));
    };

    return {
        getStorageServer,
        setStorageServer
    }
}

export { useStorageServerHook }