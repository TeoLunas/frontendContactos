import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, NativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../services/http-service';
import { IContactosRespuesta } from '../../interfaces/IContactosRespuesta';
import { PhoneFormatPipe } from '../../phone-format.pipe';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [MatDatepickerModule
    , MatFormFieldModule
    , MatSelectModule
    , FormsModule
    , ReactiveFormsModule
    , MatButtonModule
    , MatInputModule
    , MatPaginator
    , MatPaginatorModule
    , MatTableModule
    , MatIconModule
    , CommonModule
    , PhoneFormatPipe
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit, AfterViewInit {

  listaContactos: IContactosRespuesta[] = [];
  dataSourceContactos: MatTableDataSource<IContactosRespuesta> = new MatTableDataSource<IContactosRespuesta>([]);
  displayedColumns: string[] = ['Id', 'Nombre', 'Apellido', 'Telefono', 'Correo', 'Pais'];

  @ViewChild('paginatorContacts') paginatorContacts!: MatPaginator;

  pageSize = 10;
  pageIndex = 0;
  totalRecords = 0

  constructor(private httpService: HttpService,) { }

  ngAfterViewInit(): void {
    this.getAllContacts();
  }

  ngOnInit(): void { }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getAllContacts(this.pageIndex + 1, this.pageSize);
  }

  getAllContacts(page: number = 1, size: number = 10) {
    {
      this.httpService.getContactos(page, size).subscribe(
        {
          next: (data) => {
            if (data.resultado.totalRecords !== 0) {
              console.log(data);
              this.listaContactos = data.resultado.data;
              this.dataSourceContactos = new MatTableDataSource<IContactosRespuesta>(this.listaContactos);
              this.dataSourceContactos.paginator = this.paginatorContacts;
              console.log(this.paginatorContacts);
              this.totalRecords = data.resultado.totalRecords;
            }
          },
          error: (error) => {
            console.log(error);
          }
        }
      );
    }

  }
}
