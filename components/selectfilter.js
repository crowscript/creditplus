import styled from "styled-components";
import Select from 'react-select';
import { ScreenSize } from '../components/styles/Global.styled';
import { useEffect, useState } from "react";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
  
const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderRadius: "8px",
      borderColor: state.isFocused ? 'var(--primary-600-base)' : 'var(--gray-400)',
      boxShadow: state.isFocused ? "0 0 0 0 var(--primary-300-base-rgba-50)" : "none",
      "&:hover": {
        boxShadow: "0 0 0 0.25rem var(--primary-300-base-rgba-50)"
      },
      transition: "all .2s ease-in-out",
    }),
    menu: (baseStyle) => ({
      ...baseStyle,
      background: "var(--gray-50)",
      boxShadow: "0 3px 9px var(--color-black-rgba-16)",
      borderRadius: "8px",
    }),
    valueContainer: (baseStyle) => ({
      ...baseStyle,
      padding: "6px 14px",
      fontWeight: 500,
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      transition: 'all .2s ease',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      position: "relative",
      color: "var(--gray-900-–-text-content)",
      fontWeight: 500,
      cursor: "pointer",
      backgroundColor: state.isSelected ? "var(--gray-50)" : state.isFocused ? "var(--primary-100)" : null,
      color: state.isSelected ? "var(--primary-700)" : null,
      ":active": {
        backgroundColor: "var(--primary-100)",
      },
      ":hover": {
        backgroundColor: "var(--primary-100)",
      },
      "::after": state.isSelected ? 
      {
        content: '""',
        position: "absolute",
        top: "50%",
        right: "1rem",
        display: "block",
        width: "7px",
        height: "16px",
        border: "solid var(--primary-700)",
        borderWidth: "0 2px 2px 0",
        transform: "translateY(calc(-50% - 3px)) rotate(45deg)",
      } : null,
    }),
  };
  
  const SelectSection = styled.div`
  display: block;

  @media ${ScreenSize.tablet} {
    display: flex;
    flex-wrap: wrap;
    column-gap: calc(var(--line-spacing-28) - 4px);
  }

  > div {
    margin-bottom: var(--line-spacing-12);
    
    :last-of-type {
        margin-bottom: 0;
    }

    @media ${ScreenSize.tablet} {
      flex: 1;
      margin-bottom: 0;
    }
  }
`;

const SelectFilter = ({jobs, handleSelected}) => {

  const [optionsType, setOptionsType] = useState([]);
  const [optionsDepartment, setOptionsDepartment]= useState([]);
  const [optionsLocation, setOptionsLocation]= useState([]);

  useEffect(() => {
    const type = jobs.map(j => j.fields?.type);
    const department = jobs.map(j => j.fields?.department);
    const locations = jobs.map(j => {
      if (j.fields.locations) {
        return j.fields.locations.find(l => l.fields.city)
      }
      return
    });

    if (locations) {
      const filteredLoc = Array.from(new Set(locations.map(item => JSON.stringify({city: item.fields.city, value: item.fields.city})))).map(JSON.parse);
      setOptionsLocation(filteredLoc)
    }
    if (type) {
      const filteredType = Array.from(new Set(type.map(item => JSON.stringify({title: item.fields.title, value: item.fields.title})))).map(JSON.parse);
      setOptionsType(filteredType);
    }
    if (department) {
      const filteredType = Array.from(new Set(department.map(item => JSON.stringify({title: item.fields.title, value: item.fields.title})))).map(JSON.parse);
      setOptionsDepartment(filteredType);
    }
  },[]);

    return (
        <SelectSection>
            <Select 
            // menuIsOpen={true}
            getOptionLabel={option => option?.title} 
            options={optionsDepartment} 
            instanceId="Bereich" 
            placeholder="Bereich"
            components={{ IndicatorSeparator: () => null }}
            onChange={(val) => handleSelected({title: val?.title, type: 'department'})}
            styles={customStyles}
            />
            <Select 
            getOptionLabel={option => option?.city}
            options={optionsLocation} 
            instanceId="Stadt" 
            placeholder="Stadt"
            components={{ IndicatorSeparator: () => null }}
            onChange={(val) => handleSelected({city: val.city, type: 'city'})}
            styles={customStyles}
            />
            <Select 
            getOptionLabel={option => option?.title} 
            options={optionsType} 
            instanceId="Erfahrungslevel" 
            placeholder="Erfahrungslevel"
            components={{ IndicatorSeparator: () => null }}
            onChange={(val) => handleSelected({title: val?.title, type: 'type'})}
            styles={customStyles}
            />
        </SelectSection>
    );
  }
   
  export default SelectFilter;