// ******** Imports ******** //
import React, { useState } from "react";
import ContactRow from "./ContactRow";

function Sidebar({ currentUser, users, handleCurrentChat, setCurrentUser }) {
  // ******** Search conversation using name array ******** //
  const [searchArray, setSearchArray] = useState(null);
  const [showUsers, setShowUsers] = useState(false);

  // ******** Search conversation using name ******** //
  const handleSearch = (e) => {
    const search = currentUser.friends.filter((ele) => {
      return ele.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setSearchArray(search);
  };

  // ******** Add user handle function ******** //
  const handleAddUser = () => {
    if (showUsers) {
      setSearchArray(null);
      setShowUsers(!showUsers);
    } else {
      setSearchArray(users);
      setShowUsers(!showUsers);
    }
  };

  // ******** HandleAdd user to friends array ******** //
  const handleAdd = (contactUser) => {
    const friend = {
      id: contactUser.id,
      name: contactUser.name,
      username: contactUser.username,
      image: contactUser.image,
      chatLog: [],
    };
    setCurrentUser({
      ...currentUser,
      friends: [friend, ...currentUser.friends],
    });
    setSearchArray(null);
    setShowUsers(!showUsers);
  };

  return (
    <div className="sidebar">
      {/* ******** Profile Row ******** */}
      <div className="profileRow row mx-3 mt-3  py-3 ">
        <div className="d-flex col-6">
          <img
            style={{ width: "3rem", height: "3rem" }}
            className="rounded-circle text-white"
            src={currentUser.image}
          />
          <div className="mx-3">
            <h6 className="name text-white">{currentUser.name}</h6>
            <span className="quote">{currentUser.status}</span>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end align-items-center">
          <div className="showAllUsers"></div>
          <span onClick={handleAddUser} className="addUser rounded px-2 py-1">
            <i
              style={{ cursor: "pointer" }}
              className={`fa-solid fa-user-plus p-2 ${
                showUsers ? "bg-white  rounded" : ""
              } `}
            ></i>
          </span>
        </div>
      </div>

      {/* ******** Search Bar ******** */}
      <div className="search d-flex justify-content-center align-items-center py-2 px-2 mx-3 mt-3">
        <i
          className="fa-solid fa-magnifying-glass"
          style={{ color: "#8f99a3" }}
        ></i>
        <input
          onChange={(e) => handleSearch(e)}
          className="searchInputBar mx-2 "
          placeholder="search here..."
        />
      </div>

      {/* ******** Contacts ******** */}
      <div className="contacts mt-4 ">
        {searchArray != null
          ? searchArray.map((ele, index) => {
              return (
                <ContactRow
                  handleAdd={handleAdd}
                  key={index}
                  contactUser={ele}
                  imgPath={ele.image}
                  users={users}
                />
              );
            })
          : currentUser.friends.map((ele, index) => {
              return (
                <ContactRow
                  handleCurrentChat={handleCurrentChat}
                  key={index}
                  contactUser={ele}
                  imgPath={ele.image}
                  users={users}
                  index={index}
                />
              );
            })}
      </div>
    </div>
  );
}

// ******** Exports ******** //
export default Sidebar;
