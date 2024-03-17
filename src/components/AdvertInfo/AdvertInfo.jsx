import PropTypes from "prop-types";

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
  RentBtn,
  AccentText,
  PropertyList,
  PropertyListItem,
} from "./AdverInfo.styled";
import { useState } from "react";

export const AdvertInfo = ({ car }) => {
  const carAddress = car.address.split(", ");
  const conditions = car.rentalConditions.split("\n");
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  const defaultFoto =
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";

  const image = !imageError ? car.img : defaultFoto;

  return (
    <AdvertListItem>
      <AdvertItemImg
        src={image}
        alt={car.model}
        onError={handleImageError}
      ></AdvertItemImg>
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
