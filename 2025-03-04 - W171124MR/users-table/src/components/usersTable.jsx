import UsersRow from "./usersRow";

function UsersTable({ users = [] }) {
  if (!users.length) {
    return (
      <div className="border border-2 mx-auto w-25 bg-light shadow-sm my-4 rounded p-2">
        No Users
      </div>
    );
  }

  return (
    <table className="table table-striped table-hover table-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Is Active</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <UsersRow key={user.id} user={user} i={i} />
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
