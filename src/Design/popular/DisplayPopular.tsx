import React, { ReactElement } from "react";
import Chat from "./categories/Chat";
import Post from "./categories/Post";
import Podcast from "./categories/Podcast";
import Song from "./categories/Song";

export default function DisplayPopular(): ReactElement {
  return (
    <>
      <Podcast></Podcast>
      <Chat></Chat>
      <Post></Post>
      <Song></Song>
    </>
  );
}
