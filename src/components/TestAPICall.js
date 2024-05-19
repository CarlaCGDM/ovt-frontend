import { useEffect, useState } from "react";
import { ExhibitAPI } from "../apis/ExhibitAPI";

function TestAPICall() {
  const [exhibitList, setExhibitList] = useState([]);

  useEffect(() => {
    ExhibitAPI.getAll()
      .then((data) => {
        console.log(data)
        setExhibitList(data);
      })
  }, []);

  return (
    <>
        <div>Hello</div>
    </>
  );
}

export default TestAPICall;