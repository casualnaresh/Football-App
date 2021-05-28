import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { League } from 'src/app/model/League';

@Injectable({
  providedIn: 'root'
})
export class FootballDataService {

  apikey = '5371f863f794a9fc73445dfe2d24049dc764ec8d512462cfc3425957ab7a219e';

  constructor(private httpClient: HttpClient) { }

  // Premier League
  getPremierLeague_Standing() {
    return this.httpClient.get<League[]>(`https://apifootball.com/api/?action=get_standings&league_id=62&APIkey=` + this.apikey);
  }

  // La Liga
  getLaLiga_Standing() {
    return this.httpClient.get<League[]>(`https://apifootball.com/api/?action=get_standings&league_id=109&APIkey=` + this.apikey);
  }

  // Bundesliga
  getBundesliga_Standing() {
    return this.httpClient.get<League[]>(`https://apifootball.com/api/?action=get_standings&league_id=117&APIkey=` + this.apikey);
  }

  // Serie A
  getSerieA_Standing() {
    return this.httpClient.get<League[]>(`https://apifootball.com/api/?action=get_standings&league_id=79&APIkey=` + this.apikey);
  }

  // Ligue 1
  getLigue1_Standing() {
    return this.httpClient.get<League[]>(`https://apifootball.com/api/?action=get_standings&league_id=127&APIkey=` + this.apikey);
  }
}
