import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AgentsApiService } from 'src/app/services/agents-api.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-abm-form',
  templateUrl: './abm-form.component.html',
  styleUrls: ['./abm-form.component.scss']
})
export class AbmFormComponent {
  
  constructor(public dialog: MatDialog, private router: ActivatedRoute, private router2: Router, private api: AgentsApiService) {}

  isUpdate = false;

  name = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.router.queryParamMap.subscribe(params => {
      this.name.setValue(params.get('name'));
      this.description.setValue(params.get('description'));
    });
  }

  isUpdateChecker(): boolean {
    this.router.queryParamMap.subscribe(params => {
      if(params.get('id')===null){
        this.isUpdate = false;
      } else {
        this.isUpdate = true;
      }
    });
    return this.isUpdate;
  }
  
  previousValues() {
    this.router.queryParamMap.subscribe(params => {
      this.name.setValue(params.get('name'));
      this.description.setValue(params.get('description'));
    });
  }

  getFormValues(){
    return {
      _id: this.router.snapshot.queryParamMap.get('id') || '',
      name: this.name.value || '',
      description: this.description.value || ''
    }
  }

  updateAgent(): void{
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const updatedAgent = this.getFormValues();
        this.api.updateAgent(updatedAgent).subscribe({
          next: (data: any) => {
            console.log(data);
            
          },
          error: (error: any) => {
            console.error('Error updating agent:', error);
          }
        });
        this.router2.navigate(['/agent']);
      }
    });
  }

  createAgent(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const createdAgent = this.getFormValues();
        this.api.createAgent(createdAgent).subscribe({
          next: (data: any) => {
            console.log(data);
            
          },
          error: (error: any) => {
            console.error('Error updating agent:', error);
          }
        });
        this.router2.navigate(['/agent']);
      }
    });
  }

}

