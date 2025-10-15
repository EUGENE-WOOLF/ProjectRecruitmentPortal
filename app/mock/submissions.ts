import { Submission } from "@/types/submission";

export const mockSubmissions: Submission[] = [
  {
    id: "s1",
    projectId: "p2",
    studentId: "u4", // Sarah Chen
    title: "IoT Platform Phase 1",
    description:
      "Implementation of basic microservices architecture and container setup",
    status: "submitted",
    documents: [
      {
        name: "technical_report.pdf",
        type: "Report",
        url: "/submissions/report1.pdf",
        submittedAt: "2025-10-01",
      },
      {
        name: "code_repository.zip",
        type: "Code",
        url: "/submissions/code1.zip",
        submittedAt: "2025-10-01",
      },
    ],
    feedback: {
      comment:
        "Good initial setup. Consider adding more documentation for the APIs.",
      rating: 4,
      reviewedBy: "u3", // Mike Johnson
      reviewedAt: "2025-10-03",
    },
    submittedAt: "2025-10-01",
    updatedAt: "2025-10-03",
  },
];
