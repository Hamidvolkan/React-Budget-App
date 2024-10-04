//helper functions
import { createBudget, fetchData } from "../../helpers";

//rrd imports
import { useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";
//library impports
import { toast } from "react-toastify";
import Addbudgetform from "../components/Addbudgetform";

//loader

export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budget");
  return { userName, budgets };
}

//action
export async function dashboardAction({ request }) {
  //get data from form
  const data = await request.formData();
  const { _action, ...value } = Object.fromEntries(data);
  console.log(_action);
  // set data in localStorage
  // localStorage.setItem("userName", `"${formData.userName}"`);
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(value.userName));
      return toast.success(`Wellcome , ${value.userName}`);
    } catch (e) {
      throw new Error("there was a problem creating youre account");
    }
  }
  if (_action === "createBudget") {
    try {
      // create budget
      createBudget({
        name: value.newBudget,
        amount: value.newBudgetAmount,
      });
      return toast.success("Budget Created");
    } catch (e) {
      throw new Error("there wa a problem creating youre budget");
    }
  }
}

const dashboard = () => {
  const { userName, budgets } = useLoaderData();
  return (
    <div>
      {userName ? (
        <div>
          <h1>
            Welcome back ,<span className="accent">{userName}</span>
          </h1>
          {/* <div className="grid-sm">{budgets ? "hi" : "bye"}</div> */}
          <div className="grid-lg">
            <div className="flex-lg">
              <Addbudgetform />
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </div>
  );
};

export default dashboard;
