import React, { useState } from "react";
import uuid from 'react-uuid';
import { useDispatch } from "react-redux";
import { addNote } from "../action/actions";
import { removeNote } from "../action/actions";
import { removeArchiveNote } from "../action/actions"
import { unArchiveNote } from "../action/actions"
import { archiveNote } from "../action/actions";
import { NewNoteInput } from "../components/NewNoteInput";
import { noteObj } from "../components/NewNoteInput";
import "./App.css";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Task from "../components/task";
import Archive from "../components/archive";
import TotalInfo from "../components/totalInfo";

function App() {
  let arr = null;
  const [arch, setArch] = useState(false)

  const notes = useTypedSelector(
    (state) => state.add.notes
  );

  const archNotes = useTypedSelector(
    (state) => state.arch.notesArch
  );


  const dispatch = useDispatch();

  const onAddNote = (note: noteObj) => {
    dispatch(addNote(note));
  };

  const delNote = (note: noteObj) => {
    dispatch(removeNote(note));
  };

  const delArchNote = (note: noteObj) => {
    dispatch(removeArchiveNote(note));
  }

  const toArchive = (note: noteObj) => {
    dispatch(archiveNote(note));
    delNote(note);
  }

  const unArchive = (note: noteObj) => {
    dispatch(unArchiveNote(note));
    delArchNote(note);
  }

  const showArchive = () => {
    setArch(true);
  }

  const showTasks = () => {
    setArch(false);
  }

  if (!arch) {
    arr = notes;
  } else {
    arr = archNotes;
  }

  return (
    <>
      <div className="task titles">
        <span>Category</span>
        <span>Created</span>
        <span>Content</span>
        <span>Date</span>
      </div>

      {
        arr.map((note) => {
          return (
            !arch ?
              <Task key={uuid()} note={note} toArchive={toArchive} delNote={delNote} /> :
              <Archive key={uuid()} note={note} unArchive={unArchive} delArchNote={delArchNote} />
          );
        })
      }
      <NewNoteInput addNote={onAddNote} />
      <div className="input-panel">
        <button id="show-all-btn" onClick={showTasks}>All task</button>
        <button id="show-archived-btn" onClick={showArchive}>Archived task</button>
      </div>
      <TotalInfo notes={notes} archNotes={archNotes} />
    </>
  );
}

export default App;
