
import React from 'react';
function Imageslider()
{
  return ( 
    <div>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://w0.peakpx.com/wallpaper/270/399/HD-wallpaper-merry-christmas-12-holiday-santa.jpg" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://png.pngtree.com/thumb_back/fh260/background/20231017/pngtree-dancing-stars-happy-new-year-holiday-background-with-painting-fireworks-image_13943160.jpg" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_Qu7K6OOiSW2ey_QiMGO8oCBiIbQneeF1Q&usqp=CAU" class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}
export default Imageslider