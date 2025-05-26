import { useNavigate } from 'react-router';

export const About = () => {
  const navigate = useNavigate();
  navigate('/about', { replace: true });
  window.location.replace('/about');
  return <div></div>;
};

