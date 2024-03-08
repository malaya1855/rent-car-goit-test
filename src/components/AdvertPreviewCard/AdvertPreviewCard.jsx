import PropTypes from "prop-types";
import {
  AdvertItemImg,
  AdvertListItem,
  CarHeadItem,
  CarInfo,
  CarInfoItem,
  CarInfoList,
  CarTitle,
  FavoriteBtn,
  HeartSvg,
  LearnMoreBtn,
} from "./AdvertPreviewCard.styled";
import { Heart } from "react-feather";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../../redux/favorites/favoritesSlice";
import { favoritesSelector } from "../../redux/favorites/favoritesSelector";

export const AdvertPreviewCard = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const favoriteAdverts = useSelector(favoritesSelector) || [];
  const carIsFavorite = favoriteAdverts.some(
    (favoriteAdvert) => favoriteAdvert.id === car.id
  );
  const dispatch = useDispatch();
  const carAddress = car.address.split(", ");
  const carType = car.type.split(", ");
  const onOpenModel = () => {
    setIsModalOpen(true);
  };
  const onHandleClickFavorite = () => {
    if (!carIsFavorite) {
      dispatch(addFavorites(car));
    } else {
      dispatch(removeFavorites(car.id));
    }
  };
  return (
    <AdvertListItem key={car.id}>
      <FavoriteBtn type="button" onClick={onHandleClickFavorite}>
        <HeartSvg as={Heart} className={!carIsFavorite ? "" : " favorite"} />
      </FavoriteBtn>
      <AdvertItemImg src={car.img} alt={car.model}></AdvertItemImg>
      <CarHeadItem>
        <CarTitle>
          {car.make}, {car.year}
        </CarTitle>
        <CarTitle>{car.rentalPrice}</CarTitle>
      </CarHeadItem>
      <CarInfo>
        <CarInfoList>
          <CarInfoItem>{carAddress[1]}</CarInfoItem>
          <CarInfoItem>{carAddress[2]}</CarInfoItem>
          <CarInfoItem>{car.rentalCompany}</CarInfoItem>
        </CarInfoList>
        <CarInfoList>
          <CarInfoItem>{carType[0]}</CarInfoItem>
          <CarInfoItem>{car.model}</CarInfoItem>
          <CarInfoItem>{car.id}</CarInfoItem>
          <CarInfoItem>{car.accessories[0]}</CarInfoItem>
        </CarInfoList>
      </CarInfo>
      <LearnMoreBtn type="button" onClick={onOpenModel}>
        Learn more
      </LearnMoreBtn>
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          content={car}
          isOpen={isModalOpen}
        />
      )}
    </AdvertListItem>
  );
};

AdvertPreviewCard.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
