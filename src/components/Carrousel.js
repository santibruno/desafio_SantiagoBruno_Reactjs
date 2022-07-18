import Carousel from 'react-bootstrap/Carousel';

function mainCarousel({ items }) {
    return (
        <div className="bg-dark w-75 ">
            <Carousel>
                {
                    items.map((it) => (
                        <Carousel.Item>
                            <div className="d-flex justify-content-center">
                                <img
                                    className="carousel d-block"
                                    src={it}
                                    alt={it}
                                />
                            </div>
                        </Carousel.Item>
                    ))

                }
            </Carousel>

        </div>
    );
}

export default mainCarousel;