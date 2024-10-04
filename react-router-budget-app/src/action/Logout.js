//rrd import
import { redirect } from "react-router-dom";
//helper.js...
import { deleteItems } from "../helpers";
//import toast library
import { toast } from "react-toastify";

export async function logoutAction() {
  //delete user
  deleteItems({
    key: "userName",
  });
  toast.success("You`ve deletet youre account!");

  //return redirect
  return redirect("/");
}
