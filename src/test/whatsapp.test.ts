import { describe, expect, it } from "vitest";
import { buildEnquiryMessage, buildWhatsAppLink } from "@/lib/whatsapp";

const e = {
  name: "Asha",
  phone: "9999999999",
  business: "",
  projectType: "Salon website",
  budget: "₹25k – ₹50k",
  timeline: "Within a month",
  goals: ["Online booking"],
  message: "",
};

describe("whatsapp enquiry", () => {
  it("starts with the greeting", () => {
    expect(buildEnquiryMessage(e).startsWith("Hey, I want more details.")).toBe(true);
  });
  it("includes chosen project details", () => {
    expect(buildEnquiryMessage(e)).toContain("Project: Salon website");
  });
  it("sends to 8829931797", () => {
    expect(buildWhatsAppLink(e).startsWith("https://wa.me/918829931797?text=")).toBe(true);
  });
});
