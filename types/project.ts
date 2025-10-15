export interface Project {
  id: string;
  title: string;
  description: string;
  professorId?: string;
  mentorId?: string;
  department: string;
  requirements: string[];
  tags: string[];
  duration: string;
  status: "open" | "closed" | "completed";
  maxStudents: number;
  currentStudents: number;
  deadline: string;
  createdAt: string;
  updatedAt: string;
  documents_required: string[];
}
