import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  routeToPage() {
    this.route.navigate(['/trendythreads/blog-page'])
  }
}
