import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormControl, FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, NativeDateAdapter } from '@angular/material/core';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../services/http-service';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [MatDatepickerModule
    ,MatFormFieldModule
    ,MatSelectModule
    ,FormsModule
    ,ReactiveFormsModule
    ,MatButtonModule
    ,MatInputModule
    ,MatPaginator
    ,MatPaginatorModule
    ,MatTableModule
    ,MatIconModule
    ,CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit, AfterViewInit {

  constructor(private httpService: HttpService) { }

  ngAfterViewInit(): void {
    this.getAllContacts();
  }

  ngOnInit(): void {}

  getAllContacts(){
    this.httpService.getContactos(1, 5).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
