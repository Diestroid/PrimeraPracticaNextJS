import User from "@/components/User";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}
async function UsersPage() {
  const users = await fetchUsers();
  return (
    <div className="flex flex-wrap justify-center m-10">
      {users.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </div>
  );
}

export default UsersPage;
