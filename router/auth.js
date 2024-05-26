const express = require("express");
const router = express.Router();
const User = require("../model/userSchema");
var nodemailer = require("nodemailer");
const Story = require("../model/storySchema");
const Voice = require("../model/voiceSchema");
const UserVoice = require("../model/userVoiceSchema");
const multer = require("multer");
const Notification = require("../model/notificationSchema");
const Favourite = require("../model/favouriteSchema");
const Trending = require("../model/trendingSchema");
const StoryCover = require("../model/storyCoverSchema");
const StoryImages = require("../model/storyImagesSchema");
const StoryVoices = require("../model/storyVoices");
const UserStory = require("../model/userStorySchema");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "delapnfaee",
  api_key: "128538468356193",
  api_secret: "iplvxhLEB8U74hWvyCl_UXPsGwI",
});

// const res = cloudinary.uploader.upload(
//   "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function (error, result) {
//     console.log(result.url);
//   }
// );

// console.log(res.url);

// User.create({
//     fullname:"Ayesha Amjad",
//     username: "ayesha",
//     email: "ayesha@gmail.com",
//     password: "1234",

//   })
//   .then(user => {
//     console.log("User created:", user);
//   })
//   .catch(error => {
//     console.error("Error creating user:", error);
// });

// Voice.create({
//     voicename: "Sample",
//     voice_path: "voice.mp3"
// })
// .then(voice => {
//     console.log("Voice created:", voice);
// })
// .catch(error => {
//     console.error("Error creating voice:", error);
// });

// UserVoice.create({
//     user: "65fc23d1b64046be7cbd1c84",
//     voicename: "Voice",
//     voice_path: "voice.mp3"
// })
// .then(voice => {
//     console.log("User Voice created:", voice);
// })
// .catch(error => {
//     console.error("Error creating first voice:", error);
// });

// User.findById('65fc23d1b64046be7cbd1c84') // Assuming '65f484d23f6d40981811af35' is the user ID
//     .then(user => {
//         if (!user) {
//             console.error('User not found');
//             return;
//         }

//         const notificationData = [
//             {
//                 heading: 'Notification 1',
//                 details: 'Details of notification 1'
//             },
//             {
//                 heading: 'Notification 2',
//                 details: 'Details of notification 2'
//             }
//         ];

//         const notifications = notificationData.map(data => ({
//             user: user._id,
//             name: data.heading, // Using heading as the name
//             details: data.details
//         }));

//         Notification.insertMany(notifications)
//             .then(savedNotifications => {
//                 console.log('Notifications created:', savedNotifications);
//             })
//             .catch(error => {
//                 console.error('Error creating notifications:', error);
//             });
//     })
//     .catch(error => {
//         console.error('Error finding user:', error);
//     });

// Favourite.create({
//     user: "65fc23d1b64046be7cbd1c84",
//     story: "656c2bec7b82ce3bb435e6e1",

// })
// .then(voice => {
//     console.log("fav created:", voice);
// })
// .catch(error => {
//     console.error("Error creating fav:", error);
// });

// Trending.create({
//     story: "656c2bec7b82ce3bb435e6e1",

// })
// .then(voice => {
//     console.log("trending created:", voice);
// })
// .catch(error => {
//     console.error("Error creating trending:", error);
// });

// StoryCover.create({
//     user: "65fc23d1b64046be7cbd1c84",
//     story: "656c2bec7b82ce3bb435e6e1",
//     photoPath:"phito.png",

//     })
//     .then(voice => {
//         console.log("cover created:", voice);
//     })
//     .catch(error => {
//         console.error("Error creating cover:", error);
//     });

// StoryImages.create({
//     user: "65fc23d1b64046be7cbd1c84",
//     story: "656c2bec7b82ce3bb435e6e1",
//     images: [
//         {
//             image: "photo1.png"
//         },
//         {
//             image: "photo2.png"
//         }
//     ]
// })
// .then(storyImage => {
//     console.log("Story image created:", storyImage);
// })
// .catch(error => {
//     console.error("Error creating story image:", error);
// });

// StoryVoices.create({
//     user: "65fc23d1b64046be7cbd1c84",
//     story: "656c2bec7b82ce3bb435e6e1",
//     voices: [
//         {
//             voice: "voice1.wav"
//         },
//         {
//             voice: "voice2.wav"
//         }
//     ]
// })
// .then(storyVoice => {
//     console.log("Story voice created:", storyVoice);
// })
// .catch(error => {
//     console.error("Error creating story voice:", error);
// });

// UserStory.create({
//     user: "6641081dff108833d392a5f9",
//     storyname: "Testing Story",
//     storycontent:"ایک دن احمد اور ایمن کے امی ابو نے جنگل میں سیر کو جانے کا پروگرام بنایا۔اگلے دن جنگل پہنچ کر انھوں نے خیمے لگائے اور سب جنگل میں سیر کرنے لگے۔انھوں نے قسم قسم کے پھل دار درخت،خوبصورت پھول اور بیلیں دیکھیں۔ وہاں پر انھیں تیتر،کوئل،فاختہ اور ہُدہُد وغیرہ بھی دیکھنے کو ملے۔شام ہوئی تو وہ سب اپنے خیموں کی طرف واپس لوٹ آئے اور آگ جلا کر کھانا پکایا گیا۔ کھانے کے بعد وہ سب خیمے میں چلے گئے۔ایمن اور احمد کو نیند نہیں آ رہی تھی۔ان کا دل جنگل میں جانوروں کو ڈھونڈنے اور دیکھنے کو چاہ رہا تھا۔حالانکہ ان کے والدین نے انھیں سختی سے منع کیا تھا کہ خیمے سے باہر نہ نکلنا۔وہ یہ نصیحت بھول گئے اور جنگل کا جائزہ لینے چل پڑے",
//     description:"description of testing story",
//     uservoice:"Echo",
//     storycover:"6642ff7b9710eeb231b24941",
//     storyimages:"6642ff7b9710eeb231b24941",
//     storyvoices:"6642ff0e9710eeb231b24940",
// })
// .then(storyVoice => {
//     console.log("user Story created:", storyVoice);
// })
// .catch(error => {
//     console.error("Error creating user story :", error);
// });

router.post("/register", async (req, res) => {
  const { fullname, username, email, password, imageFile } = req.body;
  console.log(fullname, username, email, password, imageFile);

  if (!fullname || !username || !email || !password) {
    return res.status(422).json({ error: "Please Fill Missing Fields" });
  }

  if (!validateEmail(email)) {
    return res
      .status(422)
      .json({ error: "Please enter a valid email address." });
  }

  if (password.length < 8) {
    return res
      .status(422)
      .json({ error: "Password must be at least 8 characters long." });
  }

  const userExist = await User.findOne({ email: email });
  if (userExist) {
    return res.status(422).json({ error: "Email Already Registered" });
  }

  var uploadStr = "data:image/jpeg;base64," + imageFile;
  const myCloud = await cloudinary.v2.uploader.upload(
    uploadStr,
    {
      overwrite: true,
      invalidate: true,
      folder: "qissaSunao",
    },
    function (err, result) {
      if (err) {
        console.log("ERROR", err);
      } else {
        console.log(result);
      }
    }
  );
  // await cloudinary.uploader.upload(
  //   imageFile,
  //   { public_id: imageName },
  //   function (error, result) {
  //     console.log(result);
  //     console.log(result.url);
  //     imageUrl = result.url;
  //     if(error){
  //       imageUrl = null;
  //     }
  //   }
  // );

  const userExists = await User.findOne({ username: username });
  if (userExists) {
    return res.status(422).json({ error: "Username Already Registered" });
  } else {
    console.log(myCloud.secure_url);
    const newUser = new User({
      fullname,
      username,
      email,
      password,
      imageUrl: myCloud.secure_url,
    });
    const response = await newUser.save();
    
    if (response) {
      res.status(201).json({ message: "Sucessfully Registered" });
      // const user = await User.findOne({ email: email });
      // let transporter = nodemailer.createTransport({
      //   host: "smtp.gmail.com",
      //   port: 587,
      //   secure: false, // true for 465, false for other ports
      //   auth: {
      //     user: "ayeshaamjad016@gmail.com",
      //     pass: process.env.GMAIL_PASS, 
      //   },
      // });
  
      
      // const logoUrl = "https://i.imgur.com/fOxIU13.jpg";
  
      // // Send mail with defined transport object
      // let info = await transporter.sendMail({
      //   from: '"QISSA SUNAO" <ayeshaamjad016@gmail.com>', // sender address
      //   to: email, // list of receivers
      //   subject: "Successfully Registered", // Subject line
      //   html: `
      //         <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto;">
      //         <img src="" alt="Company Logo" style="max-width: 100%; height: auto; margin-bottom: 20px;">
      //         <h2 style="color: #007bff;">Password Reset</h2>
      //         <p>Hello,</p>
      //         <p>congratulations you are sucessfully registered in the app</p>
      //         <p>Stay informed and protected from misinformation with our service.</p>
      //         <hr style="border: 1px solid #ccc; margin-top: 20px; margin-bottom: 20px;">
      //         <p style="font-size: 12px; color: #777;">This email was sent to you by QISSA SUNAO. If you have any questions, please contact us at ayeshaamjad016@gmail.com.</p>
      //     </div>
      //         `,
      // });
  
      console.log("Message sent: %s", info.messageId);
      // res.status(200).json({ message: "Email sent successfully" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

const validateEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please Fill Missing Field" });
  }

  if (!validateEmail(email)) {
    return res
      .status(422)
      .json({ error: "Please enter a valid email address." });
  }

  if (password.length < 8) {
    return res
      .status(422)
      .json({ error: "Password must be at least 8 characters long." });
  }

  User.findOne({ email: email })
    .then((checkUser) => {
      if (checkUser) {
        if (password == checkUser.password) {
          res.status(200).json({ data: checkUser });
        } else {
          res.status(401).json({ error: "Invalid Email Or Password" });
        }
      } else {
        res.status(400).json({ error: "User Not Found" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
//not got answer in chat gpt :)

router.post("/forgetPassword", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res
        .status(404)
        .json({ error: "User with this email does not exist" });
    }

    // Create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "ayeshaamjad016@gmail.com", // your Gmail account username
        pass: process.env.GMAIL_PASS, // your Gmail account password
      },
    });

    const resetLink = `http://localhost:3000/reset-password/${user._id}`;
    const logoUrl = "https://i.imgur.com/fOxIU13.jpg";

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"QISSA SUNAO" <ayeshaamjad016@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Password Reset", // Subject line
      html: `
            <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto;">
            <img src="" alt="Company Logo" style="max-width: 100%; height: auto; margin-bottom: 20px;">
            <h2 style="color: #007bff;">Password Reset</h2>
            <p>Hello,</p>
            <p>We received a request to reset your password. To proceed, click on the link below:</p>
            <p><a href="${resetLink}" style="color: #007bff; text-decoration: none;">Reset Your Password</a></p>
            <p>If you didn't request a password reset, please ignore this email. Your account remains secure.</p>
            <p>Thank you for using QISSA SUNAO!</p>
            <p>Stay informed and protected from misinformation with our service.</p>
            <hr style="border: 1px solid #ccc; margin-top: 20px; margin-bottom: 20px;">
            <p style="font-size: 12px; color: #777;">This email was sent to you by QISSA SUNAO. If you have any questions, please contact us at ayeshaamjad016@gmail.com.</p>
        </div>
            `,
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/resetPassword", async (req, res) => {
  const _id = req.body._id;
  const newPass = req.body.newPass;
  const confirmPass = req.body.confirmPass;

  // const [email, newPass, confirmPass] = req.body
  if (newPass !== confirmPass) {
    return res
      .status(422)
      .json({ error: "New password and confirm password do not match" });
  }

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id },
      { password: newPass }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "Password reset successfully" });
    console.log(newPass);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/get_all_stories", async (req, res) => {
  try {
    const stories = await Story.find({});
    const storyData = stories.map((story) => ({
      _id: story._id,
      storyname: story.storyname,
      writer: story.writer,
      description: story.description,
      image_path: story.image_path,
      story: story.story,
    }));

    res.status(200).json(storyData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/get_single_story", async (req, res) => {
  const { storyId, userId } = req.body;
  try {
    const story = await Story.findOne({ _id: storyId });
    if (story) {
      const fav = await Favourite.findOne({ story: storyId, user:userId });
      if(fav){
        return res.status(200).json({ story:story, fav:1 });
      }else{
        return res.status(200).json({ story:story, fav:0 });
      }
    } else {
      res.status(422).json({ error: "Story Not Found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/add_to_fav", async (req, res) => {
  const { storyId, userId } = req.body;
  console.log(req.body);
  try {
    const fav = await Favourite.findOneAndDelete({ story: storyId, user:userId });
      if(fav){
        return res.status(200).json({ unfav:"Successfully UnFavourite" });
      }else{
        const addFav = new Favourite({
          story:storyId,
          user:userId
        });
    
        const response = await addFav.save();
        if(response){
          return res.status(200).json({ fav:"Successfully Favourite" });
        }
        else{
          res.status(500).json({ error: "Internal Server Error" });
        }
      }
    
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/get_user_favs", async (req, res) => {
  try {
    const { userId } = req.body;
    console.log("USERNAME: ", userId);
    const favourites = await Favourite.find({ user: userId }).populate('story');
    console.log("Favourites:", favourites);
    if (favourites.length > 0) {
      res.status(200).json({ favStories: favourites });
    } else {
      res.status(404).json({ message: "No favorite stories found for this user" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.post("/get_user_stories", async (req, res) => {
  try {
    const { userId } = req.body;
    console.log("USERNAME: ", userId);
    const userStories = await UserStory.find({ user: userId }).populate([{
      path: 'storyimages',
      model: 'Storyimage',
      select: '_id user story images'
  }, {
      path: 'storyvoices',
      model: 'Storyvoice',
      select: '_id user story voices'
  }]);
    console.log("STORIES:", userStories);

    res.status(200).json(userStories);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/get_all_voices", async (req, res) => {
  try {
    const { username } = req.body;
    console.log(username);
    const voices = await UserVoice.find({ username: username });
    if (!Array.isArray(voices)) {
      console.error("Unexpected response from the database:", voices);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log(voices);
    const voiceData = voices.map((voice) => ({
      _id: voice._id,
      username: voice.username,
      voicename: voice.voicename,
      voice_path: voice.voice_path,
      link_path: voice.link_path,
    }));

    res.status(200).json(voiceData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/post_story_api_testing", async (req, res) => {
  try {
    const { storyname, description, image_path, story } = req.body;
    const newStory = new Story({
      storyname,
      description,
      image_path,
      story,
    });

    await newStory.save();

    res
      .status(201)
      .json({ message: "Story posted successfully", story: newStory });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err });
  }
});

router.get("/get_random_story", async (req, res) => {
  try {
    const count = await Story.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const randomStory = await Story.findOne()
      .skip(randomIndex)
      .select("storyname image_path description");

    if (!randomStory) {
      return res.status(404).json({ error: "No stories found" });
    }

    res.status(200).json(randomStory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/get_user", async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email);
    const user = await User.findOne({ email: email });
    console.log(user);
    if (!user) {
      return res.status(400).json({ error: "User not Found" });
    }
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
