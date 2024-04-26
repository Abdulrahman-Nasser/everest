import { Section, Container, Heading, Content, Desc, Name } from './Review'
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";


const Reviews = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <Section>
            <Heading>اراء العملاء</Heading>
            <Container className="slider-container">
                <Slider {...settings}>
                    <Content>
                        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nulla molestiae voluptate ea nam provident architecto suscipit vel similique nihil ratione veniam aspernatur nobis eum, ab sit fuga eos quas, impedit totam! Et atque aut doloremque nam ab sunt asperiores!</Desc>
                        <Name>mando mando</Name>
                    </Content>
                    <Content>
                        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nulla molestiae voluptate ea nam provident architecto suscipit vel similique nihil ratione veniam aspernatur nobis eum, ab sit fuga eos quas, impedit totam! Et atque aut doloremque nam ab sunt asperiores!</Desc>
                        <Name>mando mando</Name>
                    </Content>
                    <Content>
                        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nulla molestiae voluptate ea nam provident architecto suscipit vel similique nihil ratione veniam aspernatur nobis eum, ab sit fuga eos quas, impedit totam! Et atque aut doloremque nam ab sunt asperiores!</Desc>
                        <Name>mando mando</Name>
                    </Content>
                </Slider>
            </Container>
        </Section>
    )
}

export default Reviews

// eslint-disable-next-line react/prop-types, no-unused-vars
function SampleNextArrow({ className, style, onClick }) {
    return (
        <div onClick={onClick} className={`arrow ${className}`} >
            <GrNext className="arrows" />
        </div>
    )
}

const SamplePrevArrow = (props) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className={`arrow ${className}`} >
            <GrPrevious className="arrows" />
        </div>
    )
}