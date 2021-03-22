import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Ticket } from 'src/app/interfaces/ticket';
import { TicketsService } from 'src/app/services/tickets.service';
import { ViewTicketService } from 'src/app/services/view-ticket.service';

@Component({
  selector: 'edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {
  myForm: any;
  ticket;
  ticketEdit! : Ticket;
  private subscription: Subscription = new Subscription;
  constructor(ticketService: TicketsService, private dialog: MatDialog, private viewticket: ViewTicketService) { 
    this.ticket = ticketService;
  }

  ngOnInit() {
    this.subscription = this.viewticket.viewTicketId.subscribe(res =>{
      this.ticketEdit = this.viewticket.getTicket();
    })
    this.myForm = new FormGroup({
      msg: new FormControl(this.ticketEdit['msg']),
      subject: new FormControl(this.ticketEdit['subject']),
      department: new FormControl(this.viewticket.getDepartmentId(this.ticketEdit['department'])),
      status: new FormControl(this.viewticket.getStatusId(this.ticketEdit['status']))
    });
  }
  formProcess(){
    this.ticket.editTicket(this.ticketEdit['serial_no'], this.myForm.value);
  }
  public closeModelBox(): void {
    this.dialog.closeAll();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
