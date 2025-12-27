import { BASE_URL } from "./constants";

export const generateUniqeId = () => {
  return (
    Date.now().toString(36) +
    Math.floor(
      Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)
    ).toString(36)
  );
};

export const formatCurrency = (number: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(number);
};

export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const api = async ({
  url,
  options,
}: {
  url: string;
  options?: RequestInit;
}) => {
  try {
    const res = await fetch(`${BASE_URL}/${url}`, { ...options });

    const data = await res.json();

    if (data.status === "failed") {
      throw new Error(data.message);
    }

    return { success: true, ...data };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};
