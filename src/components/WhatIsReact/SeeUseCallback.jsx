import React, { useCallback } from "react";
import SubmitBtn from "../forms/ui/SubmitBtn/SubmitBtn";

const SeeUseCallback = () => {
  const [visible, setVisible] = React.useState(false);

  const handleClick = useCallback(() => {
    setVisible((c) => !c);
  }, [1]);

  return (
    <div className="flex flex-col items-center w-28 h-36">
      <SubmitBtn disabled={false} txtBtn={"visible"} onClick={handleClick} />

      {visible && (
        <div className="m-2 flex flex-col items-center" >
          <div className="arrow-up"></div>
          <div className="w-24 border p-2 rounded text-center">Nihil, ut.</div>
        </div>
      )}
    </div>
  );
};

export default SeeUseCallback;
