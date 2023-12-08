import { Component } from '@angular/core';
import { Matchs } from 'src/app/models/matchs.model';
import { MatchsHistoryService } from 'src/app/services/matchs-history.service';

@Component({
  selector: 'app-profile-template',
  templateUrl: './profile-template.component.html',
  styleUrls: ['./profile-template.component.scss'],
})
export class ProfileTemplateComponent {
  constructor(private api: MatchsHistoryService) {}
  matchs: Matchs[] = [];
  name: string = '?';
  tag: string = '?';
  playerAgent?: string = '?';
  playerCard?: string = '?';
  playerMmrIcon?: string = '?';

  ngOnInit(): void {
    const match: Matchs = { name: 'D0V3S', tag: 'MOCHA', region: 'na' };

    this.api.getMatchs(match).subscribe(
      (data: Matchs[]) => {
        this.matchs = data;
        this.name = this.matchs[0].name;
        this.tag = this.matchs[0].tag;
        this.playerAgent = this.matchs[0].agent;
        this.playerCard = this.matchs[0].card;
        this.playerMmrIcon = this.matchs[0].rank_img;
      },
      (error: any) => {
        console.error('Error fetching match history:', error);
      }
    );
  }

  //sacar esto de la bd
  crosshairCode = '0;P;c;8;u;FF0000FF;b;1';
  hasCrosshair = true;
}
