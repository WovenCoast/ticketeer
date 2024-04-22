export class Ticket {
  id: string;
  title: string;
  description: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'DONE';

  constructor(
    id: string,
    title: string,
    description: string,
    status: 'OPEN' | 'IN_PROGRESS' | 'DONE',
  ) {
    this.id = id;
    this.update(title, description, status);
  }

  update(title, description, status) {
    if (title) this.title = title;
    if (description) this.description = description;
    if (status) this.status = status;
    return this;
  }
}
