import { getServerUrl } from './getServerUrl';

export const getRedirectUrl = () => {
  return import.meta.env.VITE_SERVER_REDIRECT_URL ?? `${getServerUrl()}/alias`;
};
