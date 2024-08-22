import DefaultPicture from '../../assets/avatar.png'
import Card from "../../components/Card/card";
import styled from 'styled-components';

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
];

const CardsContainer = styled.div`
    display: grid;
    gap: 10px;
    place-items: center;
    /*grid-template-rows: 350px 350px;*/
    /*grid-template-columns: repeat(2, 1fr);*/
`;

function Freelances () {
    return (
        <div>
            <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </div>
    );
}

export default Freelances;