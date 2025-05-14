import { getScreenWidth } from "./helper";
import { BubbleSort } from "../sortFunctions/BubbleSort";
import { SelectionSort } from "../sortFunctions/SelectionSort";
import { InsertionSort } from "../sortFunctions/InsertionSort";
import { QuickSort } from "../sortFunctions/QuickSort";
import { HeapSort } from "../sortFunctions/HeapSort.js";
import { MergeSort } from "../sortFunctions/MergeSort";

// colors setting
export const comparisionColor="#7DF9FF	" // baby blue
export const swapColor="#ffeb3b"        // yellow
export const sortedColor="#28b463"      // spring green
export const pivotColor="#FF5733"       // sandy brown

// time setting
export let swapTime = 1000;
export let compareTime = 500;

// init array
export let sortingArray = initArrayForScreenSize();

export const sortingAlgorithms = [
  { component: BubbleSort, title: "Bubble", name: "BubbleSort" },
  { component: SelectionSort, title: "Selection", name: "SelectionSort" },
  { component: InsertionSort, title: "Insertion", name: "InsertionSort" },
  { component: HeapSort, title: "Heap", name: "HeapSort" },
  { component: MergeSort, title: "Merge", name: "MergeSort" },
  { component: QuickSort, title: "Quick", name: "QuickSort" },
];
function initArrayForScreenSize(){
  const screenSize=getScreenWidth()
  const shuffle=a=>a.sort(()=>Math.random()-.5)
  if(screenSize<460)return shuffle([1,2,3,4])
  else if(screenSize<720)return shuffle([1,2,3,4,5,6,7,8])
  return shuffle([1,2,3,4,5,6,7,8,9,10,11,12])
}