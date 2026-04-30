import type { Metadata } from "next";
import CaseStudyContent from "./CaseStudyContent";

export const metadata: Metadata = {
  title: "Ciylo: Case Studies",
  description:
    "Ciylo Pvt. Ltd. is a software company specializing in turning innovative ideas into powerful digital solutions. We help businesses streamline operations and solve complex challenges with custom-built software and AI-powered solutions. Our tailored approach ensures that each project, from engaging web and mobile apps to robust enterprise systems, is designed to help organizations scale with confidence",
};

export default function CaseStudyPage() {
  return <CaseStudyContent />;
}
