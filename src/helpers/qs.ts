export const createQueryString = (
  params: Record<string, string | number | null>
) => {
  const newSearchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value === null) {
      newSearchParams.delete(key);
    } else {
      newSearchParams.set(key, String(value));
    }
  }

  return newSearchParams.toString();
};
