import { premierElement } from "./s2/ep1/generics";

console.log(
  "tableau string : ",
  premierElement<string>(["Jean", "Jacques", "Pierre"])
);

console.log("tableau number : ", premierElement<number>([1, 2, 3, 4, 5]));

console.log(
  "tableau objets : ",
  premierElement<object>([
    { id: 1, name: "modibo" },
    { id: 2, name: "jean" },
    { id: 3, name: "pierre" },
  ])
);
