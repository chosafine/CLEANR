import React from "react";
import { homeCleaning, officeCleaning, venueCleaning } from "../../utils/questions";
import Card from "../Card/card";

function Question() {
  const homeCards = homeCleaning.map(question => <Card question={question}/>);
  const officeCards = officeCleaning.map(question => <Card question={question}/>);
  const venueCards = venueCleaning.map(question => <Card question={question}/>);

  return { homeCards, officeCards, venueCards };
}

export default Question;
