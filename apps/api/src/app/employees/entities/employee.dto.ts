export class EmployeeDto {
  readonly first_name: string;
  readonly last_name: string;
  readonly phone: string;
  readonly birth_date: Date;
  readonly office: string;
  readonly thumb: string;
  readonly photo: string;
  readonly tags: Array<Record<string, unknown>>;
}
