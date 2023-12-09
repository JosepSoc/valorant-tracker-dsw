import { Component, Input } from '@angular/core';
import { Matchs } from 'src/app/models/matchs.model';
//import { UsersApiService } from 'src/app/services/users-api.service.js';

@Component({
  selector: 'app-profile-template',
  templateUrl: './profile-template.component.html',
  styleUrls: ['./profile-template.component.scss'],
})

//? crear en el constructor la variable que se va a usar para traer los datos de la DB
export class ProfileTemplateComponent {
  constructor() { }

  @Input()
  matchs!: Matchs[];
  user: any;
  
  //userId!: string;

  //? Sacar esto de la DB en base a lo de abajo.
  crosshairCode = '0;P;c;8;u;FF0000FF;b;1';
  hasCrosshair = true;

  ngOnInit(): void {
    
    //? En la implementacion final, se debe crear un metodo que busque por username, tag y region para devolver el ObjectID
    // this.api.getUser().subscribe({
    //   next: (data: any) => {
    //     this.user = data;
    //   },
    //   error: (error: any) => {
    //     console.error('Error fetching user:', error);
    //   }
    // });

    // if (this.user.crosshair == null || this.user == undefined){
    //   this.hasCrosshair = false;
    // }
    // else { 
    //   this.crosshairCode = this.user.crosshair;
    //   this.hasCrosshair = true;
    // }
    //}
 }
}



