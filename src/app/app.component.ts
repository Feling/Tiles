import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public tiles = [];
  public markedTileIndex = 0;
  public index;

  ngOnInit() {
    for (let i = 0; i < 144; i++) {
        this.tiles[i] = {text: `${i}`, color: 'lightblue'};
      }
    }
  onMarkedBook(index: number) {
    console.log(index);
  }

}
