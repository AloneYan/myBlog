import React from "react";
import BaftEditor from "@components/baftEditor";

export default () => {
  const goEvery = (val: any) => {
    console.log(val);
  };

  return <BaftEditor submit={goEvery} />;
};
