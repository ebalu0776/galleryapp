const ThumbnailItem = props => {
  const {imageDetails, clickImageItem} = props
  const {
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
    id,
  } = imageDetails
  const onImageClick = () => {
    clickImageItem(id)
  }
  return (
    <div className="thumbnail-container">
      <li>
        <img src={imageUrl} alt={imageAltText} className="thumbnail-alt-text" />
        <li>
          <button type="button" className="button" onClick={onImageClick}>
            <img
              src={thumbnailUrl}
              alt={thumbnailAltText}
              className="thumbnail-alt-text"
            />
          </button>
        </li>
      </li>
    </div>
  )
}
export default ThumbnailItem
