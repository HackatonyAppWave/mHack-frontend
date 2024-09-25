import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { connect, ConnectedProps } from "react-redux";
import { AddMessage, AddNewChat } from "../reducers/chatData";
import axios from "axios";

// interface PropsType {
//   chatData: {
//     chats: {
//       id: number;
//       messages: {
//         id: number;
//         date: string;
//         content: string;
//         ai_response: boolean;
//       }[];
//     }[];
//   };
//   AddMessage: typeof AddMessage;
//   AddNewChat: typeof AddNewChat;
// }

const ChatInput: React.FC<any> = ({ send_message, messages, setMessages }) => {
  const [inputValue, setInputValue] = useState("");
  const isDisabled = inputValue.length == 0;

  const { id } = useParams();
  // const chatsArray = chatData.chats;
  // let messagesArray;
  // let chatId: number;

  // if (id) {
  //   chatId = Number(id);
  //   messagesArray = chatsArray[Number(id)].messages.slice(0).reverse();
  // } else {
  //   chatId = chatData.chats.length - 1;
  //   messagesArray = chatsArray[chatData.chats.length - 1].messages
  //     .slice(0)
  //     .reverse();
  // }

  return (
    <form action="#" className="chat-input">
      <input
        type="text"
        placeholder="W czym mogę Ci pomóc?"
        className="chat-input__text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button
        className="btn btn--send chat-input__btn"
        onClick={(e) => {
          e.preventDefault();

          send_message(inputValue);

          setInputValue("");
        }}
        // disabled={isDisabled || messagesArray.length % 2 != 0}
        // onClick={(e) => {
        //   e.preventDefault();

        //   AddMessage(chatId, {
        //     id: messagesArray.length,
        //     date: "01/01/2023",
        //     content: inputValue,
        //     ai_response: false,
        //   });
        //   setInputValue("");

        //   const headers = {
        //     "Content-Type": "application/json",
        //   };

        //   const data = {
        //     message: inputValue,
        //   };

        //   axios
        //     .post(`http://localhost:8000/chat/${chatId}`, data, {
        //       headers: headers,
        //     })
        //     .then((response) => {
        //       AddMessage(chatId, {
        //         id: messagesArray.length,
        //         date: "01/01/2023",
        //         content: response.data.content,
        //         ai_response: true,
        //       });
        //     })
        //     .catch((error) => {
        //       console.error("Error:", error);
        //     });
        // }}
      >
        <FontAwesomeIcon icon={faPlay} />
      </button>
    </form>
  );
};

const mapStateToProps = (state: {
  chatData: {
    chats: [];
  };
}) => {
  return {
    chatData: state.chatData,
  };
};

const connector = connect(mapStateToProps, {
  AddMessage,
  AddNewChat,
});

export default connector(ChatInput);
