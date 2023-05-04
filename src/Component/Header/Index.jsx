import Carousel from 'react-bootstrap/Carousel';
import Herosection1 from '../../assets/Herosection1.png'
import herosection2 from '../../assets/herosection2.png'
import herosection3 from '../../assets/herosection3.png'
import herosection4 from '../../assets/herosection4.png'
import './Index.css'

function UncontrolledExample() {
  return (
    <div >

    <Carousel  indicators={false} nextLabel={null} prevLabel={null}>
      <Carousel.Item className='carousel-image-container '>
        <img
          className="d-block w-100"
          src={Herosection1}
          alt="First slide"
        />
        <Carousel.Caption className='carousel-caption-container'>
          <h3>Bridging the gap between farmers and buyers</h3>
          <p>making it easy for buyers to find the produce they're looking for, while giving farmers the opportunity to sell their produce directly to consumers.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={herosection3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Connecting farmers, buyers, and investors for a sustainable future</h3>
          <p>making it easier for farmers to sell their produce directly to buyers, while giving investors the opportunity to invest in the farms that grow the produce.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={herosection2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Investing in the future of agriculture, one farm at a time</h3>
          <p>
          invest in farms ,support sustainable agriculture practices and promote the growth of local farming communities.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={herosection4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Farm-to-table made easy</h3>
          <p>
          enjoy fresh, locally grown produce while supporting local farmers and promoting sustainable agriculture practices.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;
