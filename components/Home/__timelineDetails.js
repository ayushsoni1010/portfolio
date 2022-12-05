import { MdOutlineEmojiEvents } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { VscSymbolEvent } from "react-icons/vsc";
import { MdTimeline } from "react-icons/md";
import { RiMapPinTimeLine } from "react-icons/ri";
import { MdEventNote } from "react-icons/md";
import { SiHiveBlockchain } from "react-icons/si";

const timelineDetails = [
  {
    timeline_title: "DevFest 2022",
    timeline_description:
      "magni iste quibusdam, minima autem odio facere delectus obcaecati cum nisi! Voluptas quibusdam cupiditate laborum.",
    timeline_icon: <RiMapPinTimeLine />,
    timeline_place: "Indore",
    timeline_date: "03rd - 04th December 2022",
    timeline_day: "Sunday",
    timeline_hostedby: "Google Developer Groups",
    timeline_event_link: "https://devfest.gdgindore.in/",
    timeline_tags: [
      { tag: "Flutter" },
      { tag: "Web3" },
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
      "magni iste quibusdam, minima autem odio facere delectus obcaecati cum nisi! Voluptas quibusdam cupiditate laborum.",
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
      "magni iste quibusdam, minima autem odio facere delectus obcaecati cum nisi! Voluptas quibusdam cupiditate laborum.",
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
      "magni iste quibusdam, minima autem odio facere delectus obcaecati cum nisi! Voluptas quibusdam cupiditate laborum.",
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
      "magni iste quibusdam, minima autem odio facere delectus obcaecati cum nisi! Voluptas quibusdam cupiditate laborum.",
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
      "magni iste quibusdam, minima autem odio facere delectus obcaecati cum nisi! Voluptas quibusdam cupiditate laborum.",
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
      "magni iste quibusdam, minima autem odio facere delectus obcaecati cum nisi! Voluptas quibusdam cupiditate laborum.",
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
    ],
    timeline_card_color: "purple.400",
  },
  {
    timeline_title: "Getting started with Open Source",
    timeline_description:
      "magni iste quibusdam, minima autem odio facere delectus obcaecati cum nisi! Voluptas quibusdam cupiditate laborum.",
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
      { tag: "Contribution" },
      { tag: "Community" },
    ],
    timeline_card_color: "orange.400",
  },
  {
    timeline_title: "MLH HackCon IN",
    timeline_description:
      "magni iste quibusdam, minima autem odio facere delectus obcaecati cum nisi! Voluptas quibusdam cupiditate laborum.",
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
