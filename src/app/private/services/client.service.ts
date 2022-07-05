import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employe} from "../../models/employe";
import {Client} from "../../models/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private serviceUrlClient = "http://localhost:8080/api/client/";

  private serviceUrlGetAll = this.serviceUrlClient + "all/";

  constructor(private httpClient: HttpClient) { }

  public getClient(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.serviceUrlGetAll);
  }

  public addClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(this.serviceUrlClient, client);
  }

  public updateClient(client: Client): Observable<Client> {
    return this.httpClient.put<Client>(this.serviceUrlClient, client);
  }

  public deleteClient(clientID: number): Observable<void> {
    return this.httpClient.delete<void>(this.serviceUrlClient + `/${clientID}`);
  }

}
