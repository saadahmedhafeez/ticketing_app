import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ticket } from '../dummy-data/tickets-data';
import { Ticket } from '../interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  public allTickets: any = new BehaviorSubject<any>(ticket);
  public tickets: Ticket[] = ticket;
  addTicket(data:Ticket){
    let id = this.tickets[this.tickets.length - 1].serial_no + 1
    let newTicket : Ticket = {
      serial_no : id,
      ticket_id : "5cdef6b74d8b5",
      subject : data.subject,
      department : this.getDepartment(data["department"]),
      created_by: "Saad",
      created : "5 years ago",
      status : this.getStatus(data["status"]),
      msg : data['msg']
    }
    this.allTickets.value.push(newTicket);
    this.allTickets.next(this.allTickets.value);
  }
  getDepartment(dep:string){
    if(dep === '1')
      return "Support";
    else
      return "Sales";
  }
  getStatus(sts:string){
    if(sts === '1')
      return "Close";
    else
      return "open";
  }
  editTicket(id:number, data:Ticket){
    console.log('In edit ticket',id);
    for(let i=0; i<this.allTickets.value.length; i++){
      if(this.allTickets.value[i].serial_no == id){
        this.allTickets.value[i].subject = data['subject']
        this.allTickets.value[i].msg = data['msg']
        this.allTickets.value[i].department = this.getDepartment(data['department'])
        this.allTickets.value[i].status = this.getStatus(data['status'])
      }
    }
    this.allTickets.next(this.allTickets.value);
  }
}
