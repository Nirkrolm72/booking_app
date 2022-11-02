import express from "express";
import { createRoom, deleteRoom, getAllRoom, getRoomById, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post('/:hotelid', verifyAdmin ,createRoom);

// UPDATE
router.put('/:id', verifyAdmin ,updateRoom);

// DELETE
router.delete('/:id/:hotelid', verifyAdmin ,deleteRoom);

// GET

router.get('/:id', getRoomById);

// GET ALL
router.get('/', getAllRoom);

export default router;