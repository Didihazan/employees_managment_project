import React, { useContext, useEffect, useState } from 'react';
import '../CSS/EmployeeItem.css';
import { AppContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

const EmployeeItem = ({ employee, url, setIsFav, isFav }) => {
    const [isFavourite, setIsFavourite] = useState(false);
    const { favourites, addFavourite, removeFavourite } = useContext(AppContext);
    const nav = useNavigate();

    // Check if the employee exists in the favourites list
    useEffect(() => {
        checkFavourite();
    }, [favourites]);

    const checkFavourite = () => {
        if (employee) {
            favourites.forEach(fav => {
                if (fav.login.uuid === employee.login.uuid) {
                    setIsFavourite(true);
                }
            });
        }
    };

    const addFav = () => {
        addFavourite(employee);
        setIsFavourite(true);
    };

    const removeFav = () => {
        removeFavourite(employee);
        if (url.includes("favourites")) {
            setIsFav(!isFav);
        }
        setIsFavourite(false);
    };

    const moreInfo = () => {
        return nav(url);
    };

    if (!employee) {
        return <div>No employee data available</div>;
    }

    return (
        <div className="employee-card">
            <div className="image-container">
                {employee.picture ? (
                    <img src={employee.picture.large} alt={employee.name.first || 'Employee'} className="employee-image" />
                ) : (
                    <div className="placeholder-image">No Image</div>
                )}
            </div>
            <div className="info-container">
                <h5 className="employee-name">{employee.name.first + " " + employee.name.last || 'Unknown'}</h5>
                <p className="employee-detail">Age: {employee.dob.age || 'N/A'}</p>
                <p className="employee-detail">Country: {employee.location.country || 'N/A'}</p>
                <button className="more-info-btn" onClick={moreInfo}>More info</button>
            </div>
            <span onClick={() => isFavourite ? removeFav() : addFav()}
                  className={`star-icon ${isFavourite ? 'yellow' : 'gray'}`}><span className="fa fa-star"></span></span>
        </div>
    );
}

export default EmployeeItem;
