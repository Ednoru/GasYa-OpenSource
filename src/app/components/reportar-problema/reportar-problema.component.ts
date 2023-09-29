import { Component} from '@angular/core';

@Component({
  selector: 'app-reportar-problema',
  templateUrl: './reportar-problema.component.html',
  styleUrls: ['./reportar-problema.component.css']
})
export class ReportarProblemaComponent {

  showPopup = false;

  showAlert() {
    this.showPopup = !this.showPopup;
  }

  closeAlert() {
    this.showPopup = false;
  }
}
