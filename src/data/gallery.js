const images = import.meta.glob(
  "../assets/images/gallery/*.{jpg,jpeg,png,webp}",
  {
    eager:true,
    import:"default"
  }

);

export const galleryImages =Object.entries(images).map(
  ([Path2D,image] ,index) => ({
    id:index +1,
    image,
    title : Path2D.split("/").pop().split(".")[0],
  })
);