import { useEffect, useState } from 'react';
import AnimalList from '../../features/animalList/ui/AnimalList';
import SEO from '../../shared/ui/SEO';

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
      <SEO
        title="Like"
        description="즐겨찾기 했던 동물들을 다시 볼 수 있어요!~"
        keywords="유기동물, 유기견, 유기묘, 기타축종"
      />
      <AnimalList animals={bookmarkedData} pageType="liked" />
    </div>
  );
}
