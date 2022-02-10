export interface Employee {
  birth_date: Date;
  first_name: string;
  last_name: string;
  office: string;
  phone: string;
  photo: string;
  tags: Array<Record<string, unknown>>;
  thumb: string;
  _id?: string
}

export interface Office {
  location: string
}

export interface Tag {
  department: string
}
