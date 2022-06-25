import { useState } from "react";

const useHasPermission = (permission) => {
  const [hasPermission, setHasPermission] = useState(null);

  const handlePermission = (state) => {
    switch (state) {
      case "granted":
        setHasPermission(true);
        break;
      case "prompt":
        checkPermission(permission);
        break;
      case "denied":
        setHasPermission(false);
        break;
      default:
        console.log(state);
        break;
    }
  };

  const checkPermission = (permission) => {
    navigator.permissions.query({ name: permission }).then(({ state }) => {
      handlePermission(state);
    });
  };

  checkPermission(permission);
  return hasPermission;
};

export default useHasPermission;
