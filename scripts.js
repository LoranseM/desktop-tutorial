import { Game } from"./modules/game.js";
import { View } from"./modules/view.js";
import { Controller } from"./modules/controller.js";


export const size_block = 30;
export const columns = 10;
export const rows = 20;
const game = new Game();
const view = new View(document.querySelector('.container'));
const controller = new Controller(game, view);

controller.init('Enter');



//console.log(container);

// механика

//game.createTetromino();

//game.viewArea();




//game.viewArea();
/*window.addEventListener('keydown', event =>{
	if (event.code === 'Enter'){
		showArea(game.viewArea());
	}
})*/
//view.init();
//view.showArea(game.viewArea);
