import styled from "styled-components";
import { ScreenSize } from '../components/styles/Global.styled';
import { ArrowIcon, LocationIcon, ClockIcon } from '../components/icons';

const CardList = styled.li`
    margin-bottom: var(--line-spacing-24);
`;

const Link = ({ className, children }) => (
    <a href="#" className={className}>
      {children}
    </a>
  );
  
const StyledLink = styled(Link)`
    display: block;
    padding: var(--line-spacing-24);
    width: 100%;
    background-color: var(--gray-50);
    border: 1px solid var(--gray-200);
    border-radius: 16px;
    transition: all .2s ease-in-out;

    @media ${ScreenSize.tablet} {
        padding: var(--line-spacing-30);
    }

    &:hover,
    &:focus {
        outline: 0;
        box-shadow: 0 0 0 .25rem var(--primary-300-base-rgba-50);
    }
`;

const CardHeader = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: var(--line-spacing-10);
`;

const CardDepartment = styled.span`
    font: var(--font-style-normal) normal var(--font-weight-medium) var(--font-size-14)/var(--line-spacing-20) var(--font-family-gotham);
    letter-spacing: var(--character-spacing--0-28);
    color: var(--primary-600-base);
    text-align: left;
`;

const CardLink = styled.span`
    display: flex;
    column-gap: 5px;
    font: var(--font-style-normal) normal var(--font-weight-medium) var(--font-size-16)/var(--line-spacing-24) var(--font-family-gotham);
    letter-spacing: var(--character-spacing--0-32);
    color: var(--primary-600-base);
    text-align: right;

    span {
        display: none;

        @media ${ScreenSize.tablet} {
            display: block;
        }
    }
`;

const CardTitle = styled.h3`
    font: var(--font-style-normal) normal var(--font-weight-medium) var(--font-size-18)/var(--line-spacing-26) var(--font-family-gotham);
    letter-spacing: var(--character-spacing--0-36);
    color: var(--color-292929);
    text-align: left;
`;

const CardFooter = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    column-gap: var(--line-spacing-24);

    svg {
        max-width: 23px;
        margin-right: 5px;
    }
`;

const CardLocations = styled.div`
    display: flex;
    align-items: center;
    font: var(--font-style-normal) normal var(--font-weight-normal) var(--font-size-16)/var(--line-spacing-24) var(--font-family-gotham);
    letter-spacing: var(--character-spacing--0-32);
    color: var(--gray-700-–-text-content);
    text-align: left;

    span:after {
        content: ", ";
        white-space: pre;
    }

    span:last-of-type:after {
        content: "";
    }
`;

const CardType = styled.div`
    display: flex;
    align-items: center;
    font: var(--font-style-normal) normal var(--font-weight-normal) var(--font-size-16)/var(--line-spacing-24) var(--font-family-gotham);
    letter-spacing: var(--character-spacing--0-32);
    color: var(--gray-700-–-text-content);
    text-align: left;
`;

const Card = ({job}) => {
    const { name, department, type, locations } = job.fields
    const renderLocations = (locations) => {
        return locations.map(location => <span key={location.sys.id}>{location.fields.city}</span>)
    }

    return (
        <CardList>
            <StyledLink className="Card">
                <CardHeader>
                    <CardDepartment>
                        {department.fields.title}
                    </CardDepartment>
                    <CardLink>
                        <span>Stelle anzeigen</span>
                        <ArrowIcon />
                    </CardLink>
                </CardHeader>
                <CardTitle>
                    {name}
                </CardTitle>
                <CardFooter>
                    <CardLocations>
                        <LocationIcon />
                        {renderLocations(locations)}
                    </CardLocations>
                    <CardType>
                        <ClockIcon />
                        <span>{type.fields.title}</span>
                    </CardType>
                </CardFooter>
            </StyledLink>
        </CardList>
    );
  }

  export default Card;