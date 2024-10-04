import React from "react";

//import rrd
import { Form } from "react-router-dom";

//import hero icon
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Addbudgetform = () => {
  return (
    <div className="form-wrapper">
      <h2 className="h3  ">Create Budget</h2>

      <Form method="post" className="grid-sm">
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newbudget"
            placeholder="example: V eggies"
            required
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Budget Amount</label>
          <input
            type="number"
            step={0.01}
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g $350 "
            inputMode="decimal"
            required
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <button type="submit" className="btn btn--dark">
          <span>Create Budget</span>
          <CurrencyDollarIcon width={20} />
        </button>
      </Form>
    </div>
  );
};

export default Addbudgetform;
