import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalHomeComponent } from '../modal-home/modal-home.component';
import { ChuckService } from '../../services/chuck.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  joke: any;

  constructor(
    private chuckService: ChuckService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.chuckService.getDados().subscribe((jokeData) => {
      this.joke = jokeData;
    });
  }

  openModal(): void {
    const modalRef = this.modalService.open(ModalHomeComponent);
    modalRef.componentInstance.joke = this.joke;
  }
}