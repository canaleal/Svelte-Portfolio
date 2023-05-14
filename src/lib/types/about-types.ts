export interface IWorkExperienceType {
    company: string;
    role: string;
    imageUrl: string;
}

export type EducationLevel = "Certificate" | "Diploma" | "Bachelor's Degree" | "Master's Degree" | "Doctorate";

export interface IEducationType {
    school: string;
    program: string;
    educationLevel: EducationLevel;
    imageUrl: string;
}