import Form from "../Models/formModel.js";

export const createForm = async (req, res) => {
  try {
    const { name, email, phone, service, budget, message } = req.body;

    if (!name || !email || !phone || !service || !budget) {
      res.status(400).json({
        message: "Please fill all required details",
        success: false,
      });
      return;
    }

    const newForm = new Form({
      name,
      email,
      phone,
      service,
      budget,
      message,
    });

    await newForm.save();
    res.status(201).json({
      success: true,
      data: newForm,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllFrom = async (req, res) => {
  try {
    const from = await Form.find();
    res.status(201).json(from);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "form not found" });
  }
};

export const deleteCustomerLeadById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLead = await Form.findByIdAndDelete(id);

    if (!deletedLead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lead deleted successfully",
      data: deletedLead,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "error while delete the lead",
    });
  }
};

export const changeStatusById = async (req, res) => {
  try {
    const { id, work } = req.body;

    // Allowed work statuses
    const allowedStatuses = ["done", "pending", "reject", "ongoing", "default"];
    if (!allowedStatuses.includes(work)) {
      return res.status(400).json({
        success: false,
        message: "Invalid work status value",
      });
    }

    const updatedLead = await Form.findByIdAndUpdate(
      id,
      { work },
      { new: true }
    );

    if (!updatedLead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Work status updated successfully",
      data: updatedLead,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error while updating the work status",
    });
  }
};
