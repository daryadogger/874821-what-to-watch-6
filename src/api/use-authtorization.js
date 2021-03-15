import {useSelector} from "react-redux";

const useAuthtorization = () => {
  const authorizationStatus = useSelector((state) => typeof state.userProfile.id !== `undefined`);
  return authorizationStatus;
};

export default useAuthtorization;
