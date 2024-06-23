import React from 'react';
import '../CSS/EmployeeItem.css';

const EmployeeItem = ({ employee, index }) => {
    // בדיקה אם employee קיים, אם לא - החזר null או הודעת שגיאה
    if (!employee) {
        return <div>No employee data available</div>;
    }

    return (
        <div className="employee-card">
            <div className="image-container">
                {employee.image ? (
                    <img src={employee.image} alt={employee.name || 'Employee'} className="employee-image" />
                ) : (
                    <div className="placeholder-image">No Image</div>
                )}
            </div>
            <div className="info-container">
                <h5 className="employee-name">{employee.name || 'Unknown'}</h5>
                <p className="employee-detail">גיל: {employee.age || 'N/A'}</p>
                <p className="employee-detail">מדינה: {employee.country || 'N/A'}</p>
                <button className="more-info-btn">עוד מידע</button>
            </div>
            <span className="star-icon">⭐</span>
        </div>
    );
}

export default EmployeeItem;