import MapViewer from "./components/map-viewer";
import { MapWrapper } from "./components/map-wrapper";

/*
  Here we going to use external google library
*/

export default function WorldmapPage() {
  return (
    <MapWrapper>
      <MapViewer />
    </MapWrapper>
  );
}
