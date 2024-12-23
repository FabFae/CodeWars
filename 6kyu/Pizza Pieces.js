// ps://www.codewars.com/kata/5551dc71101b2cf599000023


function maxPizza(cuts) {
    if (cuts < 0) return -1;
    return (cuts * (cuts + 1)) / 2 + 1;
  }