import "./App.css";
import UsersTable from "./components/usersTable";
import { users } from "./data/users";

function App() {
  return (
    <div>
      <UsersTable />
      <UsersTable users={users.filter((user) => user.isActive)} />
    </div>
  );
}

export default App;
