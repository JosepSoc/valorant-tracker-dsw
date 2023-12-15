import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgentsApiService } from 'src/app/services/express-Api/agents-api.service';
import { AgentCrudService } from 'src/app/services/frontend-services/agents-crud.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { AgentApi } from 'src/app/models/agent-api.model';

@Component({
  selector: 'app-abm-form',
  templateUrl: './abm-form.component.html',
  styleUrls: ['./abm-form.component.scss'],
})
export class AbmFormComponent {
  constructor(
    public dialog: MatDialog,
    private router2: Router,
    private api: AgentsApiService,
    private agentCrudService: AgentCrudService
  ) {}

  isUpdate = false;
  agent?: AgentApi | undefined;

  name = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.agent = this.agentCrudService.getAgent();
    this.name.setValue(this.agent?.name || null);
    this.description.setValue(this.agent?.description || null);
  }

  isUpdateChecker(): boolean {
    if (this.agentCrudService.getAgent() === undefined) {
      this.isUpdate = false;
    } else {
      this.isUpdate = true;
    }
    return this.isUpdate;
  }

  previousValues() {
    this.name.setValue(this.agent?.name || null);
    this.description.setValue(this.agent?.description || null);
  }

  getFormValues() {
    return {
      _id: this.agent?._id || '',
      name: this.name.value || '',
      description: this.description.value || '',
    };
  }

  updateAgent(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const updatedAgent = this.getFormValues();
        this.api.updateAgent(updatedAgent).subscribe({
          next: (data: any) => {
            console.log(data);
          },
          error: (error: any) => {
            console.error('Error updating agent:', error);
          },
        });
        this.agentCrudService.setAgent(undefined);
        this.router2.navigate(['/agent']);
      }
    });
  }

  createAgent(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const createdAgent = this.getFormValues();
        this.api.createAgent(createdAgent).subscribe({
          next: (data: any) => {
            console.log(data);
          },
          error: (error: any) => {
            console.error('Error updating agent:', error);
          },
        });
        this.agentCrudService.setAgent(undefined);
        this.router2.navigate(['/agent']);
      }
    });
  }
}
