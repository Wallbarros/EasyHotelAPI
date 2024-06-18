// models/reservation.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    guestName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    roomNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    checkInDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    checkOutDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});
  Reservation.associate = function(models) {
    // associations can be defined here
  };
  return Reservation;
};
