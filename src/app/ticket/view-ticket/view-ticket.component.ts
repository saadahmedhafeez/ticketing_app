import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ticket } from 'src/app/interfaces/ticket';
import { ViewTicketService } from 'src/app/services/view-ticket.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {
  ticket!: Ticket;
  myForm: any;
  msgs = new Array;
  msgTime = new Date();
  userName = localStorage.getItem('userName')
  private subscription: Subscription = new Subscription;
  constructor(private viewticket: ViewTicketService) { }

  ngOnInit(): void {
    this.subscription = this.viewticket.viewTicketId.subscribe(res =>{
      this.ticket = this.viewticket.getTicket();
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  changeMsg(msg1:string){
    console.log(msg1);
    this.msgs.push(msg1)
  }
}
