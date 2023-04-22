import { createContext, useContext, useState } from 'react';

const TopicsContext = createContext();

export const useTopic = () => useContext(TopicsContext);

export const TopicsProvider = ({ children }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <TopicsContext.Provider value={{ selectedTopic, setSelectedTopic }}>
      {children}
    </TopicsContext.Provider>
  );
};
