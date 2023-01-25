import ExpenseItems from "./components/ExpenseItems";

function App() {
  const expenses = [
    {
      id: "el",
      name: "Food",
      amount: 500,
      date: new Date(2022, 7, 15),
      LocationOfExpenditure: "Restaurent Hyd",
    },
    {
      id: "bl",
      name: "Shopping",
      amount: 5000,
      date: new Date(2022, 10, 12),
      LocationOfExpenditure: "Trends",
    },
    {
      id: "ml",
      name: "Movie",
      amount: 1000,
      date: new Date(2022, 7, 13),
      LocationOfExpenditure: "Imax Hyd",
    },
    {
      id: "cl",
      name: "Tour",
      amount: 20000,
      date: new Date(2022, 4, 12),
      LocationOfExpenditure: "goa trip",
    },
    {id: "dl",
    name: "voccation",
    amount: 30000,
    date: new Date(2022, 6, 12),
    LocationOfExpenditure: "bankhok",
  },
  ];

  return (
    <div>
      <h1>let's start</h1>
      <h2>ExpenseItems Details</h2>
      {expenses.map((props) => {
        return (
          <div className="expense-item">
      {props.date.toLocaleDateString()}
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
        <div className="expense-item__Location">
          at {props.LocationOfExpenditure}
        </div>
      </div>
    </div>
        );
      })}
    </div>
  );
}

export default App;
