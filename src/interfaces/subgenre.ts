export interface SubgenreType {
  id: string;
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
