import { DoneIcon, ErrorIcon, InfoIcon, WarningIcon } from "../../imgs/icons";

let bgColor = "";
let borderColor = "";
let icon = "";

export const makeNotification = (variant, displayName) => {
  const NotificationBase = ({ title, message }) => {
    switch (variant) {
      case "SUCCESS":
        bgColor = "bg-green-100";
        borderColor = "border-green-800";
        icon = <DoneIcon />;
        break;
      case "INFO":
        bgColor = "bg-blue-100";
        borderColor = "border-blue-600";
        icon = <InfoIcon />;
        break;
      case "WARNING":
        bgColor = "bg-orange-100";
        borderColor = "border-orange-800";
        icon = <WarningIcon />;
        break;
      case "ERROR":
        bgColor = "bg-red-100";
        borderColor = "border-orange-700";
        icon = <ErrorIcon />;
        break;

      default:
        bgColor = "bg-green-100";
        borderColor = "border-green-800";
        icon = <DoneIcon />;
        break;
    }

    return (
      <div
        className={`notification py-1 rounded border ${bgColor} mx-1 my-3 max-w-xs ${borderColor}`}
      >
        <div className="notification__inner px-4">
          <div className="flex items-center">
          <div className="icon__container mx-1">{icon}</div>
          <div className="txt__container-nitfication ml-1 flex flex-row items-center ">
            <h6 className={`text-xl font-semibold my-1 mx-2`}>{title}</h6>
            <p className="text-sm">{message}</p>
          </div>
          </div>
        </div>
      </div>
    );
  };

  NotificationBase.displayName=`${displayName}Notification`
  return NotificationBase;
};
