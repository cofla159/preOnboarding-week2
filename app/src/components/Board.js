import React, { useState } from "react";

function Board() {
  const [showModal, setShowModal] = useState(false);
  let issueNumber = 0;

  const onSubmit = (e) => {
    e.preventDefault();
    issueNumber++;
    window.localStorage.setItem(
      issueNumber,
      JSON.stringify({
        title: e.target.title.value,
        dueDate: e.target.dueDate.value,
        assignedTo: e.target.assignedTo.value,
        content: e.target.content.value,
      })
    );
    setShowModal(false);
  };

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
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">새 이슈</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        x
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form className="space-y-6" onSubmit={onSubmit}>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        제목
                        <input
                          type="text"
                          name="title"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                      </label>

                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        마감일
                        <input
                          type="datetime-local"
                          name="dueDate"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                      </label>

                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        담당자
                        <input
                          type="text"
                          name="assignedTo"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                      </label>

                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        내용
                        <textarea
                          name="content"
                          wrap="soft"
                          rows="5"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                      </label>

                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        저장
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
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
