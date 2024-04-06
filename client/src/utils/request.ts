export const request = async (url: string, method: string, body?: any) => {
    try {
        const baseUrl = "http://localhost:8000"
        const headers = {
            "Content-Type": "application/json",
        }
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), 7000);
        const response = await fetch(`${baseUrl}${url}`, {
            method,
            headers,
            body: JSON.stringify(body),
            signal: controller.signal,
            credentials: "include",
        });
        clearTimeout(id);
        return response.json();
    } catch (error) {
        console.error(error);
    }
}