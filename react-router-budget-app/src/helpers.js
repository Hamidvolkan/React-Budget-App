//waiting function
export const waiit = () =>
  new Promise((res) => setTimeout(res, Math.random() * 2000));

// local storage

export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// //random color
export const generateNewColor = () => {
  // if there is any budgets give the length otherwise give 0
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} %65 %50`;
};

//create budget
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateNewColor(),
  };

  //get length of existingBudget or give empty array
  const existingBudget = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudget, newItem])
  );
};

//create expense
export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    name: name,
    amount: +amount,
    budgetId: budgetId,
  };

  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newItem])
  );
};

//delete items
export const deleteItems = ({ key }) => {
  return localStorage.removeItem(key);
};
