const useOpenMe = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return {
    openInNewTab
  }
};

export default useOpenMe;
