import React from "react";
import "./MainSection.css";

interface MainSectionProps {
  selectedStatus: string;
}

const MainSection: React.FC<MainSectionProps> = ({ selectedStatus }) => {
  const indicatorsData: { [key: string]: string[] } = {
    OR: ["1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0", "9.0", "9.7"],
    OCR: ["1.5", "2.5", "3.5", "4.5", "5.5", "6.5", "7.5", "8.5", "9.5", "9.7"],
    CTOR: [
      "1.8",
      "2.8",
      "3.8",
      "4.8",
      "5.8",
      "6.8",
      "7.8",
      "8.8",
      "9.8",
      "9.7",
    ],
    Shown: [
      "1.2",
      "2.2",
      "3.2",
      "4.2",
      "5.2",
      "6.2",
      "7.2",
      "8.2",
      "9.2",
      "9.7",
    ],
    Dismiss: [
      "1.4",
      "2.4",
      "3.4",
      "4.4",
      "5.4",
      "6.4",
      "7.4",
      "8.4",
      "9.4",
      "9.7",
    ],
    Blacklist: [
      "1.6",
      "2.6",
      "3.6",
      "4.6",
      "5.6",
      "6.6",
      "7.6",
      "8.6",
      "9.6",
      "9.7",
    ],
    Delivery: [
      "1.3",
      "2.3",
      "3.3",
      "4.3",
      "5.3",
      "6.3",
      "7.3",
      "8.3",
      "9.3",
      "9.7",
    ],
    Переспам: [
      "1.7",
      "2.7",
      "3.7",
      "4.7",
      "5.7",
      "6.7",
      "7.7",
      "8.7",
      "9.7",
      "9.7",
    ],
    Бюджет: [
      "1000",
      "2000",
      "3000",
      "4000",
      "5000",
      "6000",
      "7000",
      "8000",
      "9000",
      "1000",
    ],
    Даты: [
      "01.01.2024",
      "02.01.2024",
      "03.01.2024",
      "04.01.2024",
      "05.01.2024",
      "06.01.2024",
      "07.01.2024",
      "08.01.2024",
      "09.01.2024",
      "10.01.2024",
    ],
  };

  const statuses = ["Активная", "На паузе", "Закончена"];

  const statusImages = ["/active.png", "/pause.png", "/over.png"];

  const additionalStatusImages: { [key: string]: string } = {
    Афиша: "/af.png",
    Маркет: "/market.png",
    Плюс: "/plus.png",
    Кинопоиск: "/kino.png",
    Музыка: "/music.png",
  };

  const additionalStatuses = Object.keys(additionalStatusImages);

  const filteredBlocks = [...Array(10)]
    .map((_, index) => ({
      index,
      status: statuses[index % 3],

      additionalStatus:
        additionalStatuses[
          Math.floor(Math.random() * additionalStatuses.length)
        ],
    }))
    .filter(
      (block) => selectedStatus === "all" || block.status === selectedStatus
    );

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mb-4">
          <div className="block-container card">
            {filteredBlocks.map(({ index, additionalStatus }) => (
              <div className="block card-body" key={index}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <input type="checkbox" id={`checkbox-${index}`} />
                    <label htmlFor={`checkbox-${index}`}>
                      {index === 0 ? "Кампании" : `Концерт Орлова `}
                    </label>
                  </div>
                  <div className="indicators">
                    {Object.keys(indicatorsData).map((key) => (
                      <div className="indicator-wrapper" key={key}>
                        <div className="indicator-name">
                          {index === 0 ? key : ""}
                        </div>
                        <div className="indicator-value">
                          {index === 0 ? "" : indicatorsData[key][index - 1]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {index !== 0 && (
                  <div className="status-container">
                    <img
                      src={statusImages[index % 3]}
                      alt="Статус"
                      className="status-icon"
                    />
                    <span>{statuses[index % 3]}</span>

                    <img
                      src={additionalStatusImages[additionalStatus]}
                      alt={additionalStatus}
                      className={`additional-status-icon ${additionalStatus}`}
                    />

                    <span>{additionalStatus}</span>
                    {index !== 0 && (
                      <div className="additional-section">
                        <img
                          src="/group.png"
                          alt="Group"
                          className="group-image"
                        />
                        <span className="group-text">121 092</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
