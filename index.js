// jshint esversion:11

export function feladat01(colors){
  if(!Array.isArray(colors)){
    throw new Error("colors argument must be an array");
  }

  // ---- filtering distinct colors: ------
  const distinctColors = distinctElements(colors);
  const numColors = distinctColors.length;

  // // or... how i would do the filtering in production:
  // const distinctColors = new Set(colors);
  // const numColors = distinctColors.size;

  return 2**numColors - numColors - 1; // #(all subset) - #singletons - 1(for empty set)
}

function distinctElements(array){
  if(!Array.isArray(array)){
    throw new Error("argument must be an array");
  }

  let distinctElems = [];
  for(let elem of array ){
    let alreadySeen = false;
    for(let seenElem of distinctElems){
      if(seenElem == elem){
        alreadySeen = true;
      }
    }

    if(!alreadySeen){
      distinctElems.push(elem);
    }
  }

  return distinctElems;
}