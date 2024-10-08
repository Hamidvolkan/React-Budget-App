//helper functions
import { createBudget, createExpense, fetchData, waiit } from "../../helpers";

//rrd imports
import { useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";
//library impports
import { toast } from "react-toastify";
import Addbudgetform from "../components/Addbudgetform";
import ExpensesForm from "../components/ExpensesForm";

//loader

export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
}

//action
export async function dashboardAction({ request }) {
  await waiit();
  //get data from form
  const data = await request.formData();
  const { _action, ...value } = Object.fromEntries(data);
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
      throw new Error("there was a problem creating youre budget");
    }
  }
  if (_action === "ExpensesForm") {
    try {
      //create expense
      createExpense({
        name: value.expenseName,
        amount: value.expenceAmount,
        budgetId: value.expenseSelect,
      });
      return toast.success("new Expense added");
    } catch (e) {
      throw new Error("seems like there is a problem with youre expenses");
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
          {budgets && budgets.length > 0 ? (
            <div className="grid-lg">
              <div className="flex-lg">
                <Addbudgetform />
                <ExpensesForm budgets={budgets} />
              </div>
            </div>
          ) : (
            <div className="grid-sm">
              <p>Personal budgeting is the key to freedom</p>
              <p>Create a budget to get started</p>
              <Addbudgetform />
            </div>
          )}
        </div>
      ) : (
        <Intro />
      )}
    </div>
  );
};

export default dashboard;
