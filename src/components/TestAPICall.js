import { useEffect, useState } from "react";
import { ExhibitAPI } from "../apis/ExhibitAPI";

function TestAPICall() {
  const [exhibitList, setExhibitList] = useState([]);

  useEffect(() => {
    ExhibitAPI.getAll()
      .then((exhibitList) => {
        setExhibitList(exhibitList);
      })
  }, []);

  useEffect(() => {
    console.log(exhibitList)
  }, [exhibitList]);

  return (
    <>
    </>
  );
}

export default TestAPICall;