import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../models/Vendor';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent {
  vendors: Vendor[] = [];

  constructor(private vendorService: VendorService) {}

  ngOnInit(): void {
    this.vendorService.getVendors().subscribe((vendors) => this.vendors = vendors);
  }
}
