import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Status } from "../model/status.model";

@Injectable()
export class StatusService {

  private readonly API_URL = 'http://localhost:8082/status/';

  dataChange: BehaviorSubject<Status[]> = new BehaviorSubject<Status[]>([]);


  constructor(private httpClient: HttpClient) {

  }
  public getAllStatus(): Observable<Status[]> {
    this.httpClient.get<Status[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
  }

  public addStatus(status:Status): void {
    this.httpClient.post(this.API_URL, status).subscribe();
  }

  public updateStatus(status: Status): void {
    this.httpClient.put(this.API_URL + status.id, status).subscribe();
  }

  public deleteStatus(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
