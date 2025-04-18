import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

const AnimationPlayer = ({ animationData, height = 400, width = 350 }) => {
    const options = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return <Lottie options={options} height={height} width={width} />;
};

AnimationPlayer.propTypes = {
    animationData: PropTypes.object.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
};

export default AnimationPlayer;
