"use client";

import { useRouter } from "next/navigation";
import Modal from "../../../../components/Modal/Modal";
import css from "./NotePreview.module.css"
import type { Note } from '../../../../types/note';


interface NotePreviewProps {
  note: Note;
}

export default function NotePreview({ note }: NotePreviewProps) {
    const router = useRouter();
    
  return (
    <Modal onClose={() => router.back()}>
        <div className={css.container}>
              <header className={css.header}>
                  <h2>{note.title}</h2>
                  <button onClick={() => router.back()} className={css.backBtn}>Close</button>
              </header> 
              <div>
                  <ul>
                      <li className={css.item}><p className={css.content}>{note.content}</p></li>
                      <li className={css.item}><p className={css.date}>{note.createdAt}</p></li>
                      <li className={css.item}><p className={css.tag}>{note.tag}</p></li>
                  </ul>
              </div>
        </div>
    </Modal>
  );
}