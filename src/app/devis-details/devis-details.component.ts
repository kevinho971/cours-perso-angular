import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-devis-details',
  templateUrl: './devis-details.component.html',
  styleUrls: ['./devis-details.component.css']
})
export class DevisDetailsComponent implements OnInit {
  devisId;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.devisId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
