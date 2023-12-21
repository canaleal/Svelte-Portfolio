export interface IProject {
	title: string;
	description: string;
	technologies: string[];
	stars?: number;
	downloads?: number;
	awards?: string[];
	githubLink: string;
	projectLink: string;
	packageLink?: string;
	image: string;
	extraImages?: string[];
	year: number;
	madeAt?: string;
}
