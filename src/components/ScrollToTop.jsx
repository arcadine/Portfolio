import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // scroll to hash section if hash is present
    if (hash) return

    // scroll to top on normal route change
    window.scrollTo({top: 0, left: 0, behavior: 'instant'})
  }, [pathname, hash])

  return null;
}

export default ScrollToTop;