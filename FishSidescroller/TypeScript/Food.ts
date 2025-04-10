namespace Endgame {
    export class Food extends MovingObject {
        x: number;
        y: number;
        dy: number;
        r: number;

        constructor() {
            super();
            this.type = 2;
            this.r = 5;
            this.x = Math.floor((Math.random() * 500) + 100);
            this.y = 0;
            this.dy = Math.floor((Math.random() * 3) + 1);
        }
        
        draw(): void {
            let piece: Path2D = new Path2D();
            piece.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            crc.fillStyle = "#844D39";
            crc.fill(piece);
        }
        update(): void {
			this.move();
			this.draw();
		}
        move(): void {
            this.y += this.dy;
    }
}
}