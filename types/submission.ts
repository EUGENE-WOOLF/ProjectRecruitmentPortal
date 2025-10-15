export interface Feedback {
  comment: string;
  rating: number;
  reviewedBy: string;
  reviewedAt: string;
}

export interface Submission {
  id: string;
  projectId: string;
  studentId: string;
  title: string;
  description: string;
  status: "draft" | "submitted" | "reviewed";
  documents: {
    name: string;
    type: string;
    url: string;
    submittedAt: string;
  }[];
  feedback?: Feedback;
  submittedAt: string;
  updatedAt: string;
}
