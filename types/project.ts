export type ProjectItem = {
  readonly id?: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly details: string[];
  readonly status?: string;
  readonly tech: string[];
  readonly githubUrl?: string;
  readonly liveUrl?: string;
};