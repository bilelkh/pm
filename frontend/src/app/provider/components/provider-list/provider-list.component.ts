import { Component, OnInit } from '@angular/core';
import { ProdiverService } from '../../services/prodiver.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // import router from angular router

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css'],
})
export class ProviderListComponent implements OnInit {
  constructor(
    private prodiverService: ProdiverService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  searchForm!: FormGroup;

  prodivers = [];
  totalItems = 0;
  loading = true;
  pageIndex: number = 1;
  pageSize: number = 5;

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      name: [null],
      email: [null],
      address: [null],
      phoneNumber: [null],
    });
    this.getAllProdivers();
  }

  getAllProdivers() {
    this.loading = true;
    const query = Object.keys(this.searchForm.value)
      .map((key) => key + '=' + this.searchForm.value[key])
      .join('&');

    this.prodiverService
      .readAll(this.pageIndex, this.pageSize, query)
      .subscribe(
        (res) => {
          this.prodivers = res.data;
          this.totalItems = res.totalItems;
          this.loading = false;
        },
        (error) => {
          this.loading = false;
        }
      );
  }

  resetForm() {
    this.searchForm.reset();
    this.pageIndex = 1;
    this.getAllProdivers();
  }

  nagivateToDetails(id) {
    this.router.navigateByUrl('provider/provider-details/' + id); // navigate to other page
  }
}
