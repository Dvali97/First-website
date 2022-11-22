import "./Slideshow.css";
import ImageSlider from "./ImageSlider";

const Slideshow = () => {
  const slides = [
    {
      url: "https://s7.vcdn.biz/static/f/5176056211/image.jpg/pt/r0x0x4",
      title: "Fall"
    },
    {
      url: "https://s5.vcdn.biz/static/f/5045553041/image.jpg/pt/r0x0x4",
      title: "Elvis"
    },
    {
      url: "https://s5.vcdn.biz/static/f/5061148511/image.jpg/pt/r0x0x4",
      title: "Diana"
    },
    {
      url: "https://s2.vcdn.biz/static/f/4652270021/image.jpg/pt/r0x0x4",
      title: "Batman"
    },
    {
      url: "https://s3.vcdn.biz/static/f/4892575431/image.jpg/pt/r0x0x4",
      title: "Ghost Army"
    }
  ];

  return (
    <div>
      <div className='containerStyles'>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Slideshow;
