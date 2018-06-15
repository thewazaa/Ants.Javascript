	class Ants {
		constructor(id, minAnts, maxAnts, totalAntNests) {
			this.id = id;
			this.eaten = 0;
			this.minAnts = minAnts;
			this.maxAnts = maxAnts;
			this.totalAntNests = totalAntNests;
			this.canvas = document.getElementById(this.id);
			this.ctx = this.canvas.getContext('2d');
			
			this.resize();
			
			this.resetTerrain();
		}
		
		 resize() {
			this.width = this.ctx.canvas.width = this.canvas.offsetWidth;
			this.height = this.ctx.canvas.height = this.canvas.offsetHeight;
		}
		
		move() {
			for (var j=0;j<this.totalAntNests;j++) {			
				for (var i=0;i<this.ants[j].length;i++) {
					this.ants[j][i].searchMeal(this.meal);
					for (var k=0;k<this.totalAntNests;k++)
						this.ants[j][i].searchAntMeal(this.ants[k]);
						this.ants[j][i].searchAntNestMeal(this.antNest, j);

					if (this.ants[j][i].move()) {
						this.eaten++;
						this.antNest[j].meal++;
					}
				}
			}
		}
		
		draw() {
			this.terrain.draw(this.ctx);
			for (var j=0;j<this.totalAntNests;j++)
				this.antNest[j].drawBasic(this.ctx);
			for (var j=0;j<this.totalAntNests;j++)
				this.antNest[j].draw(this.ctx);
			for (var i=0;i<this.meal.length;i++)
				this.meal[i].draw(this.ctx);
			for (var j=0;j<this.totalAntNests;j++)
				for (var i=0;i<this.ants[j].length;i++)
					this.ants[j][i].draw(this.ctx);
		
			this.ctx.fillStyle = '#0';
			this.ctx.globalAlpha = 1;
			
			this.ctx.font = "20px Arial";
			this.ctx.fillText(this.eaten + " meal",5,20);
		}
		
		start() {
		  Ants.run(this);
		}
		
		static run(obj) {
			setInterval((function() {
				Ants.execution(obj);
			}), 16);
		}
		
		static execution(obj) {
			obj.move();
			obj.draw();
			for (var j=0;j<this.totalAntNests;j++) {			
				if (obj.ants[j].length < obj.maxAnts)
					for (var i=0;i<10;i++)
						obj.ants[j][obj.ants[j].length]=Ant.getAnt(obj.antNest[j].x, obj.antNest[j].y,obj.width, obj.height);
			}
		}
		
		resetTerrain() {
			this.terrain = new Terrain(this.width,this.height);
			this.antNest= new Array();
			this.ants = new Array();
			for (var j=0;j<this.totalAntNests;j++) {			
				this.antNest[j] = AntNest.getNest(this.width,this.height);
				this.ants[j] = new Array();
				for (var i=0;i<this.minAnts;i++)
					this.ants[j][i]=Ant.getAnt(this.antNest[j].x, this.antNest[j].y,this.width, this.height);
			}
			this.meal = new Array();
			for (var i =0; i<100;i++)
				this.meal[this.meal.length]= Meal.getMeal(this.width, this.height);
		}
	}	
