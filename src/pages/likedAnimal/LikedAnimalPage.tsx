import { useEffect, useState } from 'react';
import AnimalList from '../../features/animalList/ui/AnimalList';

export default function LikedAnimalPage() {
  const [bookmarkedData, setBookmarkedData] = useState([]);

  useEffect(() => {
    const bookmarks = JSON.parse(
      localStorage.getItem('bookmarkedAnimals') || '[]'
    );
    setBookmarkedData(bookmarks);
  }, []);

  return (
    <div>
      <AnimalList animals={bookmarkedData} pageType="liked" />
    </div>
  );
}
