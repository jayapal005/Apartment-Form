import React from 'react';
import './Apartment.css'
import Bloks from './Blok';
import ColorButtons from './Button';
import CarasoulImage from './Carasoul';
import ContactAddress from './ContactAddress';
import ContactPerson from './ContactPerson';
import FlatDetails from './FlatDetails';
import StateTextFields from './NameOne';
import RedioButton from './Redio';
import GroupedSelect from './Select';
import SwimmingPool from './SwimmingPool';


function Apartmenat(props) {
    return (
        <div className="new">
             {/* <CarasoulImage/>  */}
            <h2 style={{color:"green"}} >APARTMENT SERVICE'S REGISTRATION </h2>
            <StateTextFields/>
            <GroupedSelect/>
            <h4>ApartMent Address</h4>
            <ContactAddress/>
            <h4>Contact Person</h4>
            <ContactPerson/>
            <h4>Service's</h4>
            <RedioButton/>
            <h4>Apartment Details</h4>
            <Bloks/>
            <h4>Swimming Pool</h4>
            <SwimmingPool/>
            <h4>Flat Details</h4>
            <FlatDetails/>
            <ColorButtons/>
        </div>
    );
}

export default Apartmenat;