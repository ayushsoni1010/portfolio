import { MdOutlineEmojiEvents } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { VscSymbolEvent } from "react-icons/vsc";
import { MdTimeline } from "react-icons/md";
import { RiMapPinTimeLine } from "react-icons/ri";
import { MdEventNote } from "react-icons/md";
import { SiHiveBlockchain } from "react-icons/si";
import { IoIosRocket } from "react-icons/io";

const timelineDetails = [
  {
    timeline_title: "Experiential Learning, OmniStudio and Test Automation",
    timeline_description:
      "Again, heads up to the Trailblazer community for organizing such amazing events where I deep down into the learnings on Lightning Web Components, OmniStudio, etc. Met with various people at the event, and enjoyed the activities where teams faced challenges and rewarded amazing swags.",
    timeline_icon: <IoIosRocket />,
    timeline_place: "Indore",
    timeline_date: "21st January 2023",
    timeline_day: "Saturday",
    timeline_hostedby: "Salesforce",
    timeline_event_link: "https://www.salesforce.com/in/",
    timeline_tags: [
      { tag: "Salesforce" },
      { tag: "Trailblazer" },
      { tag: "Community" },
      { tag: "OmniStudio" },
      { tag: "Lightning Web Components" },
      { tag: "Testing" },
      { tag: "Automation" },
    ],
    timeline_card_color: "purple.400",
  },
  {
    timeline_title: "DevFest 2022",
    timeline_description:
      "It was an amazing experience meeting with the experts and other speakers at DevFest Indore 2022 hosted by Google Developer Groups Indore. I met with many folks at the event and mentored the same. I learned about various things related to flutter, game, and android development.",
    timeline_icon: <RiMapPinTimeLine />,
    timeline_place: "Indore",
    timeline_date: "04th December 2022",
    timeline_day: "Sunday",
    timeline_hostedby: "Google Developer Groups",
    timeline_event_link: "https://devfest.gdgindore.in/",
    timeline_tags: [
      { tag: "Flutter" },
      { tag: "DevFest Indore" },
      { tag: "Andriod" },
      { tag: "Game Development" },
      { tag: "JavaScript" },
      { tag: "Community Space" },
    ],
    timeline_card_color: "red.400",
  },
  {
    timeline_title: "Developers India Tour",
    timeline_description:
      "This event was more about creating the hands-on contract and getting an NFT. Got some insights about the Solana chain and build projects using JavaScript. I mentored and helped many folks in project building and connected with the people.",
    timeline_icon: <SiHiveBlockchain />,
    timeline_place: "Bhopal",
    timeline_date: "18th November 2022",
    timeline_day: "Friday",
    timeline_hostedby: "Solana",
    timeline_event_link: "https://solana.com/",
    timeline_tags: [
      { tag: "Solana" },
      { tag: "Blockchain" },
      { tag: "Tour" },
      { tag: "JavaScript" },
      { tag: "Solana Foundation" },
      { tag: "Community" },
    ],
    timeline_card_color: "teal.400",
  },
  {
    timeline_title: "#RoadToPolygonConnect Polygon Guild Jaipur",
    timeline_description:
      "Another web3 event excited me about polygon solutions and different chains and networks in the market. I was curious to know more about centralized and decentralized applications, and layers in web3. I was surrounded by a bunch of web3 people who are building communities and cool applications.",
    timeline_icon: <MdEventNote />,
    timeline_place: "Jaipur",
    timeline_date: "6th November 2022",
    timeline_day: "Sunday",
    timeline_hostedby: "Polygon",
    timeline_event_link: "https://polygon.technology/",
    timeline_tags: [
      { tag: "Polygon" },
      { tag: "Blockchain" },
      { tag: "Web3" },
      { tag: "Ethereum" },
      { tag: "Guild" },
      { tag: "Community" },
      { tag: "dApps" },
    ],
    timeline_card_color: "orange.400",
  },
  {
    timeline_title: "AWS Community Day Rajasthan",
    timeline_description:
      "A community meetup for all the people who are getting started and experienced with AWS. I connected with various people who are working professionally in cloud computing, learned new things about AWS services, and explored the city.",
    timeline_icon: <MdTimeline />,
    timeline_place: "Jaipur",
    timeline_date: "5th November 2022",
    timeline_day: "Saturday",
    timeline_hostedby: "Amazon Web Services",
    timeline_event_link: "https://awsugjaipur.in/",
    timeline_tags: [
      { tag: "AWS" },
      { tag: "Community" },
      { tag: "Software Development" },
      { tag: "Cloud Native" },
      { tag: "Conference" },
      { tag: "DevOps" },
      { tag: "Open Source" },
    ],
    timeline_card_color: "blue.400",
  },
  {
    timeline_title: "CoinDCX Indore Bitcoin Whitepaper Day Meetup",
    timeline_description:
      "As the name signifies Bitcoin, I dive deeper into cryptocurrencies and blockchain and reminded me of Satoshi Nakamoto. I met with amazing folks, founders, and speakers who changed my perspective on Web3, dApps, etc., and discussed further building web3 communities and projects.",
    timeline_icon: <RiMapPinTimeLine />,
    timeline_place: "Indore",
    timeline_date: "30th October 2022",
    timeline_day: "Sunday",
    timeline_hostedby: "CoinDCX",
    timeline_event_link: "https://coindcx.com",
    timeline_tags: [
      { tag: "CoinDCX" },
      { tag: "Web3" },
      { tag: "Indore Chapter" },
      { tag: "Bitcoin" },
      { tag: "Whitepaper" },
      { tag: "Ethereum" },
      { tag: "Community Space" },
    ],
    timeline_card_color: "red.400",
  },
  {
    timeline_title: "Trailblazer Community Indore Diwali Meetup",
    timeline_description:
      "This was one of the first events, I got to know various things about Salesforce and the Trailblazer community of the Salesforce Developer Groups at Indore. It provides customer relationship management software and applications focused on sales, customer service, marketing automation, analytics, and application development. ",
    timeline_icon: <VscSymbolEvent />,
    timeline_place: "Indore",
    timeline_date: "29th October 2022",
    timeline_day: "Saturday",
    timeline_hostedby: "Salesforce",
    timeline_event_link: "https://www.salesforce.com/in/",
    timeline_tags: [
      { tag: "Salesforce" },
      { tag: "Trailblazer" },
      { tag: "Community" },
      { tag: "Lightning Web Components" },
      { tag: "Event" },
      { tag: "Cloud Computing" },
    ],
    timeline_card_color: "teal.400",
  },
  {
    timeline_title: "HotWax Hacktoberfest Meetup",
    timeline_description:
      "Again, heads up with another meetup of Hacktoberfest. I contributed to various open-source projects, got exciting goodies and swags from the HotWax team, collaborated with the people at the event, and learned something new.",
    timeline_icon: <MdEvent />,
    timeline_place: "Indore",
    timeline_date: "14th October 2022",
    timeline_day: "Friday",
    timeline_hostedby: "HotWax Systems",
    timeline_event_link: "https://mlh.io/",
    timeline_tags: [
      { tag: "HotWax" },
      { tag: "Open Source" },
      { tag: "Hacktoberfest" },
      { tag: "Contribution" },
      { tag: "Meetup" },
      { tag: "Projects" },
    ],
    timeline_card_color: "purple.400",
  },
  {
    timeline_title: "Getting started with Open Source",
    timeline_description:
      "It was the time of Hacktoberfest, I had contributed to open-source projects, collaborate with amazing folks in the community, and learned new things. All the things were around Open Source and contributions to the Hacktoberfest 2022 program.",
    timeline_icon: <MdEventAvailable />,
    timeline_place: "Indore",
    timeline_date: "08th October 2022",
    timeline_day: "Saturday",
    timeline_hostedby: "Datacode",
    timeline_event_link: "https://datacode.in/",
    timeline_tags: [
      { tag: "Datacode" },
      { tag: "Hacktoberfest" },
      { tag: "Open Source" },
      { tag: "Projects" },
      { tag: "Contribution" },
      { tag: "Community" },
    ],
    timeline_card_color: "orange.400",
  },
  {
    timeline_title: "MLH HackCon IN",
    timeline_description:
      "MLH HackCon was the first conference in India organized by Major League Hacking community. I met with fellow hackers, GitHub Campus Experts, the MLH team, and other amazing like-minded folks. This was the first conference I had ever attended and enjoyed all the amazing activites and after party sessions.",
    timeline_icon: <MdOutlineEmojiEvents />,
    timeline_place: "Delhi",
    timeline_date: "24th September 2022",
    timeline_day: "Sunday",
    timeline_hostedby: "Major League Hacking",
    timeline_event_link: "https://mlh.io/",
    timeline_tags: [
      { tag: "MLH" },
      { tag: "HackCon" },
      { tag: "Conference" },
      { tag: "GitHub Education" },
      { tag: "MLH Fellowship" },
      { tag: "Community" },
    ],
    timeline_card_color: "cyan.400",
  },
];

export { timelineDetails };
