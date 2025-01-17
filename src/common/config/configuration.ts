export default () => ({
    listenPort: parseInt(process.env.LISTEN_PORT) || 3000,
    google: {
        apiKey: process.env.GOOGLE_API_KEY
    }
});