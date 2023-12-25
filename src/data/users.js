// ******** Imports ******** //
import Profile1 from "../assets/images/profile1.png";
import Profile2 from "../assets/images/profile2.png";
import Profile3 from "../assets/images/profile3.png";
import Profile4 from "../assets/images/profile4.png";
import Profile5 from "../assets/images/profile5.png";
import Profile6 from "../assets/images/profile6.png";

// ******** Users Array ******** //
const users = [
  {
    id: 1,
    name: "User1",
    username: "user1",
    email: "user1@gmail.com",
    password: "123",
    status:
      "Life is like a box of chocolates. You never know what you’re gonna get.",
    image: Profile1,
    friends: [
      {
        id: 2,
        name: "User2",
        username: "user2",
        image: Profile2,
        chatLog: [
          {
            send: true,
            message: "Hi User2",
          },
          {
            send: false,
            message: "Hi User1",
          },
          {
            send: true,
            message: "How are you?",
          },
          {
            send: false,
            message: "I am good How are you",
          },
        ],
      },
      {
        id: 3,
        name: "User3",
        username: "user3",
        image: Profile3,
        chatLog: [
          {
            send: false,
            message: "Hi User1",
          },
          {
            send: true,
            message: "Hi User3",
          },
          {
            send: true,
            message: "How are you?",
          },
        ],
      },
      {
        id: 4,
        name: "User4",
        username: "user4",
        image: Profile4,
        chatLog: [
          {
            send: false,
            message: "Hi User1",
          },
          {
            send: true,
            message: "Hi User4",
          },
          {
            send: true,
            message: "How are you?",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "User2",
    username: "user2",
    email: "user2@gmail.com",
    password: "123",
    status:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    image: Profile2,
    friends: [
      {
        id: 1,
        name: "User1",
        username: "user1",
        image: Profile1,
        chatLog: [
          {
            send: true,
            message: "Hi User1",
          },
          {
            send: false,
            message: "Hi User2",
          },
          {
            send: true,
            message: "How are you?",
          },
          {
            send: false,
            message: "I am good How are you",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "User3",
    username: "user3",
    email: "user3@gmail.com",
    password: "123",
    status: "Learning is like rowing upstream, not to advance is to drop back.",
    image: Profile3,
    friends: [
      {
        id: 1,
        name: "User1",
        username: "user1",
        image: Profile1,
        chatLog: [
          {
            send: false,
            message: "Hi User1",
          },
          {
            send: true,
            message: "Hi User3",
          },

          {
            send: true,
            message: "How are you?",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "User4",
    username: "user4",
    email: "user4@gmail.com",
    password: "123",
    status: "By failing to prepare, you are preparing to fail.",
    image: Profile4,
    friends: [
      {
        id: 1,
        name: "User1",
        username: "user1",
        image: Profile1,
        lastchat: "ok",
        chatLog: [
          {
            send: false,
            message: "Hi User1",
          },
          {
            send: true,
            message: "Hi User4",
          },

          {
            send: true,
            message: "How are you?",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "User5",
    username: "user5",
    email: "user5@gmail.com",
    password: "123",
    status: "Reading is to the mind what exercise is to the body.",
    image: Profile5,
    friends: [],
  },
  {
    id: 6,
    name: "User6",
    username: "user6",
    email: "user6@gmail.com",
    password: "123",
    status: "The purpose of our lives is to be happy.",
    image: Profile6,
    friends: [],
  },
];

// ******** Exports ******** //
export default users;
