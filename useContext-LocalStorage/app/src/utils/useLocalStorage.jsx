import { useState } from "react";

export const useLocalStorage = (keyname, defaultValue) => {

    const [storeValue, setStoreValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(keyname)
            if(value) {
                return JSON.parse(value)
            } else {
                window.localStorage.setItem(keyname, JSON.stringify(defaultValue))
                return defaultValue;
            }
        } catch (error) {
            return defaultValue;
        }
    })
    const setValue = (newValue) => {
        try {
            window.localStorage.setItem(keyname, JSON.stringify(newValue))
        } catch (error) {
            setStoreValue(newValue)
        }
    }
    return [storeValue, setValue]
}
