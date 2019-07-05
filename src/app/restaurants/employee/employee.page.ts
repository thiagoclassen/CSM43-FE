import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '../../user/credentials.service';
import { RestaurantsService } from '../restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {

  private users: any[];
  private restaurantId: any;

  constructor(
    private userService: CredentialsService,
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantId = this.route.snapshot.paramMap.get('restaurantId');
    this.userService.listUsers().subscribe(response => this.users = response);
  }

  hireEmployee(id) {
    let list = {
      employees : []
    };
    list.employees.push(id);
    this.restaurantsService.hireEmployee(this.restaurantId, list).subscribe();
  }

}
