import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ticket } from '../dummy-data/tickets-data';
import { Ticket } from '../interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class ViewTicketService {
  ticket!:Ticket;
  public viewTicketId = new BehaviorSubject<Ticket>(this.ticket)
  public allTickets: any = new BehaviorSubject<any>(ticket);
  constructor() {}

  changeView(id: number) {
    this.allTickets.subscribe((res:Ticket[]) => {
      for(let i=0; i<res.length; i++){
        if(res[i].serial_no==id){
          this.ticket = res[i];
        }
      }
    });
    
  }
  getTicket(){
    return this.ticket;
  }
  getDepartmentId(name:string){
    if(name === 'Support')
      return '1';
    else
      return '2';
  }
  getStatusId(name:string){
    if(name === 'open')
      return '0';
    else
      return '1';
  }
}
