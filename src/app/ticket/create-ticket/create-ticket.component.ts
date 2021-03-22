
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { TicketsService } from 'src/app/services/tickets.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  myForm: any;
  ticket;
  constructor(ticketService: TicketsService, private dialog: MatDialog) { 
    this.ticket = ticketService;
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      msg: new FormControl(''),
      subject: new FormControl(''),
      department: new FormControl(''),
      status: new FormControl('')
    });
  }
  formProcess(){
    this.ticket.addTicket(this.myForm.value);
  }

  public closeModelBox(): void {
    this.dialog.closeAll();
  }
}
