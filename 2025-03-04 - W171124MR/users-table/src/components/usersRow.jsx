function UsersRow({ user, i }) {
  return (
    <tr>
      <td>{i + 1}</td>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.age}</td>
      <td className={user.isActive ? "text-success" : "text-danger"}>
        {user.isActive ? "Active" : "Not Active"}
      </td>
    </tr>
  );
}

export default UsersRow;
