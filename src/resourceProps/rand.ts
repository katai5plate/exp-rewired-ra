import { ShowGuesser, EditGuesser } from "react-admin";
import { RandList } from "../lists";

export default {
  name: "rand",
  list: RandList,
  show: ShowGuesser,
  edit: EditGuesser
};
