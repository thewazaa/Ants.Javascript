	class Ant
	{
		constructor(x,y,direction, centerX, centerY, width, height) {
			this.x=x;
			this.y=y;
			this.centerX=centerX;
			this.centerY=centerY;
			this.direction=direction;
			this.width=width;
			this.height=height;
			this.meal = false;
			this.lastAnt = -1;
		}
		
		static getAnt(x, y, width, height) {
			var direction = Math.random() * Math.PI*2;
			
			return new Ant(x,y,direction, x,y, width, height);
		}
		
		searchAntNestMeal(list, nest) {
			if (this.meal)
				return;
			for (var i=0;i<list.length;i++) {
				if (i != nest && list[i].meal>0) {
					var x2 = (this.x - list[i].x)
					var y2 = (this.y - list[i].y)
					var r = x2*x2+y2*y2;		
					if (r<=4) {
						list[i].meal--;
						this.meal=true;
						this.direction= Math.atan2(this.centerY - this.y, this.centerX - this.x);
					}
				}
			}
		}
		
		searchAntMeal(list) {
			if (this.meal)
				return;
			for (var i=0;i<list.length;i++) {
				if (this.i!=this.lastAnt && list[i].meal) {
					var x2 = (this.x - list[i].x)
					var y2 = (this.y - list[i].y)
					var r = x2*x2+y2*y2;		
					if (r<=4) {
						this.direction = list[i].direction - Math.PI;
						this.lastAnt = i;
					}
				}
			}
		}
		
		searchMeal(list) {
			if (this.meal)
				return;
			for (var i=0;i<list.length;i++) {
				var x2 = (this.x - list[i].x)
				var y2 = (this.y - list[i].y)
				var r = x2*x2+y2*y2;
			
				if (r<=list[i].material/Math.PI) {
					list[i].material--;
					this.meal=true;
					this.direction= Math.atan2(this.centerY - this.y, this.centerX - this.x);
				}
			}
		}
		
		move() {
			var r2=0;
			var oldX = this.x;
			var oldY = this.y;
			if (this.meal) {
				var x2 = this.x - this.centerX;
				var y2 = this.y - this.centerY;
				r2 = x2*x2+y2*y2;
			}
			
			this.x = this.x + Math.cos(this.direction);
			this.y = this.y + Math.sin(this.direction);
			if (this.x<0) {
				this.x=0;
				this.direction = Math.random() * Math.PI*2;
				}
			if (this.x>this.width) {
				this.x=this.width;
				this.direction = Math.random() * Math.PI*2;
				}
			if (this.y<0) {
				this.y=0;
				this.direction = Math.random() * Math.PI*2;
				}
			if (this.y>this.height) {
				this.y=this.height;
				this.direction = Math.random() * Math.PI*2;
				}
			if (this.meal) {
				var x2 = this.x - this.centerX;
				var y2 = this.y - this.centerY;
				var r = x2*x2+y2*y2;
			
				if (r<=4) {
					this.meal=false;
					
					this.direction = this.direction - Math.PI;
					
					if (this.direction<0)
						this.direction+=Math.PI*2;
					if (this.direction>Math.PI*2)
						this.direction-=Math.PI*2;
					
					return true;
				} else  if (r2<r) {
					this.direction = Math.random() * Math.PI*2;
					this.x=oldX;
					this.y=oldY;
					this.move();
				}
			}
			if (!this.meal) 
				this.direction += -Math.PI/32 + Math.random() * Math.PI/16;
			return false;
		}
		
		draw(ctx) {
			if (this.meal)
				ctx.fillStyle = '#0F0';
			else
				ctx.fillStyle = '#000';
			ctx.globalAlpha = 1;
			ctx.fillRect(this.x,this.y,1,1)			
		}
	}
