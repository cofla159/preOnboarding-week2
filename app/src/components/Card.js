import React, { useState } from "react";
import Modal from "./Modal";

function Card({ issue }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="block p-6 rounded-lg shadow-lg bg-white max-w-sm cursor-pointer"
      onClick={() => setShowModal(true)}
    >
      <div className="text-gray-900 text-md leading-tight font-medium mb-2">
        {issue.title}
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        mode="oldIssue"
        issue={issue}
      />
    </div>
  );
}

export default Card;
