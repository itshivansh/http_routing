import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class IssueService {

  constructor(private http : HttpClient) { }

  // Implement addIssue method using HttpClient for a saving a Issue details
  addIssue(index): Observable<any> {
    return this.http.post<any>('http://localhost:3000/issues',index);
  }

  getIssues(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/issues");
  }

  // Implement deleteIssue method to delete a issue by id
  deleteIssue(id: any): Observable<any> {
    return this.http.delete<any>("http://localhost:3000/issues/"+id);
  }
}
