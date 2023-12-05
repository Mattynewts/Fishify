import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ForceRender = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to '/dashboard' after component is mounted
    console.log("rendered");
    navigate('/dashboard');
  }, [navigate]);
};

export default ForceRender;
