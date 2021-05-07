import React from "react";
import Todo from "./Todo";

export default function AllUserComp(props) {
  let allUserList = "";
  try {
    for (var key in props) {
      allUserList = props[key].map(item => {
        return (
          <Todo
            key={item.id}
            items={item}
          />
        );
      });
    }
  } catch (e) {}
  return (
    <div className="p-3 container justify-content-center">{allUserList}</div>
  );
}
