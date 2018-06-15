	class Terrain{
		constructor(width,height) {
			this.width=width;
			this.height=height;
			this.list = new Array();
			for (var i=0; i<50; i++)
				this.list[i] = TerrainGrain.getTerrainGrain(this.width,this.height);
		}
		
		draw(ctx) {
			ctx.fillStyle = '#A33';
			ctx.fillRect(0,0,this.width,this.height);
			for (var i=0; i<50; i++)
				this.list[i].draw(ctx);
		}
	}
