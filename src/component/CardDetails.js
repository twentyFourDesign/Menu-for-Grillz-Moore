import React, { useEffect, useState, useRef } from "react";
import image from '../image/tabIcon.png'

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

const List = ({ items, title, serveWidth }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const ref = useRef();

  const handleItemClick = (item) => {
    setOpenModal(true);
    setSelectedData(item);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  useOnClickOutside(ref, handleClose);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);

  return (
    <div className="details-container">
      <div className="details-header">
          <img className="card-image" src={image} alt="logo" />
          <p>{title}</p>
      </div>
      <div className="list-container">
        {items.map((item, index) => (
          <div
            key={index}
            className="list-item"
            onClick={() => handleItemClick(item)}
          >
            <div className="item-name">{item.title}  { item?.sausage ? ` sausage (${item?.sausage})`: '' }</div>
            <div className="item-line">
              <hr></hr>
            </div>
            <div className="item-price">{item.price?.toLocaleString()}</div>
            </div>
        ))}
        {
          serveWidth && <p className="serve-with">Served with French fries or Yam chips</p> 
        }
        
      </div>
      {openModal && (
        <div className="popup">
          <div className="popup-inner" ref={ref}>
            <div className="popup-header">
              <div className="selected-item-name">{selectedData.title}</div>
              <button className="popup-close" onClick={handleClose}>
                &times;
              </button>
            </div>
            <div className="popup-content">
              <div className="popup-price">{openModal.price}</div>
              <div className="popup-description">
                <div className="selected-list-container">
                  <img
                    src={selectedData.image}
                    className="select-item-image"
                    alt={selectedData.title}
                  />
                  <p className="food-description">{selectedData.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
