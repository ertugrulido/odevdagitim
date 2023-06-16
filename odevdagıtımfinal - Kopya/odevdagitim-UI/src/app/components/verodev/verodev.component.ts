
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';


import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Ders } from 'src/app/models/Ders';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { DersDialogComponent } from '../dialogs/ders-dialog/ders-dialog.component';
 
import { Ogrenci } from 'src/app/models/Ogrenci';
import { FotoDialogComponent } from './../dialogs/foto-dialog/foto-dialog.component';


import { OgrenciDialogComponent } from '../dialogs/ogrenci-dialog/ogrenci-dialog.component';
import { MatButtonModule } from '@angular/material/button';





@Component({
  selector: 'app-verodev',
  templateUrl: './verodev.component.html',
  styleUrls: ['./verodev.component.css'],
  
  
  
 
})
export class VerodevComponent implements OnInit {
  secilenler: any[]
  secilenlerdersler: any[]
  dersler: Ders[];
  kayitlar: Ogrenci[];
  dataSource: any;
  displayedColumns = ['dersKodu', 'dersAdi', 'dersKredi', 'DersOgrSayisi', 'islemler'];
  confirmDialogRef: MatDialogRef<ConfirmDialogComponent>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dialogRef: MatDialogRef<DersDialogComponent>;
  imports: [MatListModule]
selectedOptions: any;

  constructor(
    public dialog: MatDialog,
    public apiServis: ApiService,
    public matDialog: MatDialog,
    public alert: AlertService
  ) { }

  ngOnInit() {
    this.KayitGetir();
    this.KayitGetirOgr();
  }
  KayitGetir() {
    this.apiServis.DersListe().subscribe(d => {
      this.dersler = d;
      this.dataSource = new MatTableDataSource(d);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  
  odevGetir(s:any){
    this.secilenler = s;
    console.log(s);
     
  }
  ogrGetir(s:any){
    this.secilenlerdersler = s;
    console.log(s);
     
  }


  KayitGetirOgr() {
    this.apiServis.OgrenciListe().subscribe(d => {
      this.kayitlar = d;
      this.dataSource = new MatTableDataSource(d);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  openDialog() {
    this.dialog.open(BilgiDialogComponen);
  }
}

@Component({
  selector: 'app-bilgi-dialog',
  templateUrl: 'bilgi-dialog.component.html',
  
  
  
})

export class BilgiDialogComponen {}
 


  
