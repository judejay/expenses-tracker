import { ReactNode, createContext, useReducer } from "react";
import { Expense } from "../components/ExpensesOutput/ExpensesSummary";


const DUMMY_EXPENSES = [
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
    updateExpense: (UpdateExpenseData: Partial <Expense>) => void
};

type ExpenseContextProviderProps = {
    children: ReactNode
};
 

const expensesReducer = (state: Expense[], action: { type: string, payload: any; }) => {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state]
        case 'UPDATE':
            const updatableExpenseIndex =  state.findIndex(({ id: any }) => id === action.payload.id );
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data }; 
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
          const updateState = state.filter((expense: Expense) => expense.id !== action.payload);
            return updateState ;
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
        dispatch({ type: 'DELETE', payload: id });
    }

    const updateExpense = ( {id ,description, amount, date}: Partial<Expense>) => {
      dispatch({ type: 'UPDATE', payload: {id, description, amount, date  }})
    }

    const value: ExpenseContextType  ={
      expenses: expensesState,
      addExpense,
      deleteExpense,
      updateExpense
    }
    
    
    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpenseContextProvider;

