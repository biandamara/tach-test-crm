function triangle(num) {
	let num = 7;

	for (let i = num; i > 0; i--) {
		let row = "";
		for (let j = i; j > 0; j--) {
			row += "X ";
		}
      console.log(row);
  }
}

triangle(num);
