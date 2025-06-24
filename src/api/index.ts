import { useAuthStore } from "@/stores/auth";

import * as changeKeys from "change-case/keys";

export const BASE_URL = 'http://localhost:8000'

export async function apiFetch<T>(endpoint:string, options: RequestInit = {}): Promise<T> {
    const auth = useAuthStore();
    let headers = options.headers || {};
    if (auth.isAuthenticated) {
        headers = {
            Authorization : `Bearer ${auth.token}`,
            ...headers
        };
    }

    if (!headers.hasOwnProperty('Content-Type') && headers['Content-Type'] !== 'application/json') {
        options.body = JSON.stringify(changeKeys.snakeCase(options.body, 5));
    }
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers,
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonResponse = await response.json();
    return changeKeys.camelCase(jsonResponse, 5) as T;
    
}