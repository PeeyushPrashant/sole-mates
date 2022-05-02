import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
  },
  {
    _id: uuid(),
    categoryName: "Puma",
  },
  {
    _id: uuid(),
    categoryName: "Adidas",
  },
  {
    _id: uuid(),
    categoryName: "Jordan",
  },
  {
    _id: uuid(),
    categoryName: "Converse",
  },
];
