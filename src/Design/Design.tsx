import React, { ReactElement } from "react";
import styled from "styled-components";
import {
  faCog,
  faBell,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./header/Header";
import Nav from "./header/Nav";
import Hero from "./hero/Hero";
import CatCardsContainer from "./categorie/CatCardsContainer";
import DisplayPopular from "./popular/DisplayPopular";
import DisplayProposals from "./proposals/DisplayProposals";
import DisplayBottomNav from "./bottom-nav/DisplayBottomNav";
import UserInfos from "./UserInfos";
import Counter from "../counter/Counter";
import SearchForm from "../SearchForm/SearchForm";

const SearchBar = styled.div`
  height: 6vh;
  margin: 1.2rem;
  border-radius: 0.5em;
  background: var(--white);
  display: flex;
  align-content: center;
  align-items: center;
  color: var(--black);
  justify-content: flex-start;
  padding: 0 2rem;
`;

const Search = styled.input`
  background: var(--white);
  color: var(--dark-grey);
  font-family: Raleway;
  width: 300px;
  outline: none;
  border: none;
  padding-left: 2rem;
`;

export default function Design(): ReactElement {
  return (
    <div>
      <Header></Header>
      <SearchBar>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <Search placeholder="Rechercher sur l'application"></Search>
      </SearchBar>
      <Hero></Hero>
      <CatCardsContainer></CatCardsContainer>
      <DisplayProposals></DisplayProposals>
      <DisplayPopular></DisplayPopular>
      <UserInfos></UserInfos>
      <DisplayBottomNav></DisplayBottomNav>
      <Counter></Counter>
      <SearchForm></SearchForm>
    </div>
  );
}
