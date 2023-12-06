interface ISubProject {
	name: string;
	description?: string;
	link: string;
}

export interface IExperience {
	company: string;
	position: string;
	description: string;
	start: string;
	end: string;
	technologies: string[];
	experienceLink: string;
	subProjectLinks?: ISubProject[];
}
