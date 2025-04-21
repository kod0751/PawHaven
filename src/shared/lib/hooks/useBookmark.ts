import { useEffect, useState } from 'react';
import { AnimalData } from '../../api/types';

export function useBookmark(data: AnimalData) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const existingBookmarks = JSON.parse(
      localStorage.getItem('bookmarkedAnimals') || '[]'
    );
    const bookmarked = existingBookmarks.some(
      (item: AnimalData) => item.ABDM_IDNTFY_NO === data.ABDM_IDNTFY_NO
    );
    setIsBookmarked(bookmarked);
  }, [data.ABDM_IDNTFY_NO]);

  const toggleBookmark = () => {
    const existingBookmarks = JSON.parse(
      localStorage.getItem('bookmarkedAnimals') || '[]'
    );
    let updatedBookmarks;

    if (isBookmarked) {
      updatedBookmarks = existingBookmarks.filter(
        (item: AnimalData) => item.ABDM_IDNTFY_NO !== data.ABDM_IDNTFY_NO
      );
    } else {
      updatedBookmarks = [...existingBookmarks, data];
    }

    localStorage.setItem('bookmarkedAnimals', JSON.stringify(updatedBookmarks));
    setIsBookmarked(!isBookmarked);
  };

  return { isBookmarked, toggleBookmark };
}
