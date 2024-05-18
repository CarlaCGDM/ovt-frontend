import { useEffect, useState } from "react";
import { ExhibitAPI } from "../apis/ExhibitAPI";

function TestSelector() {
  const [exhibitListLoading, setExhibitListLoading] = useState(false);
  const [exhibitList, setExhibitList] = useState([]);

  useEffect(() => {
    setExhibitListLoading(true);

    ExhibitAPI.get()
      .then((exhibitList) => {
        setExhibitList(exhibitList);
        setSelectedExhibitName(exhibitList[0]?.name);
      })
      .finally(() => {
        setExhibitListLoading(false);
      });
  }, []);

  console.log(exhibitList)

  return (
    <>
        <div>Hello.</div>
    </>
  );
}

export default TestSelector;