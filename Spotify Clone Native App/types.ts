export type BottomNavParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
  Premium: undefined;
};

export type BaseStackParamList = {
  Base: undefined;
  Details: { id: string; } | undefined;
};

export type album = { 
  id: string; 
  imageURL: string; 
  artists: string; 
};

export type song = {
  id: string;
  imageURL: string;  
  title: string; 
  artist: string; 
};