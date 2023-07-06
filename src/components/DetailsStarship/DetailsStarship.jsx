import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Pilots } from '../ListPilots/ListPilots';
import { Films } from '../ListMovies/ListMovies';
import notFound from '../../assets/img/404NotFound.jpg';
import { Card, Container, Img, Info, InfoP, PilotP, Section, StarshipContainer, Title, TitlePilots } from './DetailsStarshipStyled';

export const Starship = () => {
  let { id } = useParams();
  const API_URL = `https://swapi.dev/api/starships/${id}/`;
  const img = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
  // TODO: crear JSON con la información de cada nave...
  const [starship, setStarship] = useState([]);
  const [pilots, setPilots] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((data) => data.json())
      .then((data) => {
        setStarship(data);
        setPilots(data.pilots);
        setFilms(data.films);
      });
    window.scrollTo(0, 0);
  }, [API_URL]);

  return (
    <StarshipContainer key="starship container">
      <Card key="starship container">
        <Img
          src={img}
          alt={starship.name}
          onError={(data) => {
            data.target.onerror = null;
            data.target.src = notFound;
          }}
        />
        <Title>{starship.name}</Title>
        <Section>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum atque iure delectus neque.
          Debitis corrupti autem voluptate dolorem rerum aperiam velit distinctio libero illum quos
          fugit placeat vel, tempora recusandae dignissimos quam eius tenetur! Incidunt
          reprehenderit voluptatem hic accusamus fuga?
        </Section>
        <Info>
          <InfoP>Model: {starship.model}</InfoP>
          <InfoP>Manufacturer: {starship.manufacturer}</InfoP>
          <InfoP>Class: {starship.starship_class}</InfoP>
          <InfoP>Passengers: {starship.passengers}</InfoP>
          <InfoP>Cost in credits: {starship.cost_in_credits} credits</InfoP>
          <InfoP>Atmospheric Speed: {starship.max_atmosphering_speed}km/h</InfoP>
          <InfoP mglt={starship.MGLT}>MGLT: {starship.MGLT}</InfoP>
          <InfoP>Length: {starship.length}m</InfoP>
          <InfoP>Cargo Capacity: {starship.cargo_capacity} metric tons</InfoP>
          <InfoP>Minimum crew: {starship.crew}</InfoP>
        </Info>
        <TitlePilots color="#daa520">Pilots</TitlePilots>
        <Container>
          {pilots.length > 0 ? (
            pilots.map((url) => {
              const id = url.substring(29, url.length - 1);
              return <Pilots id={id} />;
            })
          ) : (
            <PilotP>This ship has no pilots, it is drifting...</PilotP>
          )}
        </Container>
        <TitlePilots color="#3F3B6C">Films</TitlePilots>
        <Container>
          {films.length > 0 ? (
            films.map((url) => {
              const id = url.substring(28, url.length - 1);
              return <Films url={url} id={id} />;
            })
          ) : (
            <p>This ship has no pilots, it is drifting...</p>
          )}
        </Container>
      </Card>
    </StarshipContainer>
  );
};