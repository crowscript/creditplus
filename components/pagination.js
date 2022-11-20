import styled from "styled-components";
import { ScreenSize, ListUnstyled } from '../components/styles/Global.styled';
import { Link } from "./card";
import { ArrowIconLeft, ArrowIconRight } from './icons';

const PaginationNav = styled.nav`
    border-top: 1px solid var(--gray-200);
    margin: var(--line-spacing-10) 0 var(--line-spacing-30) 0;
    padding: var(--line-spacing-20) 0;

    @media ${ScreenSize.tablet} {
        margin-top: var(--line-spacing-48);
    }
`;

const ListItem = styled.li.attrs(props => ({
}))`
    // font-size: 1rem;
`;

const PaginationList = styled(ListUnstyled).attrs({
    'aria-label': 'Pagination',
    'role': 'navigation',
  })`
    display: flex;
    justify-content: center;

    // Shame Fix - remove horizontal scrollbar
    @media only screen and (min-width: 373px) and (max-width: 378px){
        transform: scale(.975,.975);
    }

    ${ListItem} {
        &:first-of-type,
        &:last-of-type {

            a {
                display: flex;
                align-items: center;
                
                @media ${ScreenSize.tablet} {
                    width: auto;
                    border-radius: 0;
                }
                
                span {
                    display: none;
        
                    @media ${ScreenSize.tablet} {
                        margin: 0 var(--line-spacing-12);
                        display: block;
                    }
                }
        
                &:hover,
                &:focus,
                &:active {
                    @media ${ScreenSize.tablet} {
                        background-color: transparent;
                    }
                }
            }
        }

        &:first-of-type {
            margin-right: auto;
        }

        &:last-of-type {
            margin-left: auto;
        }

        &:nth-of-type(4),
        &:nth-of-type(6) {
            display: none;
            // This is only a static visual solution
            @media ${ScreenSize.mobile} {
                display: inline-block;
            }
        }
    }
`;

const PageLink = styled(Link)`
    display: inline-block;
    font: var(--font-style-normal) normal var(--font-weight-medium) var(--font-size-14)/var(--line-spacing-40) var(--font-family-gotham);
    letter-spacing: var(--character-spacing--0-28);
    color: var(--gray-600-–-placeholder-text);
    text-decoration: none;
    transition: all .2s ease-in-out;
    width: 40px;
    height: 40px;
    text-align: center;
    justify-content: center;
    border-radius: 50%;

    &:hover,
    &:focus,
    &:active {
        color: var(--primary-600-base);
        background-color: var(--primary-75);
        
        svg path {
            fill: var(--primary-600-base);
        }
    }

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 .25rem var(--primary-300-base-rgba-50);
    }

    svg {
        min-width: 17px;
        width: 17px;
        height: 17px;
    }
`;

const Pagination = () => {
    return (
      <PaginationNav>
        <PaginationList>
            <ListItem className="disabled">
                <PageLink to="#">
                    <ArrowIconLeft />
                    <span>
                        Vorherige
                    </span>
                </PageLink>
            </ListItem>
            <ListItem className="active" >
                <PageLink to="#">
                    1
                </PageLink>
            </ListItem>
            <ListItem>
                <PageLink to="#">
                    2
                </PageLink>
            </ListItem>
            <ListItem>
                <PageLink to="#">
                    3
                </PageLink>
            </ListItem>
            <ListItem>
                <PageLink to="#">
                    ...
                </PageLink>
            </ListItem>
            <ListItem>
                <PageLink to="#">
                    5
                </PageLink>
            </ListItem>
            <ListItem>
                <PageLink to="#">
                    6
                </PageLink>
            </ListItem>
            <ListItem>
                <PageLink to="#">
                    7
                </PageLink>
            </ListItem>
            <ListItem className="disabled">
                <PageLink to="#">
                    <span>
                        Nächste
                    </span>
                    <ArrowIconRight />
                </PageLink>
            </ListItem>
        </PaginationList>
      </PaginationNav>
    );
  }
   
  export default Pagination;