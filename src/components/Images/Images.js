import images from "./../../images";
console.log(images)
function Images() {
    return (
        <section className='images'>
            {images.map((image, index) => <img key={index} src={image.src} />)}
        </section>
    );
}
export default Images;