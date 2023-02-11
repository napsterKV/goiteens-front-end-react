import styles from "./modal.module.css";
import React, {useState, useEffect, useRef} from 'react';

const Component = ({ sent }) => {
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
    console.log(ref);
  });
  return <div className={styles.modal}>
    <h3 className={ styles.title}>
          Вам подобається React?
        </h3>
    <input onChange={sent} ref={ref}></input>
      </div>
};

export default Component;

