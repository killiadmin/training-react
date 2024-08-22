import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/avatar.png';
import styled from 'styled-components';
import colors  from '../../colors.js';


const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
`;

const CardImage = styled.img`
            height: 80px;
            width: 80px;
            border-radius: 50%;
`;

const CardTitle = styled.span`
    font-weight: bold;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*padding: 15px;*/
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    height:200px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`;


function Card({label, title, picture}) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance"/>
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
    );
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
    label: "",
    title: "",
    picture: DefaultPicture,
};

export default Card;