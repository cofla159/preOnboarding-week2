import React, { useState } from "react";

function Modal({ showModal, setShowModal, mode, issue }) {
  const [issueNumber, setIssueNumber] = useState(0);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIssueNumber((prev) => prev + 1);
    const issues = JSON.parse(window.localStorage.getItem("issues"));
    window.localStorage.setItem(
      "issues",
      JSON.stringify([
        ...issues,
        {
          issueNumber,
          title: e.target.title.value,
          dueDate: e.target.dueDate.value,
          assignedTo: e.target.assignedTo.value,
          content: e.target.content.value,
          state: e.target.state.value,
        },
      ])
    );
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="text-black h-6 w-6 text-2xl block">x</span>
                </button>
                <div className="relative p-6 flex-auto">
                  <form className="space-y-6" onSubmit={handleOnSubmit}>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      제목
                      <input
                        type="text"
                        name="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
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
                      상태
                      <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        name="state"
                      >
                        <option className="hover:bg-yellow" value="todo">
                          할 일
                        </option>
                        <option className="hover:bg-yellow" value="doing">
                          진행 중
                        </option>
                        <option className="hover:bg-yellow" value="done">
                          완료
                        </option>
                      </select>
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
    </>
  );
}

export default Modal;
