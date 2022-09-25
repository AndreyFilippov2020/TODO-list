import React from 'react';

import { noteObj } from './NewNoteInput'

export interface NewTask {
  note: noteObj;
  toArchive(note: noteObj): void;
  delNote(note: noteObj): void;
}

const Task: React.FC<NewTask> = ({ note, toArchive, delNote }) => {

  return (
    <div className="task">
      <span>{note.category}</span>
      <span>{note.timeCreate}</span>
      <span>{note.text}</span>
      <span>{note.date}</span>
      <button onClick={() => toArchive(note)}>archive</button>
      <button onClick={() => delNote(note)}>delete</button>
    </div>
  )
}

export default Task;