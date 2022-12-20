import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [editMode, setEditMode] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    editMode,
    toggle,
    setEditMode,
  };
};

export default useModal;
