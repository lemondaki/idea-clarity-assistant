import { useEffect, useState } from 'react';
import { useAssistantContext } from '../../../context/AssistantProvider';
import { generateResponse } from '../../../context/AssistantAction';

const GptResponse = ({ response }: { response: string }): JSX.Element => {
  const [responseText, setResponseText] = useState(response);
  const { dispatch } = useAssistantContext();
  function typeResponse() {
    let i = 0;
    const interval = setInterval(function () {
      if (i <= response.length) {
        setResponseText(response.slice(0, i));
        dispatch(generateResponse(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  }
  useEffect(() => {
    typeResponse();
  }, []);
  return (
    <div className='box-response'>
      <img className='avatarRole' src='../../../../icons/icon-gpt.png' alt='avatar gpt' />
      <div className='text-message'>{responseText}</div>
    </div>
  );
};

export default GptResponse;
