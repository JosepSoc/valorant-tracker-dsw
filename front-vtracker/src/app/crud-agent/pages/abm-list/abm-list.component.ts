import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AgentCrudService } from 'src/app/services/frontend-services/agents-crud.service';
import { AgentsApiService } from 'src/app/services/express-Api/agents-api.service';
import { AgentApi } from 'src/app/models/agent-api.model';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-abm-list',
  templateUrl: './abm-list.component.html',
  styleUrls: ['./abm-list.component.scss'],
})
export class AbmListComponent {
  constructor(
    private api: AgentsApiService,
    public dialog: MatDialog,
    private router: Router,
    private agentCrudService: AgentCrudService
  ) {}
  agents: AgentApi[] = [];

  ngOnInit(): void {
    this.api.getAgents().subscribe({
      next: (data: AgentApi[]) => {
        this.agents = data;
      },
      error: (error: any) => {
        console.error('Error fetching agents:', error);
      },
    });
  }

  deleteAgent(pos: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.api.deleteAgent(this.agents[pos]._id).subscribe({
          next: (data: any) => {
            this.agents.splice(pos, 1);
          },
          error: (error: any) => {
            console.error('Error deleting agent:', error);
          },
        });
      }
    });
  }

  updateAgent(pos: number): void {
    this.agentCrudService.setAgent(this.agents[pos]);
    this.router.navigate(['/agent/form']);
  }

  createAgent(): void {
    this.router.navigate(['/agent/form']);
  }
}