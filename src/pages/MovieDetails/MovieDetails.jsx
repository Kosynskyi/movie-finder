import React, { Suspense } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import Loader from 'components/Loader';
import { getMovieDetailsById, getMovieVideo } from 'services/API/API';
import { ReactComponent as YouTubeIcon } from '../../assets/Youtube_icon-icons.com_66802.svg';
import { Box } from 'components/Box';
import Modal from 'components/Modal';
import {
  StyledLinkGoBack,
  Image,
  Title,
  Text,
  SecondaryTitle,
  GenresList,
  GenreItem,
  TextOverview,
  AdditionalList,
  AdditionalLink,
  AdditionalItem,
  Wrapper,
  ButtonIcon,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetailsById(movieId).then(setMovie);
    getMovieVideo(movieId).then(response => {
      const arrWithTrailerKey = response.find(
        item => item.type.toLowerCase() === 'trailer'
      );
      return setTrailerKey(arrWithTrailerKey.key);
    });
  }, [movieId]);

  if (!movie) return;

  const { backdrop_path, title, vote_average, overview, genres } = movie;
  const backLinkHref = location.state?.from ?? '/';

  const links = [
    { id: 1, name: 'Cast' },
    { id: 2, name: 'Reviews' },
  ];

  const openModal = () => {
    setIsOpenModal(prev => !prev);
  };

  const closeModal = () => {
    setIsOpenModal(prev => !prev);
  };

  return (
    <Box as="section" pt={6} display="flex" flexDirection="column">
      <StyledLinkGoBack to={backLinkHref}>
        <BiArrowBack />
        {'  '}Go back
      </StyledLinkGoBack>

      <Wrapper>
        <Box mr={4} mb={4} position="relative">
          <Image
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            alt={`logo of the film ${title}`}
            width="340"
          />{' '}
          <ButtonIcon onClick={openModal}>
            <YouTubeIcon />
          </ButtonIcon>
        </Box>

        <Box>
          {isOpenModal && (
            <Modal closeModal={closeModal}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailerKey}`}
                width="80vw"
                controls={true}
              />
            </Modal>
          )}

          <Title>{title}</Title>
          <Text>User score: {Math.floor(vote_average * 10)}%</Text>
          <SecondaryTitle>Genres</SecondaryTitle>
          <GenresList>
            {genres.map(({ name }) => (
              <GenreItem key={name}>
                <p>{name}</p>
              </GenreItem>
            ))}
          </GenresList>
        </Box>
      </Wrapper>

      <SecondaryTitle>Overview</SecondaryTitle>
      <TextOverview>{overview}</TextOverview>

      <SecondaryTitle>Additional information</SecondaryTitle>
      <AdditionalList>
        {links.map(({ id, name }) => (
          <AdditionalItem key={id}>
            <AdditionalLink to={name} state={{ from: location.state.from }}>
              {name}
            </AdditionalLink>
          </AdditionalItem>
        ))}
      </AdditionalList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default MovieDetails;
