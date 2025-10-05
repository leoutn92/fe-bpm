import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-materia-prima-fresca',
  templateUrl: './materia-prima-fresca.html',
  styleUrls: ['./materia-prima-fresca.css'],
  imports: [
    FormsModule,
  ],
})
export class MateriaPrimaFrescaComponent {
  boxTare: number | undefined;
  rawMaterialTemp: number | undefined;
  smellConform: boolean = false;
  colorConform: boolean = false;
  sizeConform: boolean = false;
  badConditionWeight: number | undefined;
  wasteWeight: number | undefined;
  batchNumber: string | undefined;
  product: string = 'Cebolla';
  renspaNumber: string | undefined;
  supplier: string | undefined;
  grossWeight: number | undefined;

  addBoxTare() {
    // Logic to add another box tare
  }

  addBadConditionWeight() {
    // Logic to add another bad condition weight
  }

  addWasteWeight() {
    // Logic to add another waste weight
  }

  addGrossWeight() {
    // Logic to add another gross weight
  }

  saveRecord() {
    // Logic to save the record
  }

  backToMenu() {
    // Logic to go back to the menu
  }
}