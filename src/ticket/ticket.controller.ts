import {
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { TicketService } from './ticket.service';

@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  createTicket(createTicketDto) {
    try {
      return this.ticketService.createTicket(createTicketDto);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  getTickets() {
    return this.ticketService.getTickets();
  }

  @Get('/:id')
  getTicketById(id) {
    const ticket = this.ticketService.getTicketById(id);
    if (!ticket) {
      throw new HttpException('Ticket not found', HttpStatus.NOT_FOUND);
    }
    return ticket;
  }

  @Delete('/:id')
  deleteTicket(id) {
    return this.ticketService.deleteTicket(id);
  }

  @Post('/:id')
  updateTicket(id, updateTicketDto) {
    try {
      return this.ticketService.updateTicket(id, updateTicketDto);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
}
