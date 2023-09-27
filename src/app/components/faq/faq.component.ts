import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
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
      texto: "¿Cada cuánto tiempo actualizan los tarifarios de los combustibles?",
      respuesta: "Actualizamos nuestros tarifarios de combustibles de forma regular, generalmente cada semana. Consulta nuestras tarifas más recientes en línea.",
      mostrarRespuesta: false
    }
  ];

  toggleRespuesta(index: number) {
    this.preguntas[index].mostrarRespuesta = !this.preguntas[index].mostrarRespuesta;
  }
}
