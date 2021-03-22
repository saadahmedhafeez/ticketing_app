import { Component, OnInit } from '@angular/core';
import { Ticket } from '../interfaces/ticket';
import { User } from '../interfaces/user';
import { TicketsService } from '../services/tickets.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormField} from '@angular/material/form-field';
import { CreateTicketComponent } from '../ticket/create-ticket/create-ticket.component';
import { ViewTicketComponent } from '../ticket/view-ticket/view-ticket.component';
import { ViewTicketService } from '../services/view-ticket.service';
import { EditTicketComponent } from '../ticket/edit-ticket/edit-ticket.component';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  public user: User[] = [];
  public tickets: Ticket[] = [];
 
  constructor(private viewticket: ViewTicketService, private ticketService: TicketsService, private dialog: MatDialog) { }

  public ngOnInit(): void {
    this.ticketService.allTickets.subscribe((res: Ticket[])=>{
      this.tickets = res
    });
  }
  public getColor(id:number) : string {
    return this.tickets[id].status === 'open' ? '#45cc2a' : '#f55656'
  }

  public openCreateTicket(): void {
    this.dialog.open(CreateTicketComponent)
  }

  public openViewTicket(id:number) : void{
    this.viewticket.changeView(id);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "60%";
    this.dialog.open(ViewTicketComponent,dialogConfig)
  }
  public openEditTicket(id:number) : void{
    this.viewticket.changeView(id);
    this.dialog.open(EditTicketComponent)
  }
}
