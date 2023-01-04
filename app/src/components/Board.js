import React from "react";

function Board() {
  const createHandler = () => {};

  return (
    <>
      <div className="flex flex-col p-10 items-center">
        <div className="text-2xl">이슈 트래커</div>
        <button
          type="button"
          onClick={createHandler}
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          +
        </button>
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
