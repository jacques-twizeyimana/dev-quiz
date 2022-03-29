fudge =
  recipe === 'SPANISH'
    ? SPANISH_FUDGE
    : recipe === 'FRENCH'
    ? FRENCH_FUDGE
    : recipe == 'ENGLISH'
    ? ENGLISH_FUDGE
    : 1;

const amt = base * fudge;
// if recipe is SPANISH or FRENCH or ENGLISH
if (['SPANISH', 'FRENCH', 'ENGLISH'].includes(recipe)) {
  sugar = 2 * bottom(amt) + top_(amt) * 1.17;
  if (recipe === 'FRENCH') chocolate = 7;
} else {
  sugar = 2 * bottom(base) + top_(base) * 1.17;
}
