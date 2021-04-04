import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdiverService } from '../../services/prodiver.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.css'],
})
export class ProviderDetailsComponent implements OnInit {
  provider;
  constructor(
    private route: ActivatedRoute,
    private prodiverService: ProdiverService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.prodiverService.read(id).subscribe(
      (data) => {
        this.provider = data;
      },
      (error) => {
        console.log('===error===', error);
      }
    );
  }

  historyBack() {
    this.location.back();
  }
}
