import React from 'react';

import { noteObj } from '../NewNoteInput/NewNoteInput'

export interface NewTask {
  note: noteObj;
  toArchive(note: noteObj): void;
  delNote(note: noteObj): void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setEditNote: React.Dispatch<React.SetStateAction<noteObj>>;
}

const Task: React.FC<NewTask> = ({ note, toArchive, delNote, setActive, setEditNote }) => {

  const editHandle = (note: noteObj) => {
    setActive(true);
    setEditNote(note);
  }

  return (
    <div className="task">
      <span>{note.category}</span>
      <span>{note.timeCreate}</span>
      <span>{note.text}</span>
      <span>{note.date}</span>
      <button className="btnTask" onClick={() => editHandle(note)}>edit</button>
      <button className="btnTask" onClick={() => toArchive(note)}>archive</button>
      <button className="btnTask" onClick={() => delNote(note)}>delete</button>
    </div>
  )
}

export default Task;