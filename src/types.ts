export interface ILink {
  name: string;
  onClick: () => void;
}

export interface ICourse {
  id: number;
  name: string;
  description?: string;
  instructor: string;
  rating: number;
  tag?: string;
  image?: string;
}

export interface IReview {
  id: number;
  avatar: string;
  fullName: string;
  jobTitle: string;
  text: string;
  rating: number;
}
