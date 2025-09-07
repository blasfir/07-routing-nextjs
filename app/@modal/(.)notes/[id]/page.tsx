import NotePreview from "../../../../components/NotePreview/NotePreview";
import { fetchNoteById } from "../../../../lib/api"; 

type Props = {
  params: { id: string };
};

export default async function NoteModalPage({ params }: Props) {
  const note = await fetchNoteById(params.id);

  return (<NotePreview note={note} />);
}

