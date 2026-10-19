export const WHATSAPP_NUMBER = "918829931797";

export type Enquiry = {
  name: string;
  phone: string;
  business: string;
  projectType: string;
  budget: string;
  timeline: string;
  goals: string[];
  message: string;
};

export function buildEnquiryMessage(e: Enquiry): string {
  const lines = [
    "Hey, I want more details.",
    "",
    `Name: ${e.name}`,
    `Phone: ${e.phone}`,
    e.business && `Business: ${e.business}`,
    `Project: ${e.projectType}`,
    `Budget: ${e.budget}`,
    `Timeline: ${e.timeline}`,
    e.goals.length > 0 && `Needs: ${e.goals.join(", ")}`,
    e.message && `Details: ${e.message}`,
  ].filter(Boolean);
  return lines.join("\n");
}

export function buildWhatsAppLink(e: Enquiry): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildEnquiryMessage(e))}`;
}
