import React from "react";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./DirectoryItem.styled";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  return (
    <DirectoryItemContainer onClick={() => navigate(route)}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
