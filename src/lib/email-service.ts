export interface FormNotificationData {
  formType: "contact" | "newsletter";
  name?: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
  source?: string;
  phone?: string;
}

export const sendEmail = async (data: FormNotificationData) => {
  try {
    const response = await fetch("/.netlify/functions/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || "Failed to send message");
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending form notification:", error);
    throw error;
  }
};
