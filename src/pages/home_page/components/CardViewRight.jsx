import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

function CardViewRight({ id, name, description, imageSrc }) {
  const navigate = useNavigate();

  // hàm chuyển qua trang view more page truyền tham số id, name và description
  const handleClick = () => {
    navigate("/viewMorePage", { state: { id, name, description } });
  };



  const [inProp, setInProp] = useState(false);

  //kích hoạt transition 
  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <CSSTransition
      in={inProp} // kiểm tra xem transition có được gọi
      timeout={12000} // thời gian thực hiện transition
      classNames="card_view_right_transition"
      mountOnEnter={true} // xóa component khỏi dom, giúp giảm tải DOM tối ưu hiệu suất
    >
      <div className="container_description_img_view">
        <div className="container_description_view">
          <p className="text_name_view">{name}</p>
          <p className="text_description_view">{description}</p>
          <button className="button_booking" onClick={handleClick}>
            BOOKING
          </button>
        </div>
        <div className="container_image_view">
          <img
            className="img_card_view_right"
            alt="image view"
            src={imageSrc}
          />
        </div>
      </div>
    </CSSTransition>
  );
}

CardViewRight.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default CardViewRight;
