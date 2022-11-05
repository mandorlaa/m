import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone141.module.css";

const IPhone141: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.iPhone141}>
      <div className={styles.rectangleDiv} onClick={onRectangleClick} />
    </div>
  );
};

export default IPhone141;
