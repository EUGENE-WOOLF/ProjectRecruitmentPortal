export interface Document {
  name: string;
  type: string;
  url: string;
  status?: "submitted" | "approved" | "rejected";
  submittedAt?: string;
}

export interface TimelineEvent {
  status: string;
  timestamp: string;
  message: string;
}

export interface Request {
  id: string;
  projectId: string;
  studentId: string;
  status: "pending" | "approved" | "rejected";
  documents: Document[];
  personalStatement: string;
  submittedAt: string;
  updatedAt: string;
  feedback: string | null;
  timeline: TimelineEvent[];
}
