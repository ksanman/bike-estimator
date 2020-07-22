import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../category';
import { Part } from '../part';
import { PartService } from '../part.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-part-picker',
  templateUrl: './part-picker.component.html',
  styleUrls: ['./part-picker.component.css']
})
export class PartPickerComponent implements OnInit {
  @Input() category: Category;
  @Input() modal: any;
  @Output() partSelected: EventEmitter<Part> = new EventEmitter<Part>();

  parts: Part[];

  constructor(
    private partService: PartService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
     this.partService.parts$.subscribe((parts: Part[]) => {
       this.parts = parts.filter((p: Part) => p.category.id === this.category.id).map(p => Object.assign({}, p));
    });
  }

  onPartSelected(part: Part): void {
    this.partSelected.emit(part);
  }

  open(content) {
    this.modalService.open(content);
  }

  onPartAdded(part: Part): void {
    this.parts.push(part);
  }
}