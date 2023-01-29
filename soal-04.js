function printOutput() {
	let arr = [6,7,3,1,4,9,23,10];
	let n = arr.length;

	for(let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
				let t = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = t;
			}
    }
	}
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printOutput();

/* output:
1
3
4
6
7
9
10
23 */
