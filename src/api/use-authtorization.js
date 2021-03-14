import {useSelector} from "react-redux";

const useAuthtorization = () => {
  const authorizationStatus = useSelector((state) => state.userProfile.id);

  if (authorizationStatus) {
    return true;
  } else {
    return false;
  }
};

export default useAuthtorization;
