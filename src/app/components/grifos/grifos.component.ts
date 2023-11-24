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

  async loadCombustiblesPorGrifo(grifoId: number): Promise<void> {
    try {
      this.grifosService.getCombustiblesPorGrifo(grifoId).subscribe((data: Fuels[]) => {
        this.combustibles = data;
      });
    } catch (error) {
      console.error(error);
    }
  }

  async mostrar(nombreGrifo: string, grifoId: number): Promise<void> {
    try {
      await this.loadCombustiblesPorGrifo(grifoId);
      this.botonActivo = nombreGrifo;
    } catch (error) {
      console.error(error);
    }
  }
}
