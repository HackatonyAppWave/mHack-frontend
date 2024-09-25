import React from 'react';
import ChatInput from '../components/ChatInput';
import ChatBody from '../components/ChatBody';
import ChatMenu from '../components/ChatMenu';
import axios from 'axios';
import { SetChats } from '../reducers/chatData';

import { connect, ConnectedProps } from 'react-redux';
import { redirect, useNavigate, useParams } from 'react-router-dom';

interface PropsType {
  SetChats: typeof SetChats;
  chatsData: {
    chats: {
      id: number;
      messages: {
        id: number;
        date: string;
        content: string;
        ai_response: boolean;
      }[];
    }[];
  };
}

const ChatPage: React.FC<PropsType> = ({ chatsData, SetChats }) => {
  const { id } = useParams();

  const [chats, setChats] = React.useState<any>([]);
  const [messages, setMessages] = React.useState<any>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    let url;
    if (id == undefined) {
      url = `https://mhack-backend.onrender.com/chats`;
    } else {
      url = `https://mhack-backend.onrender.com/chats?id=${id}`;
    }
    axios.get(url).then((res) => {
      SetChats(res.data);
      let chat = res.data[0];
      if (id == undefined) {
        navigate(`/chat/${chat.id}`);
      }
    });
  }, []);

  React.useEffect(() => {
    if (id != undefined) {
      axios
        .get(`https://mhack-backend.onrender.com/chat/${id}`)
        .then((res) => {
          setMessages(res.data);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            axios.get(`https://mhack-backend.onrender.com/chats`).then((res) => {
              SetChats(res.data);
              let chat = res.data[0];
              navigate(`/chat/${chat.id}`);
            });
          }
        });
    }
  }, [id]);

  const send_message = (input: string) => {
    if (input.length) {
      setMessages((prevMessages: any) => [
        ...prevMessages,
        {
          content: input.trim(),
          ai_response: false,
          chat_id: id,
          created: new Date(),
        },
      ]);

      axios
        .post(`https://mhack-backend.onrender.com/chat/${id}`, { message: input.trim() })
        .then((res) => {
          setMessages((prevMessages: any) => [...prevMessages, res.data]);
          if (res.data.tool == 'Znajdź lub pokaż zakładkę') {
            if (res.data.page == 'punkty_karne') {
              navigate('/punkty');
            }
          }
        })
        .catch((err) => {
          setMessages((prevMessages: any) => [
            ...prevMessages,
            {
              content: 'Przepraszam ale nie jestem w stanie CI pomóc.',
              ai_response: true,
              chat_id: id,
              created: new Date(),
              tool: '',
            },
          ]);
        });
    }
  };

  return (
    <section className="chat-page__container">
      <ChatMenu />
      <ChatBody messages={messages} />
      <ChatInput setMessages={setMessages} messages={messages} send_message={send_message} />
    </section>
  );
};

const mapStateToProps = (state: {
  chatsData: {
    chats: [];
  };
}) => {
  return { chatsData: state.chatsData };
};

const connector = connect(mapStateToProps, {
  SetChats,
});

export default connector(ChatPage);

// const mapStateToProps = (state: {
//   chatData: {
//     chats: [];
//   };
// }) => {
//   return {
//     chatData: state.chatData,
//   };
// };

// const connector = connect(mapStateToProps, {
//   AddMessage,
//   AddNewChat,
// });

// export default connector(ChatInput);
