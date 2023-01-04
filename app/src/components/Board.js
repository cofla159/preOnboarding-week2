import React, { useState } from "react";
import Modal from "./Modal";

function Board() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex flex-col p-10 items-center">
        <div className="text-2xl">이슈 트래커</div>
        <button
          className="px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          +
        </button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <div className="flex flex-row p-10 items-center gap-10">
          <div>할 일</div>
          <div>진행 중</div>
          <div>완료</div>
        </div>
      </div>
    </>
  );
}

export default Board;
