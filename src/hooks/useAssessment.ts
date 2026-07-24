import { useEffect, useState } from "react";
import { storage, type SavedAssessment } from "@/lib/storage";

export function useAssessment() {
  const [assessments, setAssessments] = useState<SavedAssessment[]>([]);
  const [assessment, setAssessment] = useState<SavedAssessment | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const all = storage.getAssessments();
    setAssessments(all);
    setAssessment(all.length > 0 ? all[0] : null);
    setReady(true);
  }, []);

  const save = (a: SavedAssessment) => {
    const all = storage.getAssessments();
    const next = [a, ...all];
    storage.setAssessments(next);
    setAssessments(next);
    setAssessment(a);
  };

  return { assessment, assessments, save, ready };
}
