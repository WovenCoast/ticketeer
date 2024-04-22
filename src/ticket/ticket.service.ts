import { Body, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Ticket } from './ticket.model';

@Injectable()
export class TicketService {
  tickets: Ticket[];

  constructor() {
    this.tickets = [];
  }
  createTicket(@Body() createTicketDto) {
    if (!createTicketDto.title) {
      throw new Error('Title is required');
    }
    if (!createTicketDto.description) {
      throw new Error('Description is required');
    }
    const ticket = new Ticket(
      uuid(),
      createTicketDto.title,
      createTicketDto.description,
      'OPEN',
    );
    this.tickets.push(ticket);
    return ticket;
  }

  getTickets() {
    return this.tickets;
  }

  getTicketById(id) {
    return this.tickets.find((ticket) => ticket.id === id);
  }

  deleteTicket(id) {
    const deletedTicket = this.getTicketById(id);
    this.tickets = this.tickets.filter((ticket) => ticket.id !== id);
    return deletedTicket;
  }

  updateTicket(id, @Body() updateTicketDto) {
    const { title, description, status } = updateTicketDto;
    const ticket = this.getTicketById(id);
    if (ticket) {
      ticket.update(title, description, status);
    }
    return ticket;
  }
}
