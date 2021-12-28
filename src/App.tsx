import { useEffect, useState } from 'react';
import { SideBar } from './components/SideBar';

// import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { Content } from './components/Content';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {

  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
     <SideBar id={selectedGenreId} name= {selectedGenre.name} title= {selectedGenre.title} updateId={setSelectedGenreId} updateGenre = {setSelectedGenre}/>
     <Content id={selectedGenreId} name= {selectedGenre.title} />
      
    </div>
  )
}