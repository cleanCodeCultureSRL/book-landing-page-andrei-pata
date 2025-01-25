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
      packagePrice: 60, // Adjust prices as needed
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
