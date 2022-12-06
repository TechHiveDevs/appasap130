
import show from "./show.organization";
import create from "./create.organization";
import edit from "./edit.organization";
import list from "./list.organization";

export default { 
  name: "organization",
  label: "organization",
  hide: false,
  create,
  edit,
  list,
  show,
}