export default () => ({
    listenPort: parseInt(process.env.LISTEN_PORT) || 3000
});