import { ShowGuesser, EditGuesser } from "react-admin";
import { CpusList } from "../lists";

export default {
  name: "cpus",
  list: CpusList,
  show: ShowGuesser,
  edit: EditGuesser,
  create: void 0,
  icon: void 0
};
