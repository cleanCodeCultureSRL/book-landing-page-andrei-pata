import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function handlePreorderSubmit(formData: FormData) {
  const formValues: Record<string, FormDataEntryValue> = {};
  formData.forEach((value, key) => {
    formValues[key] = value;
  });
  // Here you can process the form data and redirect to Stripe
  const response = await fetch("/api/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      packageName: formData.get("product"),
      packagePrice: 50, // Adjust prices as needed
      currency: "ron",
      customerDetails: {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        address: formData.get("address"),
      },
    }),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.error || "Unknown error occurred");
  }

  const session = await response.json();
  if (session.url) {
    window.location.href = session.url;
  } else {
    throw new Error("Session URL not provided in response");
  }
}

const backgroundWords = [
  "RESPONSABILITATE",
  "UNITATE",
  "PRIETENIE",
  "PUTEREA INTENTIEI",
  "PROGRAMARE",
  "ROBOTICA",
  "APARTENTENTA",
  "IMPORTANTA FAMILIEI",
];

const bookColors = [
  "rgb(162,130,167)", // Purple
  "rgb(65,103,112)", // Teal
  "rgb(229,107,111)", // Pink
  "rgb(234,172,139)", // Peach
  "rgb(255,255,255)", // White
];

const fontSizes = ["text-xl", "text-2xl", "text-3xl", "text-4xl"];
