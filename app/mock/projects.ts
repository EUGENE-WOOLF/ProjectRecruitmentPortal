import { Project } from "@/types/project";

export const mockProjects: Project[] = [
  {
    id: "p1",
    title: "AI-Powered Medical Image Analysis",
    description:
      "Research project focused on developing deep learning models for medical image analysis, specifically targeting early disease detection in X-ray images.",
    professorId: "u2", // Dr. Jane Smith
    department: "Computer Science",
    requirements: [
      "Strong background in Python and Deep Learning",
      "Experience with PyTorch or TensorFlow",
      "Knowledge of Computer Vision concepts",
    ],
    tags: ["AI", "Deep Learning", "Computer Vision", "Healthcare"],
    duration: "6 months",
    status: "open",
    maxStudents: 2,
    currentStudents: 0,
    deadline: "2025-12-31",
    createdAt: "2025-10-01",
    updatedAt: "2025-10-01",
    documents_required: [
      "Resume",
      "Academic Transcript",
      "Statement of Purpose",
    ],
  },
  {
    id: "p2",
    title: "Cloud-Native IoT Platform",
    description:
      "Industry collaboration project to develop a scalable IoT platform using cloud-native technologies and microservices architecture.",
    mentorId: "u3", // Mike Johnson
    department: "Computer Science",
    requirements: [
      "Experience with cloud platforms (AWS/Azure/GCP)",
      "Knowledge of containerization and Kubernetes",
      "Understanding of IoT protocols",
    ],
    tags: ["Cloud", "IoT", "Microservices", "Docker"],
    duration: "4 months",
    status: "open",
    maxStudents: 3,
    currentStudents: 1,
    deadline: "2025-11-30",
    createdAt: "2025-09-15",
    updatedAt: "2025-09-15",
    documents_required: ["Resume", "Project Portfolio", "Technical Assessment"],
  },
  {
    id: "p3",
    title: "Smart Grid Energy Management",
    description:
      "Research on optimizing energy distribution in smart grids using machine learning and predictive analytics.",
    professorId: "u2", // Dr. Jane Smith
    department: "Electrical Engineering",
    requirements: [
      "Strong mathematics background",
      "Experience with data analysis",
      "Knowledge of power systems",
    ],
    tags: ["Machine Learning", "Smart Grid", "Energy", "Analytics"],
    duration: "8 months",
    status: "open",
    maxStudents: 2,
    currentStudents: 0,
    deadline: "2026-01-31",
    createdAt: "2025-10-05",
    updatedAt: "2025-10-05",
    documents_required: ["Resume", "Research Proposal", "Academic Transcript"],
  },
];
