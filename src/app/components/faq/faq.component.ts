import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  @ViewChild(MatPaginator,{static:false}) Paginator!:MatPaginator
  preguntas = [
    {
      texto: "¿Los precios de los combustibles son los más confiables?",
      respuesta: "Sí, trabajamos constantemente para ofrecer precios competitivos y confiables.",
      mostrarRespuesta: false
    },
    {
      texto: "¿Las promociones tienen fecha de caducidad?",
      respuesta: "Sí, todas nuestras promociones tienen una fecha de caducidad. Consulta los detalles en cada oferta.",
      mostrarRespuesta: false
    },
    {
      texto: "¿Cómo solicito las promociones en el grifo?",
      respuesta: "Puedes solicitar nuestras promociones en el grifo presentando tu tarjeta de cliente frecuente o al hacer una compra.",
      mostrarRespuesta: false
    },
    {
      texto: "¿Cuál es la calidad de los combustibles que ofrecen?",
      respuesta: "Nos enorgullece ofrecer combustibles de alta calidad que cumplen con las normativas más estrictas de seguridad y medio ambiente.",
      mostrarRespuesta: false
    },
    {
      texto: "¿Cuál es el horario de funcionamiento del grifo?",
      respuesta: "Nuestro grifo está abierto las 24 horas del día, los 7 días de la semana para tu conveniencia.",
      mostrarRespuesta: false
    },
    {
      texto: "¿Aceptan tarjetas de crédito o débito en el grifo?",
      respuesta: "Sí, aceptamos tarjetas de crédito y débito como forma de pago en todas nuestras estaciones de servicio.",
      mostrarRespuesta: false
    }
  ];

  toggleRespuesta(index: number) {
    this.preguntas[index].mostrarRespuesta = !this.preguntas[index].mostrarRespuesta;
  }
}
