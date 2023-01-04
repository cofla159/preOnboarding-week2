import React, { useState } from "react";
import Modal from "./Modal";
import Card from "./Card";

function Board() {
  const [showModal, setShowModal] = useState(false);
  const issues = JSON.parse(window.localStorage.getItem("issues")).sort(
    (a, b) => a.issueNumber - b.issueNumber
  );
  const categorizedIssues = { todo: [], doing: [], done: [] };

  issues.forEach((issue) => {
    if (issue.state === "todo") categorizedIssues.todo.push(issue);
    else if (issue.state === "doing") categorizedIssues.doing.push(issue);
    else categorizedIssues.done.push(issue);
  });

  return (
    <>
      <div className="flex flex-col p-10 items-center">
        <div className="text-2xl">이슈 트래커</div>
        <button
          className="px-3 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          +
        </button>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          mode="newIssue"
        />

        <div className="flex flex-row p-10 content-start gap-10">
          <div className="flex flex-col gap-3">
            할 일
            {categorizedIssues.todo.map((issue) => (
              <Card key={issue.issueNumber} issue={issue} />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            진행 중
            {categorizedIssues.doing.map((issue) => (
              <Card key={issue.issueNumber} issue={issue} />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            완료
            {categorizedIssues.done.map((issue) => (
              <Card key={issue.issueNumber} issue={issue} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Board;
