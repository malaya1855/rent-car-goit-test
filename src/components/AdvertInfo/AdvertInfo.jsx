import PropTypes from "prop-types";

import { Heart } from "react-feather";
import {
  PropertyTitle,
  AdvertItemImg,
  AdvertListItem,
  CarHeadItem,
  CarInfo,
  CarInfoItem,
  CarInfoList,
  CarModel,
  CarTitle,
  Decscription,
  FavoriteBtn,
  HeartSvg,
  RentBtn,
  AccentText,
  PropertyList,
  PropertyListItem,
} from "./AdverInfo.styled";
import { useDispatch, useSelector } from "react-redux";
import { favoritesSelector } from "../../redux/favorites/favoritesSelector";
import {
  addFavorites,
  removeFavorites,
} from "../../redux/favorites/favoritesSlice";

export const AdvertInfo = ({ car }) => {
  const favoriteAdverts = useSelector(favoritesSelector) || [];
  const carIsFavorite = favoriteAdverts.some(
    (favoriteAdvert) => favoriteAdvert.id === car.id
  );
  const dispatch = useDispatch();
  const onHandleClickFavorite = () => {
    if (!carIsFavorite) {
      dispatch(addFavorites(car));
    } else {
      dispatch(removeFavorites(car.id));
    }
  };
  const carAddress = car.address.split(", ");
  const conditions = car.rentalConditions.split("\n");
  return (
    <AdvertListItem>
      <FavoriteBtn type="button" onClick={onHandleClickFavorite}>
        <HeartSvg as={Heart} className={!carIsFavorite ? "" : " favorite"} />
      </FavoriteBtn>
      <AdvertItemImg src={car.img} alt={car.model}></AdvertItemImg>
      <CarHeadItem>
        <CarTitle>
          {car.make} <CarModel>{car.model}</CarModel>, {car.year}
        </CarTitle>
      </CarHeadItem>

      <CarInfo>
        <CarInfoList>
          <CarInfoItem>{carAddress[1]}</CarInfoItem>
          <CarInfoItem>{carAddress[2]}</CarInfoItem>
          <CarInfoItem>Id: {car.id}</CarInfoItem>
          <CarInfoItem>Year: {car.year}</CarInfoItem>
          <CarInfoItem>Type: {car.type}</CarInfoItem>
        </CarInfoList>

        <CarInfoList>
          <CarInfoItem>Fuel Consumption: {car.fuelConsumption}</CarInfoItem>
          <CarInfoItem>Engine size: {car.engineSize}</CarInfoItem>
        </CarInfoList>
      </CarInfo>
      <Decscription>{car.description}</Decscription>
      <PropertyTitle>Accessories and functionalities:</PropertyTitle>
      <CarInfo>
        <CarInfoList>
          {car.accessories.map((item) => (
            <CarInfoItem key={item}>{item}</CarInfoItem>
          ))}
        </CarInfoList>
        <CarInfoList>
          {car.functionalities.map((item) => (
            <CarInfoItem key={item}>{item}</CarInfoItem>
          ))}
        </CarInfoList>
      </CarInfo>
      <PropertyTitle>Rental Conditions:</PropertyTitle>
      <PropertyList>
        {conditions.map((item) => (
          <PropertyListItem key={item}>
            {item.includes(":") ? (
              <>
                <span>{item.split(":")[0]}</span>
                <span>:</span>
                <AccentText>{item.split(":")[1]}</AccentText>
              </>
            ) : (
              item
            )}
          </PropertyListItem>
        ))}
        <PropertyListItem>
          Mileage:{" "}
          <AccentText>{car.mileage.toLocaleString("en-US")}</AccentText>
        </PropertyListItem>
        <PropertyListItem>
          Price: <AccentText>{car.rentalPrice}</AccentText>
        </PropertyListItem>
      </PropertyList>
      <RentBtn href="tel:+380730000000">Rental Car</RentBtn>
    </AdvertListItem>
  );
};

AdvertInfo.propTypes = {
  car: PropTypes.object.isRequired,
};