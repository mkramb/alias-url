export const getServerUrl = () => {
  return import.meta.env.VITE_SERVER_URL ?? 'http://localhost:8080';
};
