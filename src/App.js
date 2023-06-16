import ImageSlider from "./ImageSlider";
const App = () => {
  const slides = [
    { url: "http://localhost:300/image-1.jpg", title:"Mountain"}, 
    { url: "http://localhost:300/image-2.jpg", title:"Shop"},
    { url: "http://localhost:300/image-3.jpg", title:"Table"},
    { url: "http://localhost:300/image-4.jpg", title:"Dog"},
    { url: "http://localhost:300/image-5.jpg", title:"Science"},
  ];
  return (
    <div>
      <h1>Carousel</h1>
      <ImageSlider slides={slides}/>
    </div>
  );
}

export default App;
