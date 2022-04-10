import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "./actions";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.myFirstReducer.users);
  return (
    <div>
      <button onClick={() =>dispatch(getUsersFetch())}>Get Users</button>
      <div>
        Users:
        {users.map((user, idx) => (
          <div key={idx}>{user.name}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
