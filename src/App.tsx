import './App.css';
import GptResponse from './components/MainAssitant/GptResponse/GptResponse';
import Header from './components/Header/Header';
import UserInput from './components/MainAssitant/UserInput/UserInput';
import Footer from './components/Footer/Footer';
import SuggestItem from './components/MainAssitant/SuggestItem/SuggestItem';
import { useAssistantContext } from './context/AssistantProvider';
import { Spin } from 'antd';
import { useEffect, useRef } from 'react';
function App() {
  const conversationEndRef = useRef<HTMLDivElement>(null);
  const {
    state: { dataConversation, historyConversation, generateResponse, suggestIdeas, isLoading }
  } = useAssistantContext();
  useEffect(() => {
    if (conversationEndRef.current) {
      conversationEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [dataConversation, historyConversation, generateResponse]);
  return (
    <div className='main-app'>
      <Header />
      <div className='main-content'>
        {dataConversation.length
          ? dataConversation.map((d) => (
              <div key={d.id}>
                <UserInput question={d.userInput}></UserInput>
                <GptResponse response={d.gptResponse}></GptResponse>
              </div>
            ))
          : ''}
        <div ref={conversationEndRef} />
        {!dataConversation.length && (
          <div className='backdrop'>
            <span></span>
            <div className='box-center'>
              <h2 className='label-chatgpt'>ChatGPT</h2>
              <img className='avatarRole' src='../icons/chatgpt.png' alt='avatar chatgpt' />
            </div>
            <div className='suggestion'>
              {!isLoading && suggestIdeas.map((suggest, id) => <SuggestItem key={id} suggest={suggest} />)}
            </div>
          </div>
        )}
        {isLoading && (
          <div className='main-loading'>
            <Spin />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
