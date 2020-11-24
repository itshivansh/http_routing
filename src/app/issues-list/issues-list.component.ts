import { Component, OnInit } from '@angular/core';
import { Issue } from '../models/Issue';
import { IssueService } from '../services/issue.service';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {

  issues:Issue;
  constructor(private issueservice: IssueService) { }

  // Write logic to get all issues from IssueService
  ngOnInit() {
    this.issueservice.getIssues().subscribe(
      data => {
        this.issues = data;
      });
  }

  // Implement deleteIssue method to delete the issue
  deleteIssue(id:number) {
    this.issueservice.deleteIssue(id).subscribe();
  }

}
