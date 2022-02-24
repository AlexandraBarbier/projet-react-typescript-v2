import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import { BigTitle } from "../ui/Text";
import {
  faCog,
  faBell,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export default function SearchForm(): ReactElement {
  const names = [
    "john",
    "jack",
    "jane",
    "jule",
    "jenny",
    "eric",
    "jessy",
    "marie",
    "michel",
    "fanie",
    "dimitri",
    "damien",
    "dorian",
  ];

  const INIT_VALUE = "";
  const [txt, setTxt] = useState<string>(INIT_VALUE);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTxt(e.target.value);
  };

  //   const result = names
  //     .filter((name) => name.includes(txt))
  //     .map((filteredName) => <li>{filteredName}</li>);

  return (
    <div>
      <BigTitle>Rechercher quelqu'un</BigTitle>
      <SearchBar>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <Search
          placeholder="Rechercher sur l'application"
          value={txt}
          type="text"
          onChange={handleChange}
        ></Search>
      </SearchBar>
      <p>Résultats de la recehrche</p>
      <ul>
        {txt ? (
          names
            .filter((name) => name.includes(txt))
            .map((filteredName) => <li>{filteredName}</li>)
        ) : (
          <li></li>
        )}
      </ul>
    </div>
  );
}
