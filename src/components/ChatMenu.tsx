import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect, ConnectedProps } from "react-redux";
import { faBars, faX, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  ChatMenuToggle,
  ChatMenuToggleAction,
  ChatClose,
  ChatCloseAction,
} from "../actions/action";
import { AddNewChat } from "../reducers/chatData";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

interface PropsType {
  ChatMenuToggle: typeof ChatMenuToggle;
  ChatClose: typeof ChatClose;
  chat: {
    chatMenu: boolean;
    chat: boolean;
  };
  chatData: {
    chats: {
      id: number;
      title: string;
      messages: {
        id: number;
        date: string;
        content: string;
        is_ai_response: boolean;
      }[];
    }[];
  };
}

const ChatMenu: React.FC<PropsType> = ({ ChatMenuToggle, chat, chatData }) => {
  const { id } = useParams();
  const chatItem = chatData.chats.find((el) => el.id === Number(id));
  const naviage = useNavigate();

  const create_new_chat = (e: any) => {
    ChatMenuToggle();
    naviage(`/chat/`);
    naviage(0);

    // axios.post('http://localhost:8000/addChat/').then((res) => {
      // AddNewChat({id: res.data.id, title: res.data.title, messages: []})
    // })
  }

  return (
    <div className="chat-menu">
      <div className="chat-menu__header">
        <button className="chat__icon btn" onClick={ChatMenuToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        {chat.chatMenu ? (
          <p className="chat__title">Chats</p>
        ) : (
          <p className="chat__title">{chatItem?.title}</p>
        )}
        {chat.chatMenu ? (
          <button
            className="chat__icon btn"
            onClick={create_new_chat}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        ) : (
          <NavLink to="/">
            <button className="chat__icon btn" onClick={() => ChatClose()}>
              <FontAwesomeIcon icon={faX} />
            </button>
          </NavLink>
        )}
      </div>
      <div
        className={chat.chatMenu ? "chat-menu__body active" : "chat-menu__body"}
      >
        <ul className="chat-body__list">
          {chatData.chats
            .slice(0)
            .map((chat) => {
              return (
                <NavLink
                  onClick={ChatMenuToggle}
                  key={chat.id}
                  to={`/chat/${chat.id}`}
                  className="link"
                >
                  <li
                    key={chat.id}
                    className={
                      "chat-body__element " +
                      (chat.id == Number(id) ? "active" : "")
                    }
                  >
                    {chat.title}
                  </li>
                </NavLink>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state: {
  chat: {
    chat: boolean;
    chatMenu: boolean;
  };
  chatData: {
    chats: [];
  };
}) => {
  return {
    chat: state.chat,
    chatData: state.chatData,
  };
};

const connector = connect(mapStateToProps, {
  ChatMenuToggle,
  ChatClose,
  AddNewChat,
});

export default connector(ChatMenu);
