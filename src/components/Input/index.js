import React from "react";
import style from "./Input.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
export default function Input({
  onSubmit,
  handleSend,
  message,
  onChangeHandle,
}) {
  return (
    <form action="" onSubmit={(e) => onSubmit(e)}>
      <div className={cx("wrapper")}>
        <input
          type="text"
          name=""
          id=""
          placeholder="typing your message"
          value={message}
          onChange={(e) => onChangeHandle(e)}
        />
        <button className={cx("send")} onClick={handleSend}>
          SEND
        </button>
      </div>
    </form>
  );
}
