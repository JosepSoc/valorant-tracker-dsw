import { Component, Input } from '@angular/core';
import { Matchs } from 'src/app/models/matchs.model';
import { MatchsHistoryService } from 'src/app/services/henrik-valo-api/matchs-history.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  match!: Matchs;
  matchs!: Matchs[];

  constructor(
    private api: MatchsHistoryService,
    private route: ActivatedRoute
  ) {
    this.route.queryParamMap.subscribe((params) => {
      this.match = {
        name: params.get('username') || '',
        tag: params.get('tag') || '',
        region: params.get('region') || '',
      };
    });
  }

  ngOnInit(): void {
    this.matchs =
      localStorage.getItem('matchs') != null
        ? JSON.parse(localStorage.getItem('matchs') || '{}')
        : [];

    if (this.matchs.length === 0) {
      this.api.getMatchs(this.match).subscribe({
        next: (data: Matchs[]) => {
          this.matchs = data;
          localStorage.setItem('matchs', JSON.stringify(this.matchs));
        },
        error: (error: any) => {
          console.error('Error fetching match history:', error);
        },
      });
    }
  }
}
