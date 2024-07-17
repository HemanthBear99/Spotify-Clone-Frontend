import NavBar from "./NavBar"
import { albumsData } from "../assets/assets"
import { songsData } from "../assets/assets"
import AlbumItem from "./AlbumItem"
import SongItem from "./SongItem"

const DisplayHome = () => {
  return (
    <>
      <NavBar />
      <div className=" my-4 ">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((album, index) => (
            <AlbumItem
              key={index}
              name={album.name}
              description={album.description}
              id={album.id}
              image={album.image}
            />
          ))}
        </div>
      </div>
      <div className=" my-4 ">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((song, index) => (
            <SongItem
              key={index}
              name={song.name}
              description={song.description}
              id={song.id}
              image={song.image}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
