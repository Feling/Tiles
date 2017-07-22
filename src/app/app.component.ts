import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public tiles = [];
  public markedTiles = [];
  public startTile = [];
  public stopTile= [];
  public index;
  public editMode = 'onClick';


  ngOnInit() {
    for (let i = 0; i < 144; i++) {
        this.tiles[i] = {text: `${i}`, color: 'lightblue', startTile: '0', endTile: '0'};
      }
    }

  /**
   * Marking tiles/ Unmarking tiles
   * @param {number} index
   */
  onMarkedBook(index: number) {
    if (this.editMode === 'onClick') {
      if (this.tiles[index].color === 'lightblue') {
        console.log(index);
        this.markedTiles.splice(index, 0, this.tiles[index]);
        this.tiles[index].color = 'red';
      } else {
        this.tiles[index].color = 'lightblue';
        const indexOf = this.markedTiles.indexOf(this.tiles[index]);
        this.markedTiles.splice(indexOf, 1);
        console.log(this.markedTiles);
      }
    } else {
    if (this.editMode === 'onSelectStart') {
      this.tiles[index].startTile = '1';
      this.editMode = 'onClick';
      this.startTile.push(this.tiles[index].text);
      console.log(this.startTile);
    }
    if (this.editMode === 'onSelectEnd') {
      this.tiles[index].endTile = '1';
      this.editMode = 'onClick';
      this.stopTile.push(this.tiles[index].text);
    }
    }
  }
// TODO add logic to select start tile
  selectStartTile() {
    this.editMode = 'onSelectStart';
  }
  selectEndTile() {
    this.editMode = 'onSelectEnd';
  }

  traverse (column, row) {
    const maze = this.buildMatrix();
   setInterval(() => {
      if (maze[column][row].endTile === '1') {
        console.log("We solved the maze at (" + column + ", " + row + ")");
      } else if (maze[column][row].color === 'lightblue') {
        console.log("At valid position (" + column + ", " + row + ")");
        maze[column][row].text = 9;
        maze[column][row].color = 'blue';
        if (column < maze.length - 1) {
          this.traverse(column + 1, row);
        }
        if (row < maze[column].length - 1) {
          this.traverse(column, row + 1);
        }
        if (column > 0) {
          this.traverse(column - 1, row);
        }
        if (row > 0) {
          this.traverse(column, row - 1);
        }
      }
    }, 1000);
  };

  buildMatrix() {
    let newTiles =  this.tiles.reduce((rows, key, index) => (index % 12 == 0 ? rows.push([key])
        : rows[rows.length - 1 ].push(key)) && rows, []);
    return newTiles;
  }

  MazeSolver() {
    this.traverse(6, 4);
  }

}

