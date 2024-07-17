"use client";

function UserInd({ user }) {
  return (
    <div className="bg-slate-700 rounded-xl p-10 m-10">
      <h1 className="text-8xl mb-10">
        {user.id}. {user.first_name} {user.last_name}
      </h1>
      <p className="text-4xl mb-6">{user.email}</p>
      <div className="flex justify-center">
        <img
          src={user.avatar}
          alt="Avatar"
          width={"30%"}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}

export default UserInd;
