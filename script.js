// python -m http.server

let NUM = Math.floor(Math.random() * 100);


function sequentialSearch(){
  let ans = "";
  for(let i = 0; i <= 100; i++) {
    if(NUM == i){
      ans = i;
    }
  }

  document.getElementById("output_sequential").innerHTML = "The number is " + ans;
  
}

function binarySearch() {
  let guess = document.getElementById("guess").value;
  if(NUM == guess){
    document.getElementById("output_binary").innerHTML += " The number is " + guess + "!!";
  } else if(NUM >= guess){
    document.getElementById("output_binary").innerHTML += " The number is higher than " + guess;
  } else{
    document.getElementById("output_binary").innerHTML += " The number is lower than " + guess;
  }
}

//sort test array using Bubble Sort
function bubbleSort(arr) {

  document.getElementById("output_bubble").innerHTML = "before Bubble: " + arr;
  let save = "";
  for(let i = 0; i <= 100; i++){
    for(let j = 0; j <= 99; j++){
      if(arr[j] > arr[j+1]){
        save = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = save;
      }
    }
  }
  document.getElementById("output_bubble").innerHTML += "<br>after Bubble: " + arr;
}

//sort test array using selection sort
function selectionSort(arr) {
  let save = "";
  document.getElementById("output_selection").innerHTML = "<br>before Selection: " + arr
  for(let i = 1; i < arr.length; i++){
    let min = i;
    for(let j = i+1; j < arr.length; j++){
      if(arr[j] < arr[min]){
        min = j;
      }
    }
    if(min != i){
      save = arr[i];
      arr[i] = arr[min];
      arr[min] = save;
    }
  }

  document.getElementById("output_selection").innerHTML += "<br>after Selection: " + arr;

}
  

function testAll() {
  let arr = [-.1,4,7,6,1651,234,5,-18,9,2,3];
  console.log(selectionSort(arr));
  console.log(bubbleSort(arr));
}



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
