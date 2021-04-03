import { Component, OnInit } from '@angular/core';
import { ProdiverService } from '../../services/prodiver.service';
@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css'],
})
export class ProviderListComponent implements OnInit {
  constructor(private prodiverService: ProdiverService) {}
  prodivers = [];
  ngOnInit(): void {
    this.getAllProdivers();
  }

  getAllProdivers() {
    this.prodiverService.readAll().subscribe(
      (res) => {
        this.prodivers = res.data;
        console.log('===this.prodivers===', this.prodivers);
      },
      (error) => {
        console.log('===error===', error);
      }
    );
  }
}
