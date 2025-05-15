import { useNavigate } from 'react-router';

export const About = () => {
  const navigate = useNavigate();
  navigate('/about', { replace: true });
  return <div></div>;
};
