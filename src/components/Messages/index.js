import React from "react";
import style from "./Messages.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
export default function Messages({
  ListMyMessage,
  ListOfMessage,
  ListOtherMessage,
  idUser,
  idRecive,
}) {
  let newDate = new Date();
  let time = newDate.toLocaleTimeString();
  let date = newDate.toDateString();
  return (
    <div className={cx("wrapper")}>
      <div className={cx("messages")}>
        {/* <div className={cx("my-message")}>
          <p>hello</p>
        </div>
        <div className={cx("my-message")}>
          <p>hello</p>
        </div>
        <div className={cx("other-message")}>
          <p>Hello</p>
        </div> */}
        {ListOfMessage.map((msg, index) => {
          if (msg.id === idUser) {
            return (
              <div key={index} className={cx("my-message")}>
                <span className={cx("id")}>USER_ID: {msg.id}</span>
                <p>{msg.data}</p>
                <span className={cx("time")}>
                  {date} - {time}
                </span>
              </div>
            );
          }
          return (
            <div key={index} className={cx("other-message")}>
              <span className={cx("id")}>USER_ID: {msg.id}</span>
              <p>{msg.data}</p>
              <span className={cx("time")}>
                {date} - {time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
