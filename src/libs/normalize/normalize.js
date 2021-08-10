const Normalize = (itemArray) => {
  if (!Array.isArray(itemArray)) {
    return null;
  }

  const normalizedData = itemArray.reduce(
    (prevItem, item) => {
      const videoId = item.id.videoId;
      prevItem.videoIds.push(videoId);
      prevItem[videoId] = {
        videoId: videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.default.url,
        channelTitle: item.snippet.channelTitle,
        like: false,
      };
      return prevItem;
    },
    { videoIds: [] }
  );

  normalizedData.size = normalizedData.videoIds.length;
  return normalizedData;
};

export { Normalize };
