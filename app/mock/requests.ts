import { Request } from "@/types/request";

export const mockRequests: Request[] = [
  {
    id: "r1",
    projectId: "p1",
    studentId: "u1", // John Doe
    status: "pending",
    documents: [
      {
        name: "resume.pdf",
        type: "Resume",
        url: "/documents/resume1.pdf",
        status: "submitted",
      },
      {
        name: "transcript.pdf",
        type: "Academic Transcript",
        url: "/documents/transcript1.pdf",
        status: "submitted",
      },
      {
        name: "sop.pdf",
        type: "Statement of Purpose",
        url: "/documents/sop1.pdf",
        status: "submitted",
      },
    ],
    personalStatement: "I am very interested in AI and medical imaging...",
    submittedAt: "2025-10-10",
    updatedAt: "2025-10-10",
    feedback: null,
    timeline: [
      {
        status: "submitted",
        timestamp: "2025-10-10T10:00:00Z",
        message: "Application submitted",
      },
    ],
  },
  {
    id: "r2",
    projectId: "p2",
    studentId: "u4", // Sarah Chen
    status: "approved",
    documents: [
      {
        name: "resume.pdf",
        type: "Resume",
        url: "/documents/resume2.pdf",
        status: "approved",
      },
      {
        name: "portfolio.pdf",
        type: "Project Portfolio",
        url: "/documents/portfolio2.pdf",
        status: "approved",
      },
    ],
    personalStatement:
      "I have experience in IoT projects and cloud platforms...",
    submittedAt: "2025-09-20",
    updatedAt: "2025-09-25",
    feedback: "Strong technical background and relevant experience.",
    timeline: [
      {
        status: "submitted",
        timestamp: "2025-09-20T14:30:00Z",
        message: "Application submitted",
      },
      {
        status: "reviewed",
        timestamp: "2025-09-23T11:00:00Z",
        message: "Application under review",
      },
      {
        status: "approved",
        timestamp: "2025-09-25T16:45:00Z",
        message: "Application approved",
      },
    ],
  },
];
