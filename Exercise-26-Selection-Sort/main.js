function selectionSort(arr) {
  var minIndex;
  var temp;
  var length = arr.length;

  for (var i = 0; i < length; i++) {
    minIndex = i;

    for (var j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
}
