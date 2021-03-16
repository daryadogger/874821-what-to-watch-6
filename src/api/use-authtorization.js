import {useSelector} from "react-redux";

const useAuthtorization = () => {
  const authorizationStatus = useSelector(({USER}) => typeof USER.userProfile.id !== `undefined`);
  return authorizationStatus;
};

export default useAuthtorization;
