import { useNavigate } from "react-router-dom";

const HandleGoClick = () => {
  const navigate = useNavigate();
  console.log("Go clicked");
  return navigate("/start");
};

export { HandleGoClick };
