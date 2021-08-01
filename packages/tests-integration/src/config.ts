export const missingParameter = (name: string): never => {
  throw new Error(`configuration parameter name '${name}' is missing`);
};

export const serverUrl = process.env.TEST_SERVER_URL ?? 'http://localhost:8080';
