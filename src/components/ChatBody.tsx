import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { AddNewChat, AddMessage } from '../reducers/chatData';
import axios from 'axios';

const display_info = (message: any) => {
  if (message.tool == 'FAQ') {
    return (
      <>
        <p>Przydatne linki:</p>
        <ul>
          {message.urls?.map((url: any) => (
            <li>
              <a href={url} target="_blank">
                {url}
              </a>
            </li>
          ))}
        </ul>
      </>
    );
  } else if (message.tool == 'akty_prawne') {
    return (
      <>
        <p>Pamiętaj, ze nie jest to pomoc prawna. Skontaktuj się z prawnikiem</p>
        <p>Moja odpowiedz bazowała na:</p>
        {Object.keys(message?.resources).map((key, index) => (
          <>
            <p key={index}>{key}:</p>
            <ul key={index}>
              {message.resources[key].map((item: any) => (
                <li> {item}</li>
              ))}
            </ul>
          </>
        ))}
      </>
    );
  } else if (message.tool == 'zaproponuj kierunki studiów') {
    return (
      <>
        <p>Więcej o kierunkach znajdziesz tutaj</p>
        {Object.keys(message?.majors).map((key, index) => (
          <>
            <ul key={index}>
              <li>
                <a href={message.majors[key]} style={{ color: 'white' }} target="_blank">
                  {' '}
                  {key}
                </a>
              </li>
            </ul>
          </>
        ))}
      </>
    );
  }

  return <></>;
};

const ChatBody: React.FC<any> = ({ messages }) => {
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  return (
    <div className="chat-body">
      <ul className="chat-body__conversation" ref={containerRef}>
        {messages?.length !== 0 &&
          messages?.map((message: any) => {
            if (message.ai_response) {
              return (
                <li key={message.id} className="message message--ai">
                  {message.content}
                  {display_info(message)}
                </li>
              );
            } else {
              return (
                <li key={message.id} className="message message--user">
                  {message.content}
                </li>
              );
            }
          })}
      </ul>
    </div>
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

export default connector(ChatBody);
