import { useEffect, useState } from "react";
import { ExhibitAPI } from "../apis/ExhibitAPI";

function TestAPICall() {
  const [exhibitList, setExhibitList] = useState([]);

  useEffect(() => {
    ExhibitAPI.getAll()
      .then((response) => {
        setExhibitList(response.data);
      }).catch(error => {
        console.error(error)
      })
  }, []);

  useEffect(() => {
    console.log(exhibitList)
  }, [exhibitList]);

  return (
    <>
        <div>Hello.</div>
    </>
  );
}

export default TestSelector;