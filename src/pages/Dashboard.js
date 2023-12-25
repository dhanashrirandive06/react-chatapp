// ******** Imports ******** //
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import users from "../data/users";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [usersData, setUsersData] = useState(users);
  const [currentChat, setCurrentChat] = useState();

  const current = users.find(
    (ele) => ele.email == localStorage.getItem("user:email")
  );
  const [currentUser, setCurrentUser] = useState(current);

  const navigate = useNavigate();

  // ******** Logout function ******** //
  const handleLogout = () => {
    localStorage.removeItem("user:email");
    navigate("/login");
  };

  // ******** Set user as current chat ******** //
  const handleCurrentChat = (contactUser) => {
    setCurrentChat(contactUser);
  };

  const handleNewChat = (contact, message) => {
    const find = currentUser.friends.find((ele) => ele == contact);
    find.chatLog.push({
      send: true,
      message: message,
    });
    const friend = currentUser.friends.filter((ele, index) => {
      if (ele.id === find.id) {
        return find;
      }
      return ele;
    });
    setCurrentUser({
      ...currentUser,
      friends: friend,
    });
  };

  return (
    <div className="dashboard d-flex rounded p-1">
      <div className="logout" onClick={handleLogout}>
        <i className="mx-2 fa-solid fa-right-from-bracket"></i>
        Logout
      </div>
      <Sidebar
        currentUser={currentUser}
        users={usersData}
        handleCurrentChat={handleCurrentChat}
        setCurrentUser={setCurrentUser}
      />
      <Chat
        users={usersData}
        currentChat={currentChat}
        handleNewChat={handleNewChat}
      />
    </div>
  );
}

// ******** Exports ******** //
export default Dashboard;
