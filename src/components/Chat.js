// ******** Imports ******** //
import React, { useRef } from "react";
import ChatImg from "../assets/images/chat.svg";

function Chat({ currentChat, handleNewChat }) {
  const newMessage = useRef("");
  return (
    <>
      {currentChat ? (
        <div className="chat m-2 d-flex flex-column justify-content-between">
          {/* ******** Chat Profile ********  */}
          <div className="w-100">
            <div
              className="profileRow row mx-3 mt-2 py-3"
              style={{ borderBottom: "2px solid #1e1f22" }}
            >
              <div className="d-flex col-6">
                <img
                  style={{ width: "3rem", height: "3rem" }}
                  className="rounded-circle text-white"
                  src={currentChat.image}
                />

                <div className="mx-3">
                  <h6 className="name text-white">{currentChat.name}</h6>
                  <span className="quote">@{currentChat.username}</span>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-end align-items-center">
                <span className="addUser rounded px-2 py-1">
                  <i
                    className="fa-solid fa-thumbtack"
                    style={{ color: "#8f99a3" }}
                  ></i>
                </span>
              </div>
            </div>
          </div>

          {/* ******** Conversation ******** */}
          <div className="m-3 px-2 conversation  d-flex flex-column ">
            {currentChat.chatLog.length > 0 &&
              currentChat.chatLog.map((ele, index) => {
                if (ele.send) {
                  return (
                    <div key={index} className="msg sendMsg mt-4 rounded-4">
                      {ele.message}
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className="msg receivedMsg mt-4 rounded-4">
                      {ele.message}
                    </div>
                  );
                }
              })}
          </div>

          {/* ******** Send Messages ******** */}
          <div className="m-3 ">
            <div className="sendMsgInput rounded d-flex justify-content-between align-items-center py-3 px-3  ">
              <span
                className=" d-inline-block text-center p-1 rounded-circle"
                style={{
                  width: "2.2rem",
                  height: "2rem",
                  backgroundColor: "#8f99a3",
                }}
              >
                <i className="fa-solid fa-plus"></i>
              </span>
              <input
                ref={newMessage}
                className="w-100 mx-3 px-2 sendMsgInputBar"
                placeholder="Type here..."
              />
              <i
                onClick={() => {
                  handleNewChat(currentChat, newMessage.current.value);
                  newMessage.current.value = "";
                }}
                className="fa-solid fa-paper-plane fa-xl mx-2"
                style={{ color: "#8f99a3" }}
              ></i>
            </div>
          </div>
        </div>
      ) : (
        // ******** If No Chat Selected ******** //
        <div className="chat m-2 d-flex flex-column justify-content-center align-items-center">
          <h1 style={{ color: "#8f99a3" }}>Start New Conversation</h1>
          <img className="w-50 h-50" src={ChatImg} />
        </div>
      )}
    </>
  );
}

// ******** Exports ******** //
export default Chat;
