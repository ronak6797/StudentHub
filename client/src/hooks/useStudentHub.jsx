import { useContext } from "react";
import { StudentHubContext } from "../../provider/Provider";

const useStudentHub = () => {
  return useContext(StudentHubContext);
};

export default useStudentHub;