import { ReactNode, createContext, useReducer } from "react";
import { Expense } from "../components/ExpensesOutput/ExpensesSummary";


export const DUMMY_EXPENSES = [
    {
      id: 'el',
      description: 'A pair of shoes',
      amount: 59.99,
      date: new Date('2023-08-19')
    },
    {
      id: 'e2',
      description: 'A pair of trousers',
      amount: 89.99,
      date: new Date('2023-09-10')
    },
    {
      id: 'e3',
      description: 'Some bananas',
      amount: 4.99,
      date: new Date('2022-02-16')
    },
    {
      id: 'e4',
      description: 'A book',
      amount: 18.99,
      date: new Date('2022-07-1')
    },
    {
      id: 'e5',
      description: 'A magazine',
      amount: 8.99,
      date: new Date('2022-09-01')
    }
  
  ]

type ExpenseContextType = {
    expenses: Expense[],
    addExpense: ({description, amount, date  }: Expense)  => void,
    deleteExpense: (id: string) => void,
    updateExpense: (expenseData: Expense) => void
};

type ExpenseContextProviderProps = {
    children: ReactNode
};
 

const expensesReducer = (state: Expense[], action: { type: string, payload: any; }) => {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload }, ...state]
        case 'UPDATE':
            const updatableExpenseIndex =  state.findIndex((expense: { id: any; }) => expense.id === action.payload.id );
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data }; 
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense: { id: any; }) => expense.id !== action.payload);
        default: 
            return state;            
    }
}

export const ExpensesContext = createContext<ExpenseContextType>({} as ExpenseContextType);

const ExpenseContextProvider = ({children} : ExpenseContextProviderProps) => {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    const addExpense = (expenseData  : Expense) => {
        dispatch({ type: 'ADD', payload: expenseData });
    }

    const deleteExpense = (id: string) =>{
        dispatch({ type: 'UPDATE', payload: {id: id }});
    }

    const updateExpense = ( expenseData : Expense) => {
      dispatch({ type: 'UPDATE', payload: { data: expenseData } })
    }

    const value: ExpenseContextType  ={
      expenses: DUMMY_EXPENSES,
      addExpense,
      deleteExpense,
      updateExpense
    }
    
    
    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpenseContextProvider;

