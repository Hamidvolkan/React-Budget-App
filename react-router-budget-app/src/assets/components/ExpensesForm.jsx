import React, { useEffect } from "react";
//import heroicon
import { PlusIcon } from "@heroicons/react/24/solid";

//import rrd

import { useRef } from "react";
import { useFetcher } from "react-router-dom";

// import PlusIcon from "@heroicons/react/24/solid";
const ExpensesForm = ({ budgets }) => {
  const fetcher = useFetcher();
  const formRef = useRef();
  const isSubmiting = fetcher.state === "submitting";
  const focusRef = useRef();

  //useEffect

  useEffect(() => {
    if (!isSubmiting) {
      // clearForm
      formRef.current.reset();

      //re focus on form
      focusRef.current.focus();
    }
  }, [isSubmiting]);

  if (budgets.length > 0)
    return (
      <div className="form-wrapper">
        <h2 className="h3">
          Add New{" "}
          <span className="accent">
            {budgets.length === 1 && `${budgets.map((bugs) => bugs.name)}`}
          </span>
          <span> Expense</span>
        </h2>
        <fetcher.Form method="post" className="grid-sm" ref={formRef}>
          <label htmlFor="expenseName">Expense Name</label>
          <input
            type="text"
            name="expenseName"
            id="expenseName"
            placeholder={budgets[0].name}
            ref={focusRef}
            required
          />
          <label htmlFor="expenseAmount">Expense Amount</label>
          <input
            type="number"
            step={0.01}
            name="expenceAmount"
            id="ref={expenseRef}"
            inputMode="decimal"
            placeholder="e . g $350"
            required
          />
          <label htmlFor="expenseSelect">Budgets Category</label>
          <select
            name="expenseSelect"
            id="expenseSelect"
            placeholder={budgets[0]}
            required
            hidden={budgets.length === 1}
          >
            {budgets
              .sort((a, b) => a.createdAt - b.createdAt)
              .map((budget) => {
                return (
                  <option key={budget.id} value={budget.id}>
                    {budget.name}
                  </option>
                );
              })}
          </select>
          <input type="hidden" name="_action" value="ExpensesForm" />
          <button
            className="btn btn--dark"
            type="submit"
            disabled={isSubmiting}
          >
            {isSubmiting ? (
              <>
                <span>isSubmiting...</span>
              </>
            ) : (
              <>
                <span>Submit</span>
                <PlusIcon width={15} />
              </>
            )}
          </button>
        </fetcher.Form>
      </div>
    );
};

export default ExpensesForm;
