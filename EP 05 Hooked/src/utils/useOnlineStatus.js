import React from "react";
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatue] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      console.log("offline");
      setOnlineStatue(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatue(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
