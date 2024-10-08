import React, { useEffect, useRef } from "react";

//import rrd
import { Form, useFetcher } from "react-router-dom";

//import hero icon
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Addbudgetform = () => {
  const fetcher = useFetcher();
  const isSubmiting = fetcher.state === "submitting";
  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmiting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmiting]);
  return (
    <div className="form-wrapper">
      <h2 className="h3  ">Create Budget</h2>

      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newbudget"
            placeholder="example: V eggies"
            required
            ref={focusRef}
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
        <button type="submit" className="btn btn--dark" disabled={isSubmiting}>
          {isSubmiting ? (
            <span>Submitting...</span>
          ) : (
            <>
              <span>Create Budget</span>
              <CurrencyDollarIcon width={20} />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};

export default Addbudgetform;
