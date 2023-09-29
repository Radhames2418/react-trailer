import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Carouseltem from './Carouseltem';
import PropTypes from 'prop-types';

export default function SectionSlider({ genero }) {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <Carouseltem key={0}  imagen={'https://i.ytimg.com/vi/TtHS8-2w-cA/maxresdefault.jpg'} />,
        <Carouseltem key={1} imagen={'https://static.toiimg.com/thumb/msid-101416292,width-400,resizemode-4/101416292.jpg'} />,
        <Carouseltem key={2} imagen={'https://barrie360.com/wp-content/uploads/2021/05/Venom-400x200.png'} />,
        <Carouseltem key={3} imagen={'https://i.ytimg.com/vi/TtHS8-2w-cA/maxresdefault.jpg'} />,
        <Carouseltem key={4} imagen={'https://static.toiimg.com/thumb/msid-101416292,width-400,resizemode-4/101416292.jpg'} />,
        <Carouseltem key={5} imagen={'https://barrie360.com/wp-content/uploads/2021/05/Venom-400x200.png'} />
    ];

    return (
        <div className='my-1'>
            <h3 className='md:text-2xl px-2 font-bold md:mb-3 mb-0 uppercase hover:text-yellow-400 hover:cursor-pointer stroke_section '>
                {genero}
            </h3>
            
            <AliceCarousel
                mouseTracking
                autoPlayStrategy='false'
                items={items}
                responsive={responsive}
                controlsStrategy="responsive"
                disableDotsControls
            />
        </div>
    )
}

SectionSlider.propTypes = {
    genero: PropTypes.string.isRequired
};