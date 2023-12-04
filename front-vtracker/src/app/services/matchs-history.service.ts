import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Matchs } from '../models/matchs.model';
import { Mmr } from '../models/mmr.model';
import { Agent } from '../models/agent.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MatchsHistoryService {
  constructor(private http: HttpClient) {}
  data: any;

  getMatchs(match: Matchs): any {
    let matchs: Matchs[] = [];

    let agent: Agent = {};
    let mmr: Mmr = {};
    let result = this.http
      .get(
        `https://api.henrikdev.xyz/valorant/v3/matches/${match.region}/${match.name}/${match.tag}?mode=competitive`
      )
      .subscribe((response: any) => {
        if (response.status === 200) {
          matchs = response.data.map((data: any, index: number) => {
            agent = this.getAgentName(match.name, match.tag, data);
            return {
              name: match.name,
              tag: match.tag,
              region: match.region,
              agent: agent.agent,
              mapa: data.metadata.map,
              match_id: data.metadata.matchid,
              wins: agent.wins,
              losses: agent.losses,
              kills: agent.kills,
              deaths: agent.deaths,
              assists: agent.assists,
              mode: data.metadata.mode,
              mmr: 0,
            };
          });
          console.log(matchs);
          matchs = this.getMatchDetails(matchs);
          console.log(matchs);
        } else {
          console.log('Error');
        }
      });
    console.log(matchs);

    // this.linkAgentMatchs(matchs, agent);
    // this.getMatchDetails(matchs);
    console.log(matchs);

    return matchs;
  }
  linkAgentMatchs(matchs: Matchs[], agent: Agent) {
    console.log(agent);

    matchs.forEach((match: Matchs) => {});
  }

  getMatchDetails(matchs: Matchs[]): any {
    let result = this.http
      .get(
        `https://api.henrikdev.xyz/valorant/v1/mmr-history/${matchs[0].region}/${matchs[0].name}/${matchs[0].tag}`
      )
      .subscribe((response: any) => {
        if (response.status === 200) {
          response.data.forEach((data: any) => {
            for (let i = 0; i < matchs.length; i++) {
              if (data.match_id === matchs[i].match_id) {
                matchs[i].mmr = data.mmr_change_to_last_game;
                matchs[i].rank_img = data.images.large;
              }
            }
          });
        } else {
          console.log('Error');
        }
      });
    console.log(matchs);

    return matchs;
  }

  getAgentName(name: string, tag: string, matchs: any): any {
    let agent: Agent = {};
    for (let i = 0; i < matchs.players.all_players.length; i++) {
      if (
        matchs.players.all_players[i].name === name &&
        matchs.players.all_players[i].tag === tag
      ) {
        agent = {
          matchid: matchs.metadata.matchid,
          name: matchs.players.all_players[i].name,
          tag: matchs.players.all_players[i].tag,
          agent: matchs.players.all_players[i].assets.agent.small,
          team: matchs.players.all_players[i].team,
          currenttier: matchs.players.all_players[i].currenttier_patched,
          kills: matchs.players.all_players[i].stats.kills,
          deaths: matchs.players.all_players[i].stats.deaths,
          assists: matchs.players.all_players[i].stats.assists,
          wins:
            matchs.players.all_players[i].team === 'Red'
              ? matchs.teams.red.rounds_won
              : matchs.teams.blue.rounds_won,
          losses:
            matchs.players.all_players[i].team === 'Red'
              ? matchs.teams.red.rounds_lost
              : matchs.teams.blue.rounds_lost,
        };
      } else {
      }
    }
    return agent;
  }
}
