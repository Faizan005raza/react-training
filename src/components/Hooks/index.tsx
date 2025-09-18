import { useState, useContext, createContext } from "react";
type UserType = {
  name: string;
  role: string;
};
const UserContext = createContext<UserType | null>(null);

function UseStateDemo() {
  const [color, setColor] = useState("red");

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>All About Hooks In React.js</h1>
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

function HooksDemo() {
  const userValue = { name: "Faizan Raza", role: "React Developer" };

  return (
    <UserContext.Provider value={userValue}>
      <div>
        <UseStateDemo />
        <UseContextDemo />
      </div>
    </UserContext.Provider>
  );
}

export default HooksDemo;
