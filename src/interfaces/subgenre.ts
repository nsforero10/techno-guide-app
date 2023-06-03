export default interface ISubgenre {
  id: number;
  name: string;
  description: string;
  linkPlaylist: string;
  colors: {
    background: string;
    title: string;
  };
  bpmRange: {
    min: number;
    max: number;
  };
  artist: string[];
}
