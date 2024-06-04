import style from "./App.module.scss";
import io from "socket.io-client";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import Messages from "./components/Messages";
import Input from "./components/Input";
const socket = io("http://localhost:3030");
const cx = classNames.bind(style);
function App() {
  const [message, setMessage] = useState("");
  const [listMessages, setListMessages] = useState([]);
  //Hien thi id cua user dang nhap vao website
  const [id, setId] = useState("");
  const [reviceId, setReciveId] = useState("");
  useEffect(() => {
    setId(socket.id);

    // Lắng nghe sự kiện khi một user kết nối
    socket.on("connect", () => {
      setId(socket.id);
    });

    // Lắng nghe sự kiện khi một user ngắt kết nối
    socket.on("disconnect", () => {
      setId(null);
    });

    socket.on("send", (data) => {
      setListMessages((prev) => [...prev, data]);
      setReciveId(data.id);
    });

    return () => {
      // Hủy lắng nghe sự kiện khi component unmount
      socket.off("connect");
      socket.off("disconnect");
      socket.off("send");
    };
  }, []);
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    socket.emit("send", message);
    setMessage("");
  };
  return (
    <div className={cx("App")}>
      <Messages ListOfMessage={listMessages} idUser={id} idRecive={reviceId} />
      <Input
        onSubmit={submitForm}
        message={message}
        handleSend={submitForm}
        onChangeHandle={handleChange}
      />
    </div>
  );
}

export default App;
