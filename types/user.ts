export interface User {
  id: string;
  name: string;
  email: string;
  role: "student" | "professor" | "mentor";
  department?: string;
  year?: number;
  skills?: string[];
  researchAreas?: string[];
  company?: string;
  expertise?: string[];
  bio: string;
  profileImage?: string;
}
