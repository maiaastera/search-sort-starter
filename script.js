let NUM = Math.floor(Math.random() * 100);

let testArr = [4,7,6,9,2,1,3];

function stupidSearch(){

}

function binarySearch() {
  while(true) {

    let guess = document.getElementById("guess").value;
    document.getElementById("output").innerHTML = guess;
    console.log(guess)
    console.log(NUM)

    break;
  }
}

//sort test array using Bubble Sort
function bubbleSort(arr) {

document.getElementById("output").innerHTML = testArray
/*  Bubble Sort pseudo code

    for i from 0 to len
      for j from 0 to len - i
        if a[j] > a[j+1]
          swap(a[j],a[j+1])
*/    
document.getElementById("output").innerHTML = testArray

}

//sort test array using selection sort
function selectionSort(arr) {

  document.getElementById("output").innerHTML = testArray


/*  Selection Sort pseudo code

    for i from 1 to N - 1
      // set current element as minimum
      min = i    
    
      // check the element to be minimum 
      for j from i+1 to N 
        if a[j] < a[min]
          min = j;
    
      //swap the minimum element with the current element
      if min != i
        swap(arr,a[min],a[i])
*/ 

  document.getElementById("output").innerHTML = testArray

}
  

function testAll() {
  var arr = [-.1,4,7,6,1651,234,5,-18,9,2,3];
  console.log(stupidSearch());
  console.log(selectionSort(arr));
  console.log(bubbleSort(arr));
}
testAll();


//HL Only: recursive binarySearch
function recursiveBinarySearch(){

}

//HL Only: recursive mergeSort()
function recursiveMergeSort(){

}

/*  

//swap pseudo code
swap(arr,index1,index2)

    temp = index2
    index2 = index1
    index1 = temp

    return arr

*/
