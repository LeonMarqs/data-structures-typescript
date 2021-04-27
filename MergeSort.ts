function merge(left: number[], right: number[]): any[] {
  let arr = [];
  
  while(left.length && right.length) {
    if(left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [ ...arr, ...left, ...right ];
}

export default function mergeSort(array: number[]): any {

  if(array.length < 2) {
    return array;
  }

  const half: number = Math.floor(array.length / 2);

  const left: number[] = mergeSort(array.slice(0, half));
  const right: number[] = mergeSort(array.slice(half));
  return merge(left, right);
}
