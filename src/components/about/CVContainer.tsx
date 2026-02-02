import CVFolder from './CVFolder';

interface CVContainerProps {
  setIsCVContainerOpen: (value: boolean) => void;
}

export default function CVContainer({
  setIsCVContainerOpen,
}: CVContainerProps) {
  return (
    <div
      className="fixed top-0 left-0 z-50 flex size-full items-center justify-center border bg-white/50 dark:bg-black/50 backdrop-blur-2xl"
      onClick={() => setIsCVContainerOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      <div className="flex gap-20" onClick={(e) => e.stopPropagation()}>
        <CVFolder language="en" />
        <CVFolder language="es" />
      </div>
    </div>
  );
}
