import React from "react";
import { LoadingSpinner } from "../../../../imgs/Loadings";
import SubmitBtn from "../../../forms/ui/SubmitBtn/SubmitBtn";
import './ConfirmModal.css'

const ConfirmModal = ({
  visibleModal,
  txt,
  confirmFunc,
  exitFunc,
  isLoading,
  isSuccess,
}) => {
  const dialogRef = React.useRef();

  React.useEffect(() => {
    console.log(
      "visibleModal",
      visibleModal,
      "dialogRef",
      dialogRef.current.close
    );
    if (visibleModal) {
      dialogRef.current.show();
    } else {
      dialogRef.current.close();
    }
  }, [visibleModal]);

  function submitFunc() {
    confirmFunc();
    if (isSuccess) {
      dialogRef.current.close();
    }
  }

  function cancleFunc() {
    exitFunc();
    dialogRef.current.close();
  }

  return (
    <dialog ref={dialogRef} className="confirm__modal fixed">
      {/* <div className="modal__inner bg-white w-78 h-42 shadow py-5 px-6 rounded"> */}
        <h6 className="text-2xl">{txt}</h6>
        <div className="btns__container flex flex-row justify-between pt-8 pb-1 px-2">
          {isLoading ? (
            <SubmitBtn
              disabled={true}
              txtBtn={
                <>
                  <LoadingSpinner /> ok
                </>
              }
              onClick={() => {}}
            />
          ) : (
            <SubmitBtn
              disabled={false}
              txtBtn={"ok"}
              onClick={() => submitFunc()}
            />
          )}
          <SubmitBtn
            disabled={false}
            txtBtn={"cancel"}
            onClick={() => cancleFunc()}
          />
        </div>
      {/* </div> */}
    </dialog>
  );
};

export default ConfirmModal;
