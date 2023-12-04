import { RoleType } from '../interface/interface';
const API_GPT_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
export const getDataResponseApi = async function (conversation: RoleType[]) {
  const res = await fetch(API_GPT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: conversation
    })
  });
  const data = await res.json();
  return data.choices[0].message.content;
};
