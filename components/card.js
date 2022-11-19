import styled from "styled-components";

const Card = ({job}) => {
    const { title, shortDescriptionm, type, locations } = job.fields
    const renderLocations = (locations) => {
        return locations.map(location => <span key={location.sys.id}>{location.fields.city}</span>)
    }
    
    return (
        <div>
            {title}

            <div>
                {type.fields.title}

                <div>
                    {renderLocations(locations)}
                </div>
            </div>
        </div>
    );
  }

  export default Card;