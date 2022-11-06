// import dbConnect from "../../../util/mongo";
// import Order from "../../../models/Order";
// import auth from '../../../middleware/auth';

// const handler = async (req, res) => {
//   const {
//     method,
//     query: { id },
//   } = req;

//   await dbConnect();

//    if (method === "GET") {
//     try {
//       const order = await Order.findById(id);
//       res.status(200).json(order);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }

// //   const getOrders = async (req, res) => {
// //     try {
// //         const result = await auth(req, res)

// //         let orders;
// //         if(result){
// //             orders = await Order.find({user: result.id}).populate("user", "-password")
// //         }else{
// //             orders = await Order.find().populate("user", "-password")
// //         }

// //         res.json({orders})
// //     } catch (err) {
// //         return res.status(500).json({err: err.message})
// //     }
// // }

//   if (method === "PUT") {
//     try {
//       const order = await Order.findByIdAndUpdate(id, req.body, {
//         new: true,
//       });
//       res.status(200).json(order);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }
//   if (method === "DELETE") {
//   }
// };

// export default handler;

import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "DELETE") {
  }
};

export default handler;
