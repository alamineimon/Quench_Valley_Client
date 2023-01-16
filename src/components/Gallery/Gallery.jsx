import React from 'react'
import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "https://i.ibb.co/QbLT7Tj/pablo-merchan-montes-0n-T08-Z-Mhi-E-unsplash.jpg", width: 800, height: 600 },
  { src: "https://i.ibb.co/pZsxYk7/mario-raj-Fi-Eq-b-XZMY-unsplash.jpg", width: 600, height: 300 },
  { src: "https://i.ibb.co/Ltcs32b/zhifei-zhou-Bib-M3dmlw9-I-unsplash.jpg", width: 400, height: 600 },
  { src: "https://i.ibb.co/5htrRPg/shreyak-singh-g-FB1-IPm-H6-RE-unsplash.jpg", width: 600, height: 700 },
  { src: "https://i.ibb.co/dpGY6Tm/eaters-collective-ESmxug33-C0c-unsplash.jpg", width: 800, height: 600 },
  { src: "https://i.ibb.co/WPJjfMS/brooke-lark-IDTEXXXf-S44-unsplash.jpg", width: 600, height: 900 },
  { src: "https://i.ibb.co/YN02c70/artem-beliaikin-TSS-1aqo-RXE-unsplash.jpg", width: 1200, height: 600 },
  { src: "https://i.ibb.co/kyMPg0G/alex-munsell-Yr4n8-O-3-UPc-unsplash.jpg", width: 600, height: 900 },
];
const Gallery = () =>  <div className='mb-12 px-5 pt-12'>
  <p className='text-4xl uppercase text-bold text-center mb-6'>Our Photo Gallery</p>
  <PhotoAlbum layout="rows" photos={photos} />
</div>

export default Gallery