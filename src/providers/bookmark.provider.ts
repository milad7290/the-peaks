let bookmarkKey = "bookmarks";
export const addToBookmark = (bookmarkId: string): void => {
  const bookmarks = getBookmarks();
  const index = bookmarks.indexOf(bookmarkId);
  if (index === -1) {
    bookmarks.push(bookmarkId);
  }

  localStorage.setItem(bookmarkKey, JSON.stringify(bookmarks));
};

export const removeBookmark = (bookmarkId: string): void => {
  const bookmarks = getBookmarks();

  const index = bookmarks.indexOf(bookmarkId);
  if (index !== -1) {
    bookmarks.splice(index, 1);
  }

  localStorage.setItem(bookmarkKey, JSON.stringify(bookmarks));
};

export const checkForBookmark = (bookmarkId: string): boolean => {
  const bookmarks = getBookmarks();

  const index = bookmarks.indexOf(bookmarkId);

  return index !== -1;
};

export const getBookmarks = (): string[] => {
  let bookmarks = JSON.parse(
    localStorage.getItem(bookmarkKey) || "[]"
  ) as string[];
  return bookmarks;
};
