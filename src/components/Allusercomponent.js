import React from "react";
import Table from "./table";

function AllUserComp(props) {
  let allUserList = "";
  try {
    for (var key in props) {
      allUserList = props[key].map(item => {
        return (
          <Table
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
export default AllUserComp;