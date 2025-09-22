import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useRef,
  useReducer,
  useCallback,
  useMemo,
} from "react";

type UserType = {
  name: string;
  role: string;
};

const UserContext = createContext<UserType | null>(null);

function UseStateDemo() {
  const [color, setColor] = useState("");

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        <u>All About Hooks In React.js</u>
      </h1>
      <ol>
        <h1>
          <li>State Hook</li>
        </h1>
        <ul>
          <li>
            useState accepts an initial state and returns two values: the
            current state and a function to update it.
          </li>
          <li>
            It allows declaring and updating state variables directly within a
            functional component.
          </li>
        </ul>
      </ol>

      <div>
        <h3>Implemented the concept:</h3>
        <p>My Favourite Color is: {color}</p>
        <button onClick={() => setColor("Blue")}>Blue</button> <br />
        <br />
        <button onClick={() => setColor("Red")}>Red</button> <br />
        <br />
        <button onClick={() => setColor("Green")}>Green</button>
      </div>
    </div>
  );
}

function UseContextDemo() {
  const user = useContext(UserContext);
  if (!user) return <p>No user context found.</p>;

  return (
    <div>
      <h1>2. Context Hook</h1>
      <ul>
        <li>
          This hook lets a component receive information from distant parents
          without passing it as props.
        </li>
      </ul>
      <div>
        <h3>Implemented the concept:</h3>
        <p>User: {user.name}</p>
        <p>Role: {user.role}</p>
      </div>
    </div>
  );
}

function UseEffectDemo() {
  const [data, setData] = useState(0);
  const [reverse, setReverse] = useState(0);

  function Increase() {
    setData((data) => data + 1);
  }

  function Decrease() {
    setReverse((reverse) => reverse - 1);
  }

  return (
    <>
      <h1>3. Effect Hook</h1>
      <p>useEffect Hook is a hook that tells React do some code when:-</p>
      <ol>
        <li>any component re-renders.</li>
        <li>the component mounts.</li>
        <li>the state of a value changes.</li>
      </ol>
      <h3>Implemented the concept:</h3>
      <p>Data is: {data}</p>
      <button onClick={Increase}>Add</button>
      <br />
      <p>Data is: {reverse}</p>
      <button onClick={Decrease}>Sub</button>
    </>
  );
}

function UseRefDemo() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <div>
        <h1>4. Reference Hook</h1>
        <ul>
          <li>This hook allows you to persist values between renders.</li>
          <li>Let you reference a value that is not needed for rendering.</li>
        </ul>
        <h3>Implemented the concept:</h3>
        <p>Type in an input field:</p>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Render Count: {count.current}</h2>
      </div>
    </>
  );
}

const initialScore = [
  {
    id: 1,
    score: 0,
    name: "John",
  },
  {
    id: 2,
    score: 0,
    name: "Sally",
  },
];

const reducer = (
  state: typeof initialScore,
  action: { type: string; id: number }
) => {
  switch (action.type) {
    case "INCREASE":
      return state.map((player) => {
        if (player.id === action.id) {
          return { ...player, score: player.score + 1 };
        } else {
          return player;
        }
      });
    default:
      return state;
  }
};

function UseRedDemo() {
  const [score, dispatch] = useReducer(reducer, initialScore);

  const handleIncrease = (player: { id: number }) => {
    dispatch({ type: "INCREASE", id: player.id });
  };

  return (
    <>
      <div>
        <h1>5. Reducer Hook</h1>
        <ul>
          <li>This Hook is similar to useState Hook</li>
          <li>It allows for custom state logic</li>
        </ul>
        <h3>Implemented the concept:</h3>
      </div>
      {score.map((player) => (
        <div key={player.id}>
          <label>
            <input
              type="button"
              onClick={() => handleIncrease(player)}
              value={player.name}
            />
            {player.score}
          </label>
        </div>
      ))}
    </>
  );
}

const Button = React.memo(
  ({ onClick, text }: { onClick: () => void; text: string }) => {
    console.log(`${text} button rendered`);
    return <button onClick={onClick}>{text}</button>;
  }
);

function UseCallBack() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const handleClick2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  console.log("Parent rendered");
  return (
    <div>
      <h1>6. CallBack Hook</h1>
      <ul>
        <li>This Hook is used to memoize the callback function.</li>
        <li>Memoizing the function means caching the result of a function so that it does not need to be recalculated.</li>
      </ul>
      <h3>Implemented the concept:</h3>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h1>7. Memo Hook</h1>
        <ul>
          <li>This hook is similar to CallBack hook.</li>
          <li>This returns the memoized value.</li>
          <li>This only runs when one of its dependencies changed.</li>
        </ul>
        <h2>My Todos</h2>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <br />
      <hr />
      <div>
        Count: {count}
        <br />
        <button onClick={increment}> + </button>
        <h3>Expensive Calculation</h3>
        {calculation}
      </div>
    </div>
  );
}

const expensiveCalculation = (num: number) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

function HooksDemo() {
  const userValue = { name: "Faizan Raza", role: "React Developer" };

  return (
    <UserContext.Provider value={userValue}>
      <div>
        <UseStateDemo />
        <UseContextDemo />
        <UseEffectDemo />
        <UseRefDemo />
        <UseRedDemo />
        <UseCallBack />
        <App />
      </div>
    </UserContext.Provider>
  );
}

export default HooksDemo;
