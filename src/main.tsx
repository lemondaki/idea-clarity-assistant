import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ConfigProvider } from 'antd';
import { AssistantProvider } from './context/AssistantProvider.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#ccc'
      }
    }}
  >
    <AssistantProvider>
      <App />
    </AssistantProvider>
  </ConfigProvider>
);
