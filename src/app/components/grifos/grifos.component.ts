import {Component, OnInit} from "@angular/core";
import {
  Fuels,
  GasStation,
  GrifosPromosService,
  Promotion
} from "../../services/GrifosPromosService/grifos-promos.service";

@Component({
  selector: 'app-grifos',
  templateUrl: './grifos.component.html',
  styleUrls: ['./grifos.component.css']
})

export class GrifosComponent implements OnInit{
  botonActivo: string | null = null;
  grifos: GasStation[] = [];
  promociones: Promotion[] = [];
  combustibles: Fuels[] = [];

  constructor(private grifosService: GrifosPromosService) {}

  ngOnInit() {
    this.loadGrifos();
    this.loadPromociones();
  }

  async loadGrifos() {
    try {
      this.grifosService.getGrifos().subscribe((data: GasStation[]) => {
        this.grifos = data;
      });
    }catch (error) {
      console.log(error);
    }
  }

  async loadPromociones(): Promise<void> {
    try {
      this.grifosService.getPromociones().subscribe((data: Promotion[]) => {
        this.promociones = data;
      });
    } catch (error) {
      console.error(error);
    }
  }


  //observacion
  async mostrar(nombreGrifo: string, grifoId: number): Promise<void> {
    try {
      this.botonActivo = nombreGrifo;

      // Llamada a la nueva función del servicio para obtener los combustibles según el grifo seleccionado
      this.grifosService.getCombustiblesByGrifoId(grifoId).subscribe((data: Fuels[]) => {
        const startId = (grifoId - 1) * 2 + 1;
        const endId = startId + 1;
        this.combustibles = data.filter(combustible => combustible.id >= startId && combustible.id <= endId);
      });
    } catch (error) {
      console.error(error);
    }
  }
}
