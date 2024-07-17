"use client";

import Link from "next/link";

function User({ user }) {
  return (
    <Link href={"/users/" + user.id}>
      <div className="bg-slate-900 text-white inline-block p-5 m-2 text-center rounded-xl cursor-pointer hover:bg-slate-700 transition-colors">
        <h3 className="text-2xl mb-2">
          {user.id}. {user.first_name} {user.last_name}
        </h3>
        <p className="mb-2">{user.email}</p>
        <div className="flex justify-center">
          <img src={user.avatar} alt="Avatar" className="rounded-full" />
        </div>
      </div>
    </Link>
  );
}

export default User;
