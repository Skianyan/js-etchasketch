document.body.setAttribute(
	"style",
	"display:flex;flex-direction:column;align-items:center; justify-content:center; height: 100vh; gap:10px"
);

/// Grid Params
function generateGrid(size) {
	const gameGrid = document.createElement("div");
	gameGrid.setAttribute(
		"style",
		"display:flex;background-color:white;width:960px;height:960px;border:solid;justify-content:space-between"
	);
	gameGrid.setAttribute("id", "gamergrid");
	document.body.appendChild(gameGrid);
	for (i = 0; i < size; i++) {
		const row = document.createElement("div");
		row.setAttribute(
			"style",
			"display:flex; flex-direction:column; flex-grow:1; background-color:grey"
		);
		gameGrid.appendChild(row);
		for (j = 0; j < size; j++) {
			const square = document.createElement("div");
			square.setAttribute(
				"style",
				"display:flex; background:white; border: solid; border-width: 1px; padding: 5px;flex-grow:1"
			);
			square.addEventListener("mouseover", function () {
				square.setAttribute(
					"style",
					"display:flex; background:grey;  border: solid; border-width: 1px; padding: 5px;flex-grow:1"
				);
			});
			row.appendChild(square);
		}
	}
	document.body.appendChild(gameGrid);
}

// Prompt button
const promptButton = document.createElement("button");
promptButton.textContent = "Grid size";
promptButton.addEventListener("click", function () {
	canvassize = prompt("Insert the canvas dimensions.");
	if (canvassize > 1 && canvassize <= 64) {
		const canvas = document.getElementById("gamergrid");
		canvas.remove();
		generateGrid(canvassize);
	} else return;
});

document.body.appendChild(promptButton);
generateGrid(16);
