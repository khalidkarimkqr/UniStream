const Event = require("../models/Event");

const ROLES = require("..lib/roles");

const User = require("../models/User");


const createEvent = async (req, res) => {
  if (req.role !== ROLES.admin) {
    return res.status(403).json({
      success: false,
      message: "You are not allowed to create an event",
      data: null,
    });
  }

  const userId = req.id;
  const { title, description, date, time } = req.body;

  try {
    const event = await Event.create({
      title,
      description,
      date,
      time,
      createdBy: userId,
    });

    return res.status(201).json({
      success: true,
      message: "Event created successfully",
      data: event,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

module.exports = createEvent;


