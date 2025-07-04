import { Router } from "express";

import {addNoteToLead, changeStatusById, createForm, deleteCustomerLeadById, getAllFrom} from "../Controllers/formController.js"

const userRouter = Router();

userRouter.post("/createForm",createForm);
userRouter.get("/getForm",getAllFrom);
userRouter.delete("/lead/:id",deleteCustomerLeadById);
userRouter.patch("/lead/status", changeStatusById);
userRouter.patch("/lead/note",addNoteToLead)

export default userRouter
