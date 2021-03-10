import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function CreateEntry(entry) {
  return (
    <Entry
      key={entry.id}
      emoji={entry.emoji}
      detail={entry.name}
      description={entry.meaning}
    />
  );
}

function Dictionary() {
  return <div className="dictionary">{emojipedia.map(CreateEntry)};</div>;
}

export default Dictionary;
