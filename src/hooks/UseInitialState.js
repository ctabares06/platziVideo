import { useState, useEffect } from 'react';

const useInitialState = (Api) => {
  const [videos, setVideos] = useState({ 'mylist': [], 'trends': [], 'originals': [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(Api)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setVideos(data);
          setIsLoading(true);
        }, 2000);
      });
  }, []);

  return [videos, isLoading];
};

export default useInitialState;
