import React, { useState } from "react";
import styles from "./form.module.css";

const Form = () => {
  const [isEmpty, setEmty] = useState(true);
  const [text, setText] = useState("");
  const [formClass, setFormClass] = useState(styles.form);
  const [btnClass, setBtnClass] = useState(styles.btnDis);
  const [resStyle, setResClass] = useState();
  const [responce, setRes] = useState("");
  const [tags, setTags] = useState([]);

  const handleSetText = (e) => {
    setText(e.target.value);
    if (text) {
      setEmty(false);
      setBtnClass(styles.btn);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    setText("");
    setEmty(true);
    setBtnClass(styles.btnDis);
    setFormClass(styles.greenForm);
    setRes("Сообщение отправлено");
    setResClass(styles.greenRes);
    setTags([...tags, text]);
  };
  const handleBlur = () => {
    if (!text) {
      setFormClass(styles.redForm);
      setBtnClass(styles.btnDis);
      setResClass(styles.redRes);
      setRes("Поля ввода не должно быть пустым");
    }
  };
  const handleDelEl = (index) => {
    setTags(
      tags.filter((item, id) => {
        if (index === id) {
          return false;
        } else {
          return true;
        }
      })
    );
  };

  return (
    <>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          className={formClass}
          type="text"
          value={text}
          onChange={handleSetText}
          onBlur={(e) => handleBlur(e)}
        />
        <button type="submit" className={btnClass} disabled={isEmpty}>
          Отправить
        </button>
      </form>
      <div className={resStyle}>{responce}</div>
      <div className={styles.tagsCnt}>
        {tags.map((item, index) => {
          return (
            <div key={index} className={styles.tagsEl}>
              {item}
              <button onClick={(e) => handleDelEl(index)} className={styles.X}>
                x
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Form;
