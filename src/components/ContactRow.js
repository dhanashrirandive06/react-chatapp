// ******** Imports ******** //
import React, { useState } from "react";

function ContactRow({
  handleAdd,
  contactUser,
  imgPath,
  users,
  handleCurrentChat,
  index,
}) {
  const [isActive, setIsActive] = useState(false);
  const contact = users.find((ele) => ele.id === contactUser.id);

  // ******** Handle div active or not ******** //
  const handleIsActive = (index) => {
    setIsActive(index);
  };
  return (
    <div
      key={index}
      className={`contactRow row mx-3 mt-2 py-3 ${
        index === isActive ? "active" : ""
      }`}
      onClick={
        handleAdd
          ? () => handleAdd(contactUser)
          : () => {
              handleCurrentChat(contactUser);
              handleIsActive(index === isActive ? null : index);
            }
      }
    >
      <div className="d-flex col-6">
        <img
          className="contactProfile rounded-circle text-white"
          src={imgPath}
        />

        <div className="mx-3">
          <h6 className="name text-white">{contact.name}</h6>
          <span className="contactQuote">{contact.status}</span>
        </div>
      </div>
      <div className="col-6 d-flex justify-content-end align-items-center">
        <span className="actions rounded px-2 py-1">
          <i
            className="fa-solid fa-ellipsis-vertical"
            style={{ color: "#8f99a3" }}
          ></i>
        </span>
      </div>
    </div>
  );
}

// ******** Exports ******** //
export default ContactRow;
