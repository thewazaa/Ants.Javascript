	class AntNest{
		constructor(x,y) {
			this.x=x;
			this.y=y;
			this.meal = 0;
		}
		
		static getNest(width, height) {
			var x = 50 + Math.floor((Math.random() * (width - 100)));
			var y = 50 + Math.floor((Math.random() * (height - 100)));
			
			return new AntNest(x,y);
		}
		
		drawBasic(ctx) {
			ctx.beginPath();
			ctx.fillStyle = '#A33';
			ctx.globalAlpha = 1;

			ctx.arc(this.x, this.y, 50, 0, Math.PI * 2, true);
			ctx.fill();
		}
		
		draw(ctx) {
			ctx.fillStyle = '#FFF';
			ctx.globalAlpha = 0.05;

			for (var i = 0; i < 8; i++) {
				ctx.beginPath();
				ctx.arc(this.x, this.y, 10 + (20-i) * i, 0, Math.PI * 2, true);
				ctx.fill();
			}			
			
			ctx.fillStyle = '#700';
			ctx.globalAlpha = 1;
				ctx.beginPath();
				ctx.arc(this.x, this.y, 2, 0, Math.PI * 2, true);
				ctx.fill();
		}
	}
