const ages = [12,13,13,25];
const ages2 =[34, 46, 45, 61];
const ages3 =[2,4,5,6,1];
const allAges = ages.concat(ages2).concat([100]).concat(ages3);
const allAges2 =[...ages, ...ages2,100, ...ages3]
console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 750;
const takaPoica =[650, 230, 470]
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoica)
console.log(maximum)