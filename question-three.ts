let fudge = 0,
  recipe = 'name',
  SPANISH_FUDGE = 80,
  FRENCH_FUDGE,
  ENGLISH_FUDGE,
  amt,
  base = 1,
  sugar,
  chocolate;
  

  
  fudge = (recipe == 'SPANISH'? SPANISH_FUDGE : recipe == 'FRENCH' ? FRENCH_FUDGE : recipe == 'ENGLISH'? ENGLISH_FUDGE:1)

if (recipe == 'SPANISH') {
  amt = base * SPANISH_FUDGE;
  sugar = 2 * bottom(amt) + top_(amt) * 1.17;

} else if (recipe == 'FRENCH' || recipe == 'ENGLISH') {
  amt = base * fudge;
  sugar = 2 * bottom(amt) + top_(amt) * 1.17;
  if (recipe == 'FRENCH') {
    chocolate = 7;
  }
} else {
  amt = base;
  sugar = 2 * bottom(amt) + top_(amt) * 1.17;
}

function bottom(num: any) {
  return 0;
}
function top_(num: any) {
  return 0;
}