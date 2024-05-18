import { useEffect, useState } from "react";
import { ExhibitAPI } from "../apis/ExhibitAPI";

function TestSelector() {
  const [exhibitListLoading, setExhibitListLoading] = useState(false);
  const [exhibitList, setExhibitList] = useState([]);
  const [selectedExhibitName, setSelectedExhibitName] = useState();
  const [selectedExhibit, setSelectedExhibit] = useState();

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

  useEffect(() => {
    if (selectedExhibitName) {
      // enabling request cancellation
      ExhibitAPI.get(selectedExhibitName, true).then((exhibit) => {
        setSelectedExhibit(exhibit);
      });
    }
  }, [selectedExhibitName]);

  console.log(exhibitList)

  return (
    <div style={{ textAlign: "center", maxWidth: "600px", margin: "auto" }}>
        <div>
          <div
            value={selectedExhibitName}
            onChange={(e) => {
              setSelectedExhibitName(e.target.value);
            }}
          >
            {exhibitList.map((exhibit) => {
              return (
                <input type="radio" value={exhibit.name} key={exhibit.name}>
                  {exhibit.name}
                </input>
              );
            })}
          </div>
          {selectedExhibit && (
            <div style={{ marginTop: "20px" }} title={selectedExhibit.name}>
              {selectedExhibit.sprites.front_default && (
                <img
                  src={selectedExhibit.sprites.front_default}
                  alt={selectedExhibit.name}
                />
              )}
            </div>
          )}
        </div>
      </div>
  );
}

export default TestSelector;