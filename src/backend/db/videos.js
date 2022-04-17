import { v4 as uuid } from "uuid";

export const videos = [
  {
    _id: "bd8fd65d-2b80-48fb-b3f3-3d54fd98f8aa",
    image:
      "https://res.cloudinary.com/doohtm4bs/image/upload/v1650093807/video%20Library/puma_3_fytgq0.jpg",
    title: "Puma Rollin Wild Rider Unboxing",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "Bobby Solez",
    date: "Jun 5, 2021",
  },
  {
    _id: "b78538a7-06cc-41bc-aff1-633890cb197e",
    image:
      "https://res.cloudinary.com/doohtm4bs/image/upload/v1650093807/video%20Library/puma_2_lddlct.jpg",
    title: "PUMA Sneakers You need",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "Sneaker Talk",
    date: "Mar 16, 2020",
  },
  {
    _id: "337303c5-85f1-4a0f-b485-e9d73f37532a",
    image:
      "https://res.cloudinary.com/doohtm4bs/image/upload/v1650093807/video%20Library/puma_1_anljoz.jpg",
    title: " Best Budget Puma Shoes",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "One Chance",
    date: "Oct 18, 2021",
  },
  {
    _id: "9b0d420d-04aa-4e6f-91a0-c0c9d5541b0e",
    image:
      "https://res.cloudinary.com/doohtm4bs/image/upload/v1650093807/video%20Library/adidas_1_qtvmrc.jpg",
    title: "Top 10 ADIDAS Sneakers 2021",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "Seth Fowler",
    date: "Jun 24, 2021",
  },
  {
    _id: "3d353de2-f53f-4b00-a1d5-46824fa5a1dd",
    image:
      "https://res.cloudinary.com/doohtm4bs/image/upload/v1650093807/video%20Library/adidas_3_f9kipc.jpg",
    title: "The Adidas Ultra Boost",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "Hypebeast",
    date: "Jan 30, 2015",
  },
  {
    _id: "8d65b832-0a1f-407a-812d-8103aead3b28",
    image:
      "https://res.cloudinary.com/doohtm4bs/image/upload/v1650093806/video%20Library/adidas_2_gulgrv.jpg",
    title: "Adidas Cricket Shoes Unboxing",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "PC Gaming & Sports",
    date: "Dec 27, 2018",
  },
  {
    _id: "1c9ede91-a255-452d-aae0-62cb4ed3c4cc",
    image:
      "https://res.cloudinary.com/doohtm4bs/image/upload/v1650093807/video%20Library/jordan_1_tjl0uz.jpg",
    title: "Unboxing Every Air Jordan Sneaker",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "Unbox Therapy",
    date: "Jun 12, 2017",
  },
  {
    _id: "357f37b1-50b1-4f45-b53a-404cd6134e62",
    image:
      "https://res.cloudinary.com/doohtm4bs/image/upload/v1650093806/video%20Library/jordan_2_gvaqqe.jpg",
    title: "Top 5 Jordan 1’s under ₹20000",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "Karan Khatri",
    date: "Nov 26, 2021",
  },
  {
    _id: "231a15f6-ca5d-430c-8c12-d119cb750e09",
    image:
      "https://res.cloudinary.com/doohtm4bs/image/upload/v1650093807/video%20Library/jordan_3_our4xy.jpg",
    title: "Air Jordan 1-35",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "Englatero Kicks",
    date: "Sep 15, 2020",
  },
  {
    _id: "30d03731-830c-488f-aa26-9f004af18c18",
    image:
      "https://res.cloudinary.com/doohtm4bs/image/upload/v1650093806/video%20Library/converse_2_bbjw92.jpg",
    title: "Uunboxing : My All Converse Sneaker",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "One Chance",
    date: "Dec 16, 2021",
  },
  {
    _id: "5698e98e-5943-48ce-af0a-e0bdb77557e6",
    image:
      "https://res.cloudinary.com/doohtm4bs/image/upload/v1650093806/video%20Library/converse_3_ogsnnp.jpg",
    title: "Converse High Top vs Low Top",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "Harry Has",
    date: "Dec 4, 2020",
  },
  {
    _id: "fbf364b3-57da-46dd-96a4-24ecbc3e912a",
    image:
      "https://res.cloudinary.com/doohtm4bs/image/upload/v1650093806/video%20Library/converse_1_xm7vvj.jpg",
    title: "5 Types of Converse",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "The Sneaker Guy",
    date: "Jul 16, 2021",
  },
];
