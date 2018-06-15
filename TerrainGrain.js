	class TerrainGrain
	{
		constructor(x,y) {
			this.x=x;
			this.y=y;
		}
		
		static getTerrainGrain(width, height) {
			var x = Math.floor((Math.random() * width));
			var y = Math.floor((Math.random() * height));
			
			return new TerrainGrain(x,y);
		}
		
		draw(ctx) {
			ctx.fillStyle = '#AFA';
			ctx.globalAlpha = 0.05;
			ctx.fillRect(this.x - 20, this.y - 20, this.x+10, this.y+10);
		}
	}
