	class Meal
	{
		constructor(x,y,material) {
			this.x=x;
			this.y=y;
			this.material = material;
		}
		
		static getMeal(width, height) {
			var x = Math.floor((Math.random() * width));
			var y = Math.floor((Math.random() * height));
			var material = Math.floor(Math.random() * 3000);
			return new Meal(x,y, material);
		}		
		
		draw(ctx) {
			var radius = Math.sqrt(this.material/Math.PI);
			var gradient = ctx.createRadialGradient(this.x, this.y, radius/2, this.x, this.y, radius);
			gradient.addColorStop(0, '#080');
			gradient.addColorStop(1, '#8F8');
			ctx.fillStyle = gradient;
			ctx.beginPath();
			ctx.arc(this.x,this.y,radius,0,2*Math.PI);
			ctx.fill();
		}
	}
