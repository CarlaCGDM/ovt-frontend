import { useEffect, useState } from "react";
import { ExhibitAPI } from "../apis/ExhibitAPI";

function TestAPICall() {
  const [exhibitList, setExhibitList] = useState([]);

  useEffect(() => {
    ExhibitAPI.getAll()
      .then((response) => {
        setExhibitList(response.data);
        console.log(exhibitList);
      }).catch(error => {
        console.error(error)
      })
  }, []);

  return (
    <>
    </>
  );
}

export default TestAPICall;