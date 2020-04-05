import React from "react";
import BaftEditor from "@components/baftEditor";

import everyApi from "@api/every-api";

export default () => {
  const goEvery = async (msg: any) => {
    const res = await everyApi.saveEvery({ msg });
    console.log(res);
  };

  return <BaftEditor submit={goEvery} />;
};
